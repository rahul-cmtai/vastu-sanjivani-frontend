"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  BookOpen,
  Star,
  Users,
  Clock,
  DollarSign,
  AlertCircle,
  CheckCircle,
  GraduationCap
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useDropzone } from "react-dropzone"
import axios from "axios"

interface Course {
  _id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice: number;
  rating: number;
  totalRatings: number;
  imageUrl: string;
  imageKey: string;
  category: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  language: string;
  features: string[];
  requirements: string[];
  whatYouWillLearn: string[];
  isActive: boolean;
  isFeatured: boolean;
  enrollmentCount: number;
  certificateIncluded: boolean;
  lifetimeAccess: boolean;
  mobileAccess: boolean;
  createdAt: string;
  updatedAt: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

// Reusable array input component
const ArrayInput = ({ 
  label, 
  value, 
  onChange, 
  placeholder 
}: { 
  label: string; 
  value: string[]; 
  onChange: (value: string[]) => void; 
  placeholder: string;
}) => {
  const [inputValue, setInputValue] = useState("")

  const addItem = () => {
    if (inputValue.trim()) {
      onChange([...value, inputValue.trim()])
      setInputValue("")
    }
  }

  const removeItem = (index: number) => {
    onChange(value.filter((_, i) => i !== index))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addItem()
    }
  }

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="flex-1"
        />
        <Button type="button" variant="outline" onClick={addItem}>
          Add
        </Button>
      </div>
      {value.length > 0 && (
        <div className="space-y-2">
          {value.map((item, index) => (
            <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
              <span className="flex-1 text-sm">{item}</span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeItem(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function CoursesManagement() {
  const [courses, setCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  type LevelType = "Beginner" | "Intermediate" | "Advanced"

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    shortDescription: "",
    price: 0,
    originalPrice: 0,
    category: "",
    instructor: "Admin",
    duration: "",
    level: "Beginner" as LevelType,
    language: "English",
    features: [] as string[],
    requirements: [] as string[],
    whatYouWillLearn: [] as string[],
    isActive: true,
    isFeatured: false,
    certificateIncluded: true,
    lifetimeAccess: true,
    mobileAccess: true
  })

  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await axios.get(`${API_BASE_URL}/courses/find`)
      setCourses(response.data)
    } catch (err: unknown) {
      const error = err as { response?: { data?: { error?: string } } }
      setError(error.response?.data?.error || "Failed to fetch courses")
    } finally {
      setIsLoading(false)
    }
  }

  const onImageDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      setImageFile(file)
      
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const { getRootProps: getImageRootProps, getInputProps: getImageInputProps, isDragActive: isImageDragActive } = useDropzone({
    onDrop: onImageDrop,
    accept: { 'image/*': [] },
    maxFiles: 1
  })

  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title || !formData.description || !formData.price) {
      setError("Title, description, and price are required")
      return
    }

    if (!imageFile && !editingId) {
      setError("Course image is required")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const submitFormData = new FormData()
      submitFormData.append("title", formData.title)
      submitFormData.append("slug", formData.slug || generateSlug(formData.title))
      submitFormData.append("description", formData.description)
      submitFormData.append("shortDescription", formData.shortDescription)
      submitFormData.append("price", String(formData.price))
      submitFormData.append("originalPrice", String(formData.originalPrice))
      submitFormData.append("category", formData.category)
      submitFormData.append("instructor", formData.instructor)
      submitFormData.append("duration", formData.duration)
      submitFormData.append("level", formData.level)
      submitFormData.append("language", formData.language)
      submitFormData.append("features", JSON.stringify(formData.features))
      submitFormData.append("requirements", JSON.stringify(formData.requirements))
      submitFormData.append("whatYouWillLearn", JSON.stringify(formData.whatYouWillLearn))
      submitFormData.append("isActive", String(formData.isActive))
      submitFormData.append("isFeatured", String(formData.isFeatured))
      submitFormData.append("certificateIncluded", String(formData.certificateIncluded))
      submitFormData.append("lifetimeAccess", String(formData.lifetimeAccess))
      submitFormData.append("mobileAccess", String(formData.mobileAccess))

      if (imageFile) {
        submitFormData.append("image", imageFile)
      }

      if (editingId) {
        await axios.put(`${API_BASE_URL}/courses/${editingId}`, submitFormData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      } else {
        await axios.post(`${API_BASE_URL}/courses/create`, submitFormData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      }

      await fetchCourses()
      resetForm()
      setShowForm(false)
    } catch (err: unknown) {
      const error = err as { response?: { data?: { error?: string } } }
      setError(error.response?.data?.error || "Failed to save course")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this course? This action cannot be undone.")) {
      return
    }

    try {
      await axios.delete(`${API_BASE_URL}/courses/${id}`)
      await fetchCourses()
    } catch (err: unknown) {
      const error = err as { response?: { data?: { error?: string } } }
      setError(error.response?.data?.error || "Failed to delete course")
    }
  }

  const handleEdit = (course: Course) => {
    setEditingId(course._id)
    setFormData({
      title: course.title,
      slug: course.slug,
      description: course.description,
      shortDescription: course.shortDescription,
      price: course.price,
      originalPrice: course.originalPrice,
      category: course.category,
      instructor: course.instructor,
      duration: course.duration,
      level: course.level,
      language: course.language,
      features: course.features,
      requirements: course.requirements,
      whatYouWillLearn: course.whatYouWillLearn,
      isActive: course.isActive,
      isFeatured: course.isFeatured,
      certificateIncluded: course.certificateIncluded,
      lifetimeAccess: course.lifetimeAccess,
      mobileAccess: course.mobileAccess
    })
    setImagePreview(course.imageUrl)
    setShowForm(true)
  }

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      description: "",
      shortDescription: "",
      price: 0,
      originalPrice: 0,
      category: "",
      instructor: "Admin",
      duration: "",
      level: "Beginner",
      language: "English",
      features: [],
      requirements: [],
      whatYouWillLearn: [],
      isActive: true,
      isFeatured: false,
      certificateIncluded: true,
      lifetimeAccess: true,
      mobileAccess: true
    })
    setImageFile(null)
    setImagePreview(null)
    setEditingId(null)
  }

  const toggleCourseStatus = async (id: string, currentStatus: boolean) => {
    try {
      const course = courses.find(c => c._id === id)
      if (!course) return

      const updatedCourse = { ...course, isActive: !currentStatus }
      const formData = new FormData()
      formData.append("title", updatedCourse.title)
      formData.append("slug", updatedCourse.slug)
      formData.append("description", updatedCourse.description)
      formData.append("shortDescription", updatedCourse.shortDescription)
      formData.append("price", String(updatedCourse.price))
      formData.append("originalPrice", String(updatedCourse.originalPrice))
      formData.append("category", updatedCourse.category)
      formData.append("instructor", updatedCourse.instructor)
      formData.append("duration", updatedCourse.duration)
      formData.append("level", updatedCourse.level)
      formData.append("language", updatedCourse.language)
      formData.append("features", JSON.stringify(updatedCourse.features))
      formData.append("requirements", JSON.stringify(updatedCourse.requirements))
      formData.append("whatYouWillLearn", JSON.stringify(updatedCourse.whatYouWillLearn))
      formData.append("isActive", String(updatedCourse.isActive))
      formData.append("isFeatured", String(updatedCourse.isFeatured))
      formData.append("certificateIncluded", String(updatedCourse.certificateIncluded))
      formData.append("lifetimeAccess", String(updatedCourse.lifetimeAccess))
      formData.append("mobileAccess", String(updatedCourse.mobileAccess))

      await axios.put(`${API_BASE_URL}/courses/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      await fetchCourses()
    } catch (err: unknown) {
      const error = err as { response?: { data?: { error?: string } } }
      setError(error.response?.data?.error || "Failed to update course status")
    }
  }

  const totalRevenue = courses.reduce((acc, course) => acc + (course.price * course.enrollmentCount), 0)
  const activeCourses = courses.filter(c => c.isActive).length
  const totalEnrollments = courses.reduce((acc, course) => acc + course.enrollmentCount, 0)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading courses...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Courses Management</h1>
          <p className="text-gray-600 mt-1">Manage your online courses and learning content</p>
        </div>
        <Button 
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <PlusCircle className="w-5 h-5" />
          Add New Course
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Total Courses</p>
                <p className="text-2xl font-bold text-blue-900">{courses.length}</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Active Courses</p>
                <p className="text-2xl font-bold text-green-900">{activeCourses}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Total Enrollments</p>
                <p className="text-2xl font-bold text-purple-900">{totalEnrollments}</p>
              </div>
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Total Revenue</p>
                <p className="text-2xl font-bold text-orange-900">₹{totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-orange-600" />
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

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {courses.map((course) => (
            <motion.div
              key={course._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Card className={`h-full transition-all duration-200 hover:shadow-lg ${
                course.isActive ? 'border-green-200' : 'border-gray-200'
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                        {course.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500 mt-1">/{course.slug}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={course.isActive}
                        onCheckedChange={() => toggleCourseStatus(course._id, course.isActive)}
                        className="data-[state=checked]:bg-green-600"
                      />
                      <Badge variant={course.isActive ? "success" : "secondary"}>
                        {course.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Course Image */}
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                    {course.imageUrl ? (
                      <img
                        src={course.imageUrl}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    {course.isFeatured && (
                      <div className="absolute top-2 left-2">
                        <Badge variant="warning" className="bg-yellow-500 text-white">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Course Info */}
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {course.shortDescription || course.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{course.rating.toFixed(1)}</span>
                        <span className="text-sm text-gray-500">({course.totalRatings})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{course.enrollmentCount}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4" />
                        <span>{course.level}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-green-600">
                        ₹{course.price.toLocaleString()}
                      </div>
                      {course.originalPrice > course.price && (
                        <div className="text-sm text-gray-500 line-through">
                          ₹{course.originalPrice.toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(course)}
                      className="flex-1"
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(course._id)}
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
      {courses.length === 0 && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses yet</h3>
          <p className="text-gray-600 mb-6">Get started by creating your first course.</p>
          <Button 
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Create First Course
          </Button>
        </motion.div>
      )}

      {/* Add/Edit Course Dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {editingId ? 'Edit Course' : 'Add New Course'}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Course Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter course title"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="auto-generated from title"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="shortDescription">Short Description</Label>
              <Input
                id="shortDescription"
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                placeholder="Brief course description"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Full Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Detailed course description"
                rows={4}
                required
              />
            </div>

            {/* Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price (₹) *</Label>
                <Input
                  id="price"
                  type="number"
                  min="0"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                  placeholder="0"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="originalPrice">Original Price (₹)</Label>
                <Input
                  id="originalPrice"
                  type="number"
                  min="0"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData({ ...formData, originalPrice: Number(e.target.value) })}
                  placeholder="0"
                />
              </div>
            </div>

            {/* Course Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="e.g., Technology, Business"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instructor">Instructor</Label>
                <Input
                  id="instructor"
                  value={formData.instructor}
                  onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                  placeholder="Course instructor"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="e.g., 10 hours, 2 weeks"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="level">Level</Label>
                <Select
                  value={formData.level}
                  onValueChange={(value: LevelType) => setFormData({ ...formData, level: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Input
                  id="language"
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  placeholder="e.g., English, Hindi"
                />
              </div>
            </div>

            {/* Course Image Upload */}
            <div className="space-y-2">
              <Label>Course Image *</Label>
              <div
                {...getImageRootProps()}
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                  isImageDragActive
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <input {...getImageInputProps()} />
                {imagePreview ? (
                  <div className="space-y-2">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="mx-auto max-h-32 rounded-lg"
                    />
                    <p className="text-sm text-gray-600">Click or drag to replace</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="mx-auto w-8 h-8 text-gray-400" />
                    <p className="text-sm text-gray-600">
                      {isImageDragActive
                        ? 'Drop the image here'
                        : 'Drag & drop an image, or click to select'}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Course Content */}
            <div className="space-y-4">
              <ArrayInput
                label="Course Features"
                value={formData.features}
                onChange={(value) => setFormData({ ...formData, features: value })}
                placeholder="Add a feature (e.g., Certificate included)"
              />

              <ArrayInput
                label="Requirements/Prerequisites"
                value={formData.requirements}
                onChange={(value) => setFormData({ ...formData, requirements: value })}
                placeholder="Add a requirement (e.g., Basic computer knowledge)"
              />

              <ArrayInput
                label="What You Will Learn"
                value={formData.whatYouWillLearn}
                onChange={(value) => setFormData({ ...formData, whatYouWillLearn: value })}
                placeholder="Add a learning outcome"
              />
            </div>

            {/* Course Settings */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Course Settings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="isActive"
                    checked={formData.isActive}
                    onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                  />
                  <Label htmlFor="isActive">Active</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="isFeatured"
                    checked={formData.isFeatured}
                    onCheckedChange={(checked) => setFormData({ ...formData, isFeatured: checked })}
                  />
                  <Label htmlFor="isFeatured">Featured</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="certificateIncluded"
                    checked={formData.certificateIncluded}
                    onCheckedChange={(checked) => setFormData({ ...formData, certificateIncluded: checked })}
                  />
                  <Label htmlFor="certificateIncluded">Certificate Included</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="lifetimeAccess"
                    checked={formData.lifetimeAccess}
                    onCheckedChange={(checked) => setFormData({ ...formData, lifetimeAccess: checked })}
                  />
                  <Label htmlFor="lifetimeAccess">Lifetime Access</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="mobileAccess"
                    checked={formData.mobileAccess}
                    onCheckedChange={(checked) => setFormData({ ...formData, mobileAccess: checked })}
                  />
                  <Label htmlFor="mobileAccess">Mobile Access</Label>
                </div>
              </div>
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
                    {editingId ? 'Update Course' : 'Create Course'}
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