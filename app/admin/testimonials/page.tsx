"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

interface Testimonial {
  _id: string;
  name: string;
  designation: string;
  content: string;
  rating: number;
  mediaUrl: string;
  mediaType: "image" | "video" | "none";
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

const emptyTestimonial = {
  name: "",
  designation: "",
  content: "",
  rating: 5,
  mediaUrl: "",
  mediaType: "none" as "image" | "video" | "none",
  isActive: true,
  order: 0,
}

export default function TestimonialManagement() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState<File | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [newTestimonial, setNewTestimonial] = useState(emptyTestimonial)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`)
      if (!response.ok) throw new Error("Failed to fetch testimonials")
      const data = await response.json()
      setTestimonials(data)
    } catch (err: unknown) {
      const error = err as Error
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      Object.entries(newTestimonial).forEach(([key, value]) => {
        formData.append(key, String(value))
      })
      
      if (selectedMedia) {
        formData.append("media", selectedMedia)
      }

      let response;
      if (editingId) {
        // Update existing testimonial
        response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials/update/${editingId}`, {
          method: "PUT",
          body: formData
        })
      } else {
        // Create new testimonial
        response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials/create`, {
          method: "POST",
          body: formData
        })
      }

      if (!response.ok) throw new Error(editingId ? "Failed to update testimonial" : "Failed to create testimonial")
      
      await fetchTestimonials()
      resetForm()
    } catch (err: unknown) {
      const error = err as Error
      setError(error.message)
    }
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) return
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials/delete/${id}`, {
        method: "DELETE"
      })
      if (!response.ok) throw new Error("Failed to delete testimonial")
      await fetchTestimonials()
    } catch (err: unknown) {
      const error = err as Error
      setError(error.message)
    }
  }

  const handleEdit = (testimonial: Testimonial) => {
    setEditingId(testimonial._id)
    setNewTestimonial({
      name: testimonial.name,
      designation: testimonial.designation,
      content: testimonial.content,
      rating: testimonial.rating,
      mediaUrl: testimonial.mediaUrl,
      mediaType: testimonial.mediaType,
      isActive: testimonial.isActive,
      order: testimonial.order
    })
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const resetForm = () => {
    setShowForm(false)
    setEditingId(null)
    setNewTestimonial(emptyTestimonial)
    setSelectedMedia(null)
  }

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedMedia(file)
      
      // Automatically set media type based on file type
      if (file.type.startsWith('image/')) {
        setNewTestimonial({ ...newTestimonial, mediaType: 'image' })
      } else if (file.type.startsWith('video/')) {
        setNewTestimonial({ ...newTestimonial, mediaType: 'video' })
      }
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading testimonials...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="text-center text-red-500">
          <p className="text-lg font-bold">Error</p>
          <p>{error}</p>
          <Button onClick={fetchTestimonials} className="mt-4">Try Again</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Testimonial Management</h1>
        <div className="flex gap-2">
          {showForm && (
            <Button variant="outline" onClick={resetForm}>
              Cancel
            </Button>
          )}
          <Button onClick={() => !showForm && setShowForm(true)}>
            Add New Testimonial
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{editingId ? "Edit Testimonial" : "Create New Testimonial"}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Client Name"
                        value={newTestimonial.name}
                        onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="designation">Designation *</Label>
                      <Input
                        id="designation"
                        placeholder="Client Designation"
                        value={newTestimonial.designation}
                        onChange={(e) => setNewTestimonial({ ...newTestimonial, designation: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Testimonial Content *</Label>
                    <Textarea
                      id="content"
                      placeholder="Client Testimonial"
                      value={newTestimonial.content}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, content: e.target.value })}
                      required
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="rating">Rating (1-5)</Label>
                      <Select 
                        value={String(newTestimonial.rating)}
                        onValueChange={(value) => setNewTestimonial({ ...newTestimonial, rating: parseInt(value) })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Star</SelectItem>
                          <SelectItem value="2">2 Stars</SelectItem>
                          <SelectItem value="3">3 Stars</SelectItem>
                          <SelectItem value="4">4 Stars</SelectItem>
                          <SelectItem value="5">5 Stars</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mediaType">Media Type</Label>
                      <Select 
                        value={newTestimonial.mediaType}
                        onValueChange={(value: "image" | "video" | "none") => setNewTestimonial({ ...newTestimonial, mediaType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select media type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="image">Image</SelectItem>
                          <SelectItem value="video">Video</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {newTestimonial.mediaType !== 'none' && (
                    <div className="space-y-2">
                      <Label htmlFor="media">
                        Upload {newTestimonial.mediaType === 'image' ? 'Image' : 'Video'}
                      </Label>
                      <Input
                        id="media"
                        type="file"
                        accept={newTestimonial.mediaType === 'image' ? 'image/*' : 'video/*'}
                        onChange={handleMediaChange}
                      />
                      {newTestimonial.mediaUrl && !selectedMedia && (
                        <div className="text-sm text-muted-foreground">
                          Current media: {newTestimonial.mediaUrl}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="order">Display Order</Label>
                      <Input
                        id="order"
                        type="number"
                        placeholder="0"
                        value={newTestimonial.order}
                        onChange={(e) => setNewTestimonial({ ...newTestimonial, order: parseInt(e.target.value) })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="isActive" className="block mb-2">Active Status</Label>
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="isActive" 
                          checked={newTestimonial.isActive}
                          onCheckedChange={(checked) => setNewTestimonial({ ...newTestimonial, isActive: checked })}
                        />
                        <Label htmlFor="isActive" className="cursor-pointer">
                          {newTestimonial.isActive ? 'Active' : 'Inactive'}
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit">
                      {editingId ? "Update Testimonial" : "Create Testimonial"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Card>
        <CardHeader>
          <CardTitle>Testimonials</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {testimonials.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No testimonials found. Add your first testimonial to get started.
              </div>
            ) : (
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${!testimonial.isActive ? 'bg-gray-50' : ''}`}
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      {testimonial.mediaType !== 'none' && testimonial.mediaUrl && (
                        <div className="w-full md:w-32 h-32 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          {testimonial.mediaType === 'image' ? (
                            <img 
                              src={testimonial.mediaUrl.startsWith('http') 
                                ? testimonial.mediaUrl 
                                : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${testimonial.mediaUrl}`}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          ) : (
                            <video 
                              src={testimonial.mediaUrl.startsWith('http') 
                                ? testimonial.mediaUrl 
                                : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${testimonial.mediaUrl}`}
                              className="w-full h-full object-cover"
                              controls
                            />
                          )}
                        </div>
                      )}
                      <div className="flex-grow space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                              {testimonial.name}
                              {!testimonial.isActive && (
                                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                                  Inactive
                                </span>
                              )}
                            </h3>
                            <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => handleEdit(testimonial)}
                            >
                              Edit
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm" 
                              onClick={() => handleDelete(testimonial._id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>

                        <div className="text-sm">
                          <p className="text-gray-700 italic">"{testimonial.content}"</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill={i < testimonial.rating ? "currentColor" : "none"}
                                stroke="currentColor"
                                className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={i < testimonial.rating ? 0 : 1.5}
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            Order: {testimonial.order}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 