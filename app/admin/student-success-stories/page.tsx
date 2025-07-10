"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Adjust the interface as per your API response
interface StudentSuccessStory {
  _id: string;
  name: string;
  designation: string;
  content: string;
  rating: number;
  mediaUrl: string;
  mediaType: 'image' | 'video' | 'none';
  profileImage: string;
  location: string;
  isActive: boolean;
  order: number;
  status: "Draft" | "Published";
  createdAt: string;
  updatedAt: string;
}

const emptyStory = {
  name: "",
  designation: "",
  content: "",
  rating: 5,
  mediaUrl: "",
  mediaType: "none" as 'image' | 'video' | 'none',
  location: "",
  isActive: true,
  order: 0,
  status: "Draft" as "Draft" | "Published"
}

export default function StudentSuccessStoriesManagement() {
  const [stories, setStories] = useState<StudentSuccessStory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [editingStory, setEditingStory] = useState<string | null>(null)
  const [newStory, setNewStory] = useState(emptyStory)

  useEffect(() => {
    fetchStories()
  }, [])

  const fetchStories = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student-success-stories`)
      if (!response.ok) throw new Error("Failed to fetch stories")
      const data = await response.json()
      setStories(data)
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append("name", newStory.name)
      formData.append("designation", newStory.designation)
      formData.append("content", newStory.content)
      formData.append("rating", String(newStory.rating))
      formData.append("mediaType", newStory.mediaType)
      formData.append("location", newStory.location)
      formData.append("isActive", String(newStory.isActive))
      formData.append("order", String(newStory.order))
      formData.append("status", newStory.status)
      if (selectedImage) {
        formData.append("media", selectedImage)
      }
      let response;
      if (editingStory) {
        response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student-success-stories/${editingStory}`, {
          method: "PUT",
          body: formData
        })
      } else {
        response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student-success-stories/create`, {
          method: "POST",
          body: formData
        })
      }
      if (!response.ok) throw new Error(editingStory ? "Failed to update story" : "Failed to create story")
      await fetchStories()
      resetForm()
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"
      setError(errorMessage)
    }
  }

  const handleDelete = async (storyId: string) => {
    if (!window.confirm("Are you sure you want to delete this story?")) return
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student-success-stories/${storyId}`, {
        method: "DELETE"
      })
      if (!response.ok) throw new Error("Failed to delete story")
      await fetchStories()
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"
      setError(errorMessage)
    }
  }

  const handleEdit = (story: StudentSuccessStory) => {
    setEditingStory(story._id)
    setNewStory({
      name: story.name,
      designation: story.designation,
      content: story.content,
      rating: story.rating,
      mediaUrl: story.mediaUrl,
      mediaType: story.mediaType,
      location: story.location,
      isActive: story.isActive,
      order: story.order,
      status: story.status
    })
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const resetForm = () => {
    setShowForm(false)
    setEditingStory(null)
    setNewStory(emptyStory)
    setSelectedImage(null)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0])
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading stories...</p>
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
          <Button onClick={fetchStories} className="mt-4">Try Again</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Student Success Stories Management</h1>
        <div className="flex gap-2">
          {showForm && (
            <Button variant="outline" onClick={resetForm}>
              Cancel
            </Button>
          )}
          <Button onClick={() => !showForm && setShowForm(true)}>
            Add New Story
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
                <CardTitle>{editingStory ? "Edit Story" : "Create New Story"}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Student Name"
                      value={newStory.name}
                      onChange={(e) => setNewStory({ ...newStory, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="designation">Designation *</Label>
                    <Input
                      id="designation"
                      placeholder="e.g. Student, Astrologer, etc."
                      value={newStory.designation}
                      onChange={(e) => setNewStory({ ...newStory, designation: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">Content *</Label>
                    <Textarea
                      id="content"
                      placeholder="Story Content"
                      value={newStory.content}
                      onChange={(e) => setNewStory({ ...newStory, content: e.target.value })}
                      required
                      className="min-h-[200px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="rating">Rating</Label>
                      <Select
                        value={String(newStory.rating)}
                        onValueChange={val => setNewStory({ ...newStory, rating: Number(val) })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select rating" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5].map(r => (
                            <SelectItem key={r} value={String(r)}>{r}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="order">Order</Label>
                      <Input
                        id="order"
                        type="number"
                        placeholder="Display Order"
                        value={newStory.order}
                        onChange={e => setNewStory({ ...newStory, order: Number(e.target.value) })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        placeholder="Location"
                        value={newStory.location}
                        onChange={e => setNewStory({ ...newStory, location: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mediaType">Media Type</Label>
                      <Select
                        value={newStory.mediaType}
                        onValueChange={val => setNewStory({ ...newStory, mediaType: val as 'image' | 'video' | 'none' })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select media type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="image">Image</SelectItem>
                          <SelectItem value="video">Video</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="image">Featured Media</Label>
                      <Input
                        id="image"
                        type="file"
                        onChange={handleImageChange}
                        accept="image/*,video/*"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 flex items-center gap-4">
                    <Label htmlFor="isActive">Active</Label>
                    <input
                      id="isActive"
                      type="checkbox"
                      checked={newStory.isActive}
                      onChange={e => setNewStory({ ...newStory, isActive: e.target.checked })}
                      className="w-5 h-5"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select 
                      value={newStory.status}
                      onValueChange={(value: "Draft" | "Published") => setNewStory({ ...newStory, status: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Draft">Draft</SelectItem>
                        <SelectItem value="Published">Published</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit">
                      {editingStory ? "Update Story" : (newStory.status === "Published" ? "Publish" : "Save as Draft")}
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
          <CardTitle>Recent Student Success Stories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <AnimatePresence>
              {stories.map((story, index) => (
                <motion.div
                  key={story._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-48 h-48 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <div className="mb-1 font-semibold text-xs text-gray-500">Media</div>
                      {story.mediaType === 'image' && story.mediaUrl ? (
                        <img
                          src={story.mediaUrl.startsWith('http')
                            ? story.mediaUrl
                            : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${story.mediaUrl}`}
                          alt={story.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      ) : story.mediaType === 'video' && story.mediaUrl ? (
                        <video
                          controls
                          className="w-full h-full object-cover"
                        >
                          <source src={story.mediaUrl.startsWith('http')
                            ? story.mediaUrl
                            : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${story.mediaUrl}`}
                          />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold">{story.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{story.content.slice(0, 100)}...</p>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleEdit(story)}
                          >
                            Edit
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm" 
                            onClick={() => handleDelete(story._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          story.status === "Published" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {story.status}
                        </span>
                        <span className="text-muted-foreground">
                          {story.name} • {story.designation}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 