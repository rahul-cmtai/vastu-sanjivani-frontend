"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
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

interface Education {
  degree: string;
  institution: string;
  year: string;
  achievement?: string;
}
interface Project {
  name: string;
  description: string;
  year: string;
  image: string;
}
interface Testimonial {
  name: string;
  role: string;
  text: string;
}
interface Student {
  _id: string;
  slug: string;
  name: string;
  title?: string;
  image?: string;
  coverImage?: string;
  badges?: string[];
  location?: string;
  email?: string;
  phone?: string;
  experience?: string;
  bio?: string;
  education?: Education[];
  specializations?: string[];
  projects?: Project[];
  testimonials?: Testimonial[];
  createdAt?: string;
}

export default function AdminStudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    setLoading(true);
    setError(null);
    fetch("http://localhost:5000/api/students")
      .then(res => res.json())
      .then(data => {
        setStudents(data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load students");
        setLoading(false);
      });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this student?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`http://localhost:5000/api/students/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setStudents(students.filter(s => s._id !== id));
      } else {
        alert(data.message || "Failed to delete student");
      }
    } catch {
      alert("Failed to delete student");
    }
    setDeletingId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Students</h1>
        <Link href="/admin/students/create" className="bg-[#7a2323] text-white px-6 py-2 rounded hover:bg-[#5a1a1a] font-medium">+ Add Student</Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Student List</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-20">Loading...</div>
          ) : error ? (
            <div className="text-center py-20 text-red-600">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded shadow">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b text-left">Name</th>
                    <th className="py-3 px-4 border-b text-left">Slug</th>
                    <th className="py-3 px-4 border-b text-left">Title</th>
                    <th className="py-3 px-4 border-b text-left">Profile Image</th>
                    <th className="py-3 px-4 border-b text-left">Cover Image</th>
                    <th className="py-3 px-4 border-b text-left">Badges</th>
                    <th className="py-3 px-4 border-b text-left">Location</th>
                    <th className="py-3 px-4 border-b text-left">Email</th>
                    <th className="py-3 px-4 border-b text-left">Phone</th>
                    <th className="py-3 px-4 border-b text-left">Experience</th>
                    <th className="py-3 px-4 border-b text-left">Bio</th>
                    <th className="py-3 px-4 border-b text-left">Education</th>
                    <th className="py-3 px-4 border-b text-left">Specializations</th>
                    <th className="py-3 px-4 border-b text-left">Projects</th>
                    <th className="py-3 px-4 border-b text-left">Testimonials</th>
                    <th className="py-3 px-4 border-b text-left">Created At</th>
                    <th className="py-3 px-4 border-b text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student._id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{student.name}</td>
                      <td className="py-3 px-4">{student.slug}</td>
                      <td className="py-3 px-4">{student.title}</td>
                      <td className="py-3 px-4">{student.image && <img src={student.image} alt={student.name} className="w-8 h-8 rounded-full object-cover" />}</td>
                      <td className="py-3 px-4">{student.coverImage && <img src={student.coverImage} alt={student.name + ' cover'} className="w-12 h-8 object-cover rounded" />}</td>
                      <td className="py-3 px-4">{student.badges?.join(', ')}</td>
                      <td className="py-3 px-4">{student.location}</td>
                      <td className="py-3 px-4">{student.email}</td>
                      <td className="py-3 px-4">{student.phone}</td>
                      <td className="py-3 px-4">{student.experience}</td>
                      <td className="py-3 px-4 max-w-xs truncate" title={student.bio}>{student.bio?.slice(0, 40)}{student.bio && student.bio.length > 40 ? '...' : ''}</td>
                      <td className="py-3 px-4">{student.education ? student.education.length + ' item(s)' : ''}</td>
                      <td className="py-3 px-4">{student.specializations?.join(', ')}</td>
                      <td className="py-3 px-4">{student.projects ? student.projects.length + ' item(s)' : ''}</td>
                      <td className="py-3 px-4">{student.testimonials ? student.testimonials.length + ' item(s)' : ''}</td>
                      <td className="py-3 px-4">{student.createdAt ? new Date(student.createdAt).toLocaleString() : ''}</td>
                      <td className="py-3 px-4 flex gap-2">
                        <Link href={`/students/${student.slug}`} className="text-blue-600 hover:underline">View</Link>
                        <Link href={`/admin/students/edit/${student._id}`} className="text-yellow-600 hover:underline">Edit</Link>
                        <button
                          onClick={() => handleDelete(student._id)}
                          className="text-red-600 hover:underline disabled:opacity-50"
                          disabled={deletingId === student._id}
                        >
                          {deletingId === student._id ? "Deleting..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 