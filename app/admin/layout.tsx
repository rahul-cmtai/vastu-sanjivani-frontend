"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Sidebar from "@/components/admin/Sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    try {
      const auth = localStorage.getItem("adminAuth")
      if (!auth && pathname !== "/admin/login") {
        router.push("/admin/login")
      } else if (auth) {
        try {
          JSON.parse(auth)
          setIsAuthenticated(true)
        } catch {
          localStorage.removeItem("adminAuth")
          router.push("/admin/login")
        }
      }
    } catch {
      localStorage.removeItem("adminAuth")
      router.push("/admin/login")
    }
  }, [pathname, router])

  if (pathname === "/admin/login" || pathname === "/admin/signup") {
    return children
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
} 