"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { 
  PlusCircle, 
  X, 
  Edit, 
  Trash2, 
  Upload, 
  Image as ImageIcon,
  Save,
  Loader2,
  Eye,
  EyeOff,
  Settings,
  Package,
  AlertCircle
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useDropzone } from "react-dropzone"
import axios from "axios"

interface SubService {
  _id?: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string | null;
  imageKey: string | null;
}

interface ServiceCategory {
  _id: string;
  name: string;
  slug: string;
  description: string;
  mainImage: string;
  mainImageKey: string;
  subServices: SubService[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

// Reusable dropzone component for sub-service images
const SubServiceImageDropzone = ({ index, onDrop }: { index: number; onDrop: (index: number, files: File[]) => void }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => onDrop(index, files),
    accept: { 'image/*': [] },
    maxFiles: 1
  })

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-gray-400"
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto w-6 h-6 text-gray-400 mb-2" />
      <p className="text-sm text-gray-600">Upload image</p>
    </div>
  )
}

export default function ServicesManagement() {
  const [services, setServices] = useState<ServiceCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    isActive: true,
    subServicesData: "[]"
  })

  const [subServices, setSubServices] = useState<SubService[]>([])
  const [mainImageFile, setMainImageFile] = useState<File | null>(null)
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null)
  const [subServiceImages, setSubServiceImages] = useState<{ [key: number]: File }>({})

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await axios.get(`${API_BASE_URL}/services/find`)
      setServices(response.data)
    } catch (err: unknown) {
      const error = err as { response?: { data?: { error?: string } } }
      setError(error.response?.data?.error || "Failed to fetch services")
    } finally {
      setIsLoading(false)
    }
  }

  const onMainImageDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      setMainImageFile(file)
      
      const reader = new FileReader()
      reader.onloadend = () => {
        setMainImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const { getRootProps: getMainImageRootProps, getInputProps: getMainImageInputProps, isDragActive: isMainImageDragActive } = useDropzone({
    onDrop: onMainImageDrop,
    accept: { 'image/*': [] },
    maxFiles: 1
  })

  const onSubServiceImageDrop = useCallback((index: number, acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      setSubServiceImages(prev => ({ ...prev, [index]: file }))
    }
  }, [])

  const addSubService = () => {
    const newSubService: SubService = {
      name: "",
      slug: "",
      description: "",
      imageUrl: null,
      imageKey: null
    }
    setSubServices([...subServices, newSubService])
  }

  const updateSubService = (index: number, field: keyof SubService, value: string) => {
    const updated = [...subServices]
    updated[index] = { ...updated[index], [field]: value }
    setSubServices(updated)
  }

  const removeSubService = (index: number) => {
    setSubServices(subServices.filter((_, i) => i !== index))
    setSubServiceImages(prev => {
      const newImages = { ...prev }
      delete newImages[index]
      return newImages
    })
  }

  const generateSlug = (name: string) => {
    return name.toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.description) {
      setError("Name and description are required")
      return
    }

    if (!mainImageFile && !editingId) {
      setError("Main image is required")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const submitFormData = new FormData()
      submitFormData.append("name", formData.name)
      submitFormData.append("slug", formData.slug || generateSlug(formData.name))
      submitFormData.append("description", formData.description)
      submitFormData.append("isActive", String(formData.isActive))
      submitFormData.append("subServicesData", JSON.stringify(subServices))

      if (mainImageFile) {
        submitFormData.append("mainImage", mainImageFile)
      }

      // Add sub-service images
      Object.entries(subServiceImages).forEach(([index, file]) => {
        submitFormData.append(`subServiceImage_${index}`, file)
      })

      if (editingId) {
        await axios.put(`${API_BASE_URL}/services/${editingId}`, submitFormData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      } else {
        await axios.post(`${API_BASE_URL}/services/create`, submitFormData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      }

      await fetchServices()
      resetForm()
      setShowForm(false)
    } catch (err: unknown) {
      const error = err as { response?: { data?: { error?: string } } }
      setError(error.response?.data?.error || "Failed to save service")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this service? This action cannot be undone.")) {
      return
    }

    try {
      await axios.delete(`${API_BASE_URL}/services/${id}`)
      await fetchServices()
    } catch (err: unknown) {
      const error = err as { response?: { data?: { error?: string } } }
      setError(error.response?.data?.error || "Failed to delete service")
    }
  }

  const handleEdit = (service: ServiceCategory) => {
    setEditingId(service._id)
    setFormData({
      name: service.name,
      slug: service.slug,
      description: service.description,
      isActive: service.isActive,
      subServicesData: JSON.stringify(service.subServices)
    })
    setSubServices(service.subServices)
    setMainImagePreview(service.mainImage)
    setShowForm(true)
  }

  const resetForm = () => {
    setFormData({
      name: "",
      slug: "",
      description: "",
      isActive: true,
      subServicesData: "[]"
    })
    setSubServices([])
    setMainImageFile(null)
    setMainImagePreview(null)
    setSubServiceImages({})
    setEditingId(null)
  }

  const toggleServiceStatus = async (id: string, currentStatus: boolean) => {
    try {
      const service = services.find(s => s._id === id)
      if (!service) return

      const updatedService = { ...service, isActive: !currentStatus }
      const formData = new FormData()
      formData.append("name", updatedService.name)
      formData.append("slug", updatedService.slug)
      formData.append("description", updatedService.description)
      formData.append("isActive", String(updatedService.isActive))
      formData.append("subServicesData", JSON.stringify(updatedService.subServices))

      await axios.put(`${API_BASE_URL}/services/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      await fetchServices()
    } catch (err: unknown) {
      const error = err as { response?: { data?: { error?: string } } }
      setError(error.response?.data?.error || "Failed to update service status")
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading services...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
          <p className="text-gray-600 mt-1">Manage your service categories and sub-services</p>
        </div>
        <Button 
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <PlusCircle className="w-5 h-5" />
          Add New Service
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Total Services</p>
                <p className="text-2xl font-bold text-blue-900">{services.length}</p>
              </div>
              <Package className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Active Services</p>
                <p className="text-2xl font-bold text-green-900">
                  {services.filter(s => s.isActive).length}
                </p>
              </div>
              <Eye className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Total Sub-Services</p>
                <p className="text-2xl font-bold text-purple-900">
                  {services.reduce((acc, service) => acc + service.subServices.length, 0)}
                </p>
              </div>
              <Settings className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Inactive Services</p>
                <p className="text-2xl font-bold text-orange-900">
                  {services.filter(s => !s.isActive).length}
                </p>
              </div>
              <EyeOff className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Error Display */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4"
        >
          <div className="flex items-center gap-2 text-red-800">
            <AlertCircle className="w-5 h-5" />
            <span>{error}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setError(null)}
              className="ml-auto text-red-600 hover:text-red-800"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      )}

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {services.map((service) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Card className={`h-full transition-all duration-200 hover:shadow-lg ${
                service.isActive ? 'border-green-200' : 'border-gray-200'
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {service.name}
                      </CardTitle>
                      <p className="text-sm text-gray-500 mt-1">/{service.slug}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={service.isActive}
                        onCheckedChange={() => toggleServiceStatus(service._id, service.isActive)}
                        className="data-[state=checked]:bg-green-600"
                      />
                      <Badge variant={service.isActive ? "success" : "secondary"}>
                        {service.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Main Image */}
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                    {service.mainImage ? (
                      <img
                        src={service.mainImage}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Sub-services count */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Settings className="w-4 h-4" />
                    <span>{service.subServices.length} sub-services</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(service)}
                      className="flex-1"
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(service._id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {services.length === 0 && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No services yet</h3>
          <p className="text-gray-600 mb-6">Get started by creating your first service category.</p>
          <Button 
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Create First Service
          </Button>
        </motion.div>
      )}

      {/* Add/Edit Service Dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {editingId ? 'Edit Service' : 'Add New Service'}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Service Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter service name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="auto-generated from name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter service description"
                rows={3}
                required
              />
            </div>

            {/* Main Image Upload */}
            <div className="space-y-2">
              <Label>Main Image *</Label>
              <div
                {...getMainImageRootProps()}
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                  isMainImageDragActive
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <input {...getMainImageInputProps()} />
                {mainImagePreview ? (
                  <div className="space-y-2">
                    <img
                      src={mainImagePreview}
                      alt="Preview"
                      className="mx-auto max-h-32 rounded-lg"
                    />
                    <p className="text-sm text-gray-600">Click or drag to replace</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="mx-auto w-8 h-8 text-gray-400" />
                    <p className="text-sm text-gray-600">
                      {isMainImageDragActive
                        ? 'Drop the image here'
                        : 'Drag & drop an image, or click to select'}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sub-services */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Sub-services</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addSubService}
                >
                  <PlusCircle className="w-4 h-4 mr-1" />
                  Add Sub-service
                </Button>
              </div>

              <div className="space-y-4">
                {subServices.map((subService, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Name</Label>
                        <Input
                          value={subService.name}
                          onChange={(e) => updateSubService(index, 'name', e.target.value)}
                          placeholder="Sub-service name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Slug</Label>
                        <Input
                          value={subService.slug}
                          onChange={(e) => updateSubService(index, 'slug', e.target.value)}
                          placeholder="auto-generated"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <Label>Description</Label>
                      <Textarea
                        value={subService.description}
                        onChange={(e) => updateSubService(index, 'description', e.target.value)}
                        placeholder="Sub-service description"
                        rows={2}
                      />
                    </div>
                    <div className="space-y-2 mt-4">
                      <Label>Image</Label>
                      <SubServiceImageDropzone 
                        index={index} 
                        onDrop={onSubServiceImageDrop} 
                      />
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => removeSubService(index)}
                      className="mt-4"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Remove
                    </Button>
                  </Card>
                ))}
              </div>
            </div>

            {/* Status Toggle */}
            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                checked={formData.isActive}
                onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
              />
              <Label htmlFor="isActive">Active</Label>
            </div>

            {/* Form Actions */}
            <div className="flex items-center gap-3 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    {editingId ? 'Update Service' : 'Create Service'}
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowForm(false)
                  resetForm()
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
} 