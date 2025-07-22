"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include"
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Login failed")
      }

      if (data.success && data.token && data.user) {
        if (typeof window !== "undefined") {
          localStorage.setItem("token", data.token)
          localStorage.setItem("user", JSON.stringify(data.user))
          
          window.location.href = "/admin/dashboard"; // Your dashboard URL
        }
      } else {
        throw new Error(data.message || "Login response is invalid.")
      }

    } catch (err) {
      const msg = err instanceof Error ? err.message : "An unknown login error occurred"
      setError(msg)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-700 opacity-90 z-0"></div>
      
      <div className="w-full max-w-md relative z-10 px-4">
        <Card className="w-full max-w-md bg-white/95 shadow-2xl border-0 overflow-hidden backdrop-blur-sm">
          <div className="h-1 bg-gradient-to-r from-red-900 via-red-700 to-red-600"></div>
          
          <div className="h-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700 opacity-90"></div>
            <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,...")`}}></div>
            <div className="relative flex justify-center items-center h-full">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-red-800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
          
          <CardHeader className="space-y-1 pt-4">
            <div className="text-center mb-2"><CardTitle className="text-2xl font-bold bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">Welcome back</CardTitle></div>
            <div><CardDescription className="text-gray-600 text-center">Enter your credentials to access your account</CardDescription></div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                <div className="relative">
                  <Input id="email" name="email" type="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} className="pl-10 rounded-lg border-gray-300 focus:border-red-700 focus:ring-red-700 transition-all duration-300 bg-white/90" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                <div className="relative">
                  <Input id="password" name="password" type="password" placeholder="Enter your password" required value={formData.password} onChange={handleChange} className="pl-10 rounded-lg border-gray-300 focus:border-red-700 focus:ring-red-700 transition-all duration-300 bg-white/90" />
                </div>
              </div>

              {error && (<div className="text-sm text-red-500 bg-red-50 p-3 rounded-lg border border-red-100 shadow-sm">{error}</div>)}

              <div className="pt-2">
                <Button type="submit" className="w-full bg-gradient-to-r from-red-800 to-red-700 hover:from-red-900 hover:to-red-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.01]" disabled={isLoading}>
                  {isLoading ? <span>Logging in...</span> : "Login"}
                </Button>
              </div>

              <div className="flex flex-col space-y-2 pt-2">
                <div className="text-center"><Link href="/admin/signup" className="text-red-800 hover:text-red-900 font-medium transition-colors duration-300">Don't have an account? Sign up</Link></div>
                <div className="text-center"><Link href="/admin/forgot-password" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">Forgot your password?</Link></div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
