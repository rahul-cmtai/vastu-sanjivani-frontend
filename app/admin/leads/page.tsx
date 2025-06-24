"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function LeadsManagement() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "+91 9876543210",
      message: "Interested in Vastu consultation for my new home",
      status: "New",
      date: "2024-03-15"
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@example.com",
      phone: "+91 8765432109",
      message: "Would like to know more about your courses",
      status: "Contacted",
      date: "2024-03-14"
    }
  ])

  const toggleContactStatus = (contactId: number) => {
    setContacts(contacts.map(contact => 
      contact.id === contactId 
        ? { ...contact, status: contact.status === "New" ? "Contacted" : "New" }
        : contact
    ))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Contact Form Submissions</h1>
        <div className="flex gap-4">
          <Input placeholder="Search contacts..." className="w-[300px]" />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-sm">{contact.email}</p>
                      <p className="text-sm text-muted-foreground">{contact.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-[300px] truncate">{contact.message}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      contact.status === "New" ? "bg-blue-100 text-blue-800" :
                      contact.status === "Contacted" ? "bg-green-100 text-green-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {contact.status}
                    </span>
                  </TableCell>
                  <TableCell>{contact.date}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => toggleContactStatus(contact.id)}
                        className={contact.status === "Contacted" ? "bg-green-100 text-green-800 hover:bg-green-200" : ""}
                      >
                        {contact.status === "New" ? "Mark as Contacted" : "Mark as New"}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
} 