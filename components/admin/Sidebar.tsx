"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { Home, Users, FileText, Package, UserPlus, LogOut, Menu, Star } from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: Home },
  { href: "/admin/blog", label: "Blog", icon: FileText },
  { href: "/admin/student-success-stories", label: "Student Success Stories", icon: Star },
  // { href: "/admin/leads", label: "Leads", icon: Users },
  { href: "/admin/contact", label: "Contact", icon: Users },
  // { href: "/admin/services", label: "Services", icon: Package },
  { href: "/admin/testimonials", label: "Testimonials", icon: Star },
  { href: "/admin/students", label: "Students", icon: UserPlus },
]

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    // Clear all auth related data from localStorage
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    
    // Close sidebar on mobile if open
    setOpen(false)
    
    // Redirect to home page
    router.push("/")
  }

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="fixed top-4 left-4 z-40 md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-white border-r flex flex-col shadow-lg transform transition-transform duration-300
          md:static md:translate-x-0 md:shadow-sm
          ${open ? "translate-x-0" : "-translate-x-full"} md:block`}
        style={{ minHeight: '100vh' }}
      >
        {/* Close button for mobile */}
        <div className="flex items-center gap-2 px-6 py-6 border-b relative">
          <span className="text-2xl font-extrabold tracking-tight">Vaastu Sanjivanii</span>
          <span className="ml-auto w-8 h-2 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400" />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden text-gray-500 hover:text-gray-800"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-100 ${
                pathname === href ? "bg-red-50 border-l-4 border-red-500 text-red-600" : "text-gray-700"
              }`}
              onClick={() => setOpen(false)}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="px-4 pb-6 mt-auto">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 w-full rounded-lg text-red-500 hover:bg-red-50 font-medium transition-colors duration-200"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>
    </>
  )
} 