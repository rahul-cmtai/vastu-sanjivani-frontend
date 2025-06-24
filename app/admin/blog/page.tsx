"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  tags: string[];
  author: string;
  publishDate: string;
  metaTitle: string;
  metaDescription: string;
  status: "Draft" | "Published";
  createdAt: string;
  updatedAt: string;
}

const emptyBlog = {
  title: "",
  excerpt: "",
  content: "",
  category: "",
  tags: "",
  author: "Admin",
  publishDate: new Date().toISOString().split('T')[0],
  metaTitle: "",
  metaDescription: "",
  status: "Draft" as "Draft" | "Published"
}

export default function BlogManagement() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [editingBlog, setEditingBlog] = useState<string | null>(null)
  const [newBlog, setNewBlog] = useState(emptyBlog)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`)
      if (!response.ok) throw new Error("Failed to fetch blogs")
      const data = await response.json()
      setBlogs(data)
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
      Object.entries(newBlog).forEach(([key, value]) => {
        if (key === 'tags') {
          const tagsArray = value.split(',').map(tag => tag.trim()).filter(tag => tag)
          formData.append(key, JSON.stringify(tagsArray))
        } else {
          formData.append(key, value)
        }
      })
      if (selectedImage) {
        formData.append("image", selectedImage)
      }

      let response;
      if (editingBlog) {
        // Update existing blog
        response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${editingBlog}`, {
          method: "PUT",
          body: formData
        })
      } else {
        // Create new blog
        response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/create`, {
          method: "POST",
          body: formData
        })
      }

      if (!response.ok) throw new Error(editingBlog ? "Failed to update blog" : "Failed to create blog")
      
      await fetchBlogs()
      resetForm()
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"
      setError(errorMessage)
    }
  }

  const handleDelete = async (blogId: string) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${blogId}`, {
        method: "DELETE"
      })
      if (!response.ok) throw new Error("Failed to delete blog")
      await fetchBlogs()
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"
      setError(errorMessage)
    }
  }

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog._id)
    setNewBlog({
      title: blog.title,
      excerpt: blog.excerpt || "",
      content: blog.content,
      category: blog.category,
      tags: blog.tags.join(", "),
      author: blog.author,
      publishDate: new Date(blog.publishDate).toISOString().split('T')[0],
      metaTitle: blog.metaTitle || "",
      metaDescription: blog.metaDescription || "",
      status: blog.status
    })
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const resetForm = () => {
    setShowForm(false)
    setEditingBlog(null)
    setNewBlog(emptyBlog)
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
          <p className="mt-4 text-gray-600">Loading blogs...</p>
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
          <Button onClick={fetchBlogs} className="mt-4">Try Again</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blog Management</h1>
        <div className="flex gap-2">
          {showForm && (
            <Button variant="outline" onClick={resetForm}>
              Cancel
            </Button>
          )}
          <Button onClick={() => !showForm && setShowForm(true)}>
            Add New Blog
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
                <CardTitle>{editingBlog ? "Edit Blog" : "Create New Blog"}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      placeholder="Blog Title"
                      value={newBlog.title}
                      onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      placeholder="Brief excerpt of the blog"
                      value={newBlog.excerpt}
                      onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content *</Label>
                    <Textarea
                      id="content"
                      placeholder="Blog Content"
                      value={newBlog.content}
                      onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                      required
                      className="min-h-[200px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Input
                        id="category"
                        placeholder="Blog Category"
                        value={newBlog.category}
                        onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags (comma separated)</Label>
                      <Input
                        id="tags"
                        placeholder="tag1, tag2, tag3"
                        value={newBlog.tags}
                        onChange={(e) => setNewBlog({ ...newBlog, tags: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="author">Author</Label>
                      <Input
                        id="author"
                        placeholder="Author Name"
                        value={newBlog.author}
                        onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="publishDate">Publish Date</Label>
                      <Input
                        id="publishDate"
                        type="date"
                        value={newBlog.publishDate}
                        onChange={(e) => setNewBlog({ ...newBlog, publishDate: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Featured Image</Label>
                    <Input
                      id="image"
                      type="file"
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="metaTitle">Meta Title</Label>
                      <Input
                        id="metaTitle"
                        placeholder="Meta Title for SEO"
                        value={newBlog.metaTitle}
                        onChange={(e) => setNewBlog({ ...newBlog, metaTitle: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="metaDescription">Meta Description</Label>
                      <Input
                        id="metaDescription"
                        placeholder="Meta Description for SEO"
                        value={newBlog.metaDescription}
                        onChange={(e) => setNewBlog({ ...newBlog, metaDescription: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select 
                      value={newBlog.status}
                      onValueChange={(value: "Draft" | "Published") => setNewBlog({ ...newBlog, status: value })}
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
                      {editingBlog ? "Update Blog" : (newBlog.status === "Published" ? "Publish" : "Save as Draft")}
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
          <CardTitle>Recent Blogs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <AnimatePresence>
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-48 h-48 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      {blog.imageUrl ? (
                        <img 
                          src={blog.imageUrl.startsWith('http') 
                            ? blog.imageUrl 
                            : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${blog.imageUrl}`}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
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
                          <h3 className="text-xl font-semibold">{blog.title}</h3>
                          {blog.excerpt && (
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{blog.excerpt}</p>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleEdit(blog)}
                          >
                            Edit
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm" 
                            onClick={() => handleDelete(blog._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 items-center text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          blog.status === "Published" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {blog.status}
                        </span>
                        <span className="text-muted-foreground">
                          By {blog.author} • {new Date(blog.publishDate).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {blog.category && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {blog.category}
                          </span>
                        )}
                        {blog.tags && blog.tags.length > 0 && blog.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
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