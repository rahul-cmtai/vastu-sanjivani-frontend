"use client"

import { useState, useEffect } from "react"
import { Users, FileText, Star, PlusCircle } from "lucide-react"

export default function AdminDashboard() {
  const [stats, setStats] = useState([
    { label: "Total Contacts", value: 0, icon: Users, color: "text-red-500" },
    { label: "New Contacts", value: 0, icon: FileText, color: "text-yellow-500" },
    { label: "Contacted", value: 0, icon: Star, color: "text-green-600" },
    // { label: "Services", value: 0, icon: PlusCircle, color: "text-orange-500" },
  ])

  useEffect(() => {
    // Get contacts from localStorage or your backend
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
    
    // Calculate stats
    const totalContacts = contacts.length
    const newContacts = contacts.filter((contact: { status: string }) => contact.status === "New").length
    const contacted = contacts.filter((contact: { status: string }) => contact.status === "Contacted").length
    
    setStats([
      { label: "Total Contacts", value: totalContacts, icon: Users, color: "text-red-500" },
      { label: "New Contacts", value: newContacts, icon: FileText, color: "text-yellow-500" },
      { label: "Contacted", value: contacted, icon: Star, color: "text-green-600" },
      // { label: "Services", value: 0, icon: PlusCircle, color: "text-orange-500" },
    ])
  }, [])

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow p-8 flex items-center gap-6">
        <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-4 border-red-500 shadow-lg flex items-center justify-center bg-white p-1">
          <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-red-500 mb-2">Welcome to Vaastu Sanjivanii Admin!</h1>
          <p className="text-gray-700 text-lg max-w-2xl">
            Manage your Vaastu business with ease. Track contacts, services, and more—all in one fun, modern dashboard.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl shadow flex flex-col items-center justify-center p-6 gap-2 hover:shadow-lg transition-shadow">
            <Icon className={`w-8 h-8 ${color}`} />
            <span className="text-2xl font-bold">{value}</span>
            <span className="capitalize text-gray-500 text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
} 
