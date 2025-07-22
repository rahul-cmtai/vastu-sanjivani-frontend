"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include"
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.message || "Login failed")

      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      router.push("/admin/dashboard")

    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred"
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Red Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-700 opacity-90 z-0" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866...\' fill=\'%23ffffff\' fill-opacity=\'0.1\'/%3E%3C/svg%3E')] bg-[length:120px_120px]" />

      {/* Decorative Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full opacity-10" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full opacity-10" />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white rounded-full opacity-10" />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10 px-4">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-300 rounded-full opacity-20 blur-xl" />
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-red-400 rounded-full opacity-20 blur-xl" />

        <Card className="w-full bg-white/95 shadow-2xl border-0 backdrop-blur-sm">
          <div className="h-1 bg-gradient-to-r from-red-900 via-red-700 to-red-600" />

          {/* Header Image with Logo */}
          <div className="h-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700 opacity-90" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg...%3E')] bg-[length:30px]" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent" />
            <div className="relative flex justify-center items-center h-full">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-red-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48...Z" />
                </svg>
              </div>
            </div>
          </div>

          <CardHeader className="space-y-1 pt-4">
            <div className="text-center">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">
                Welcome back
              </CardTitle>
              <CardDescription className="text-gray-600">
                Enter your credentials to access your account
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    📧
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="pl-10 bg-white/90"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    🔒
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="pl-10 bg-white/90"
                  />
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <div className="text-sm text-red-500 bg-red-50 p-3 rounded-lg border border-red-100 shadow-sm">
                  {error}
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-red-800 to-red-700 hover:from-red-900 hover:to-red-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8..." />
                    </svg>
                    Logging in...
                  </span>
                ) : "Login"}
              </Button>

              {/* Links */}
              <div className="flex flex-col items-center space-y-2 pt-4">
                <Link href="/admin/signup" className="text-red-800 hover:text-red-900 font-medium">
                  Don&apos;t have an account? Sign up
                </Link>
                <Link href="/admin/forgot-password" className="text-gray-500 hover:text-gray-700">
                  Forgot your password?
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
