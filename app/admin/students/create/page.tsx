"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

interface StudentForm {
  slug: string;
  name: string;
  title: string;
  image: string;
  coverImage: string;
  badges: string[];
  location: string;
  email: string;
  phone: string;
  experience: string;
  bio: string;
  education: Education[];
  specializations: string[];
  projects: Project[];
  testimonials: Testimonial[];
  imageFile?: File;
  coverImageFile?: File;
}

export default function CreateStudentPage() {
  const router = useRouter();
  const [form, setForm] = useState<StudentForm>({
    slug: "",
    name: "",
    title: "",
    image: "",
    coverImage: "",
    badges: [""],
    location: "",
    email: "",
    phone: "",
    experience: "",
    bio: "",
    education: [{ degree: "", institution: "", year: "", achievement: "" }],
    specializations: [""],
    projects: [{ name: "", description: "", year: "", image: "" }],
    testimonials: [{ name: "", role: "", text: "" }],
    imageFile: undefined,
    coverImageFile: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Dynamic array handlers
  const handleArrayChange = (field: string, idx: number, value: string) => {
    const arr = form[field as keyof StudentForm];
    if (Array.isArray(arr)) {
      setForm({
        ...form,
        [field]: arr.map((item, i) => i === idx ? value : item)
      });
    }
  };
  const handleArrayObjectChange = (field: string, idx: number, key: string, value: string) => {
    const arr = form[field as keyof StudentForm];
    if (Array.isArray(arr)) {
      setForm({
        ...form,
        [field]: arr.map((item, i) =>
          i === idx && typeof item === 'object' && item !== null
            ? { ...item, [key]: value }
            : item
        )
      });
    }
  };
  const addArrayItem = (field: string, empty: any) => {
    setForm({ ...form, [field]: [...(form[field as keyof typeof form] as any[]), empty] });
  };
  const removeArrayItem = (field: string, idx: number) => {
    setForm({ ...form, [field]: (form[field as keyof typeof form] as any[]).filter((_: any, i: number) => i !== idx) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    formData.append("slug", form.slug);
    formData.append("name", form.name);
    formData.append("title", form.title);
    formData.append("bio", form.bio);
    formData.append("specializations", form.specializations.join(","));
    formData.append("contact", form.email);
    formData.append("location", form.location);
    formData.append("phone", form.phone);
    formData.append("experience", form.experience);
    // Add other fields as needed
    if (form.imageFile) formData.append("image", form.imageFile);
    if (form.coverImageFile) formData.append("coverImage", form.coverImageFile);
    // You can add badges, education, projects, testimonials as JSON strings if backend supports
    formData.append("badges", JSON.stringify(form.badges));
    formData.append("education", JSON.stringify(form.education));
    formData.append("projects", JSON.stringify(form.projects));
    formData.append("testimonials", JSON.stringify(form.testimonials));

    try {
      const res = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        router.push("/admin/students");
      } else {
        setError(data.message || "Failed to create student");
      }
    } catch {
      setError("Failed to create student");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-[#7a2323]">Add New Student</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="slug" placeholder="Slug (e.g. priya-sharma)" value={form.slug} onChange={handleChange} required />
          <Input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          <Input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
          <div>
            <label className="font-medium">Profile Image</label>
            <input type="file" accept="image/*" onChange={e => setForm(f => ({ ...f, imageFile: e.target.files?.[0] }))} />
            {form.imageFile && (
              <img src={URL.createObjectURL(form.imageFile)} alt="Profile Preview" className="w-24 h-24 mt-2 rounded" />
            )}
          </div>
          <div>
            <label className="font-medium">Cover Image</label>
            <input type="file" accept="image/*" onChange={e => setForm(f => ({ ...f, coverImageFile: e.target.files?.[0] }))} />
            {form.coverImageFile && (
              <img src={URL.createObjectURL(form.coverImageFile)} alt="Cover Preview" className="w-48 h-24 mt-2 rounded" />
            )}
          </div>
          <Input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
          <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <Input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
          <Input name="experience" placeholder="Experience" value={form.experience} onChange={handleChange} />
        </div>
        <textarea name="bio" placeholder="Short Bio" value={form.bio} onChange={handleChange} className="w-full border rounded p-2" />

        {/* Badges */}
        <div>
          <label className="font-medium">Badges</label>
          {Array.isArray(form.badges) && form.badges.map((badge, idx) => (
            <div key={idx} className="flex gap-2 mb-2">
              <Input value={badge} onChange={e => handleArrayChange("badges", idx, e.target.value)} placeholder="Badge" />
              <Button type="button" variant="outline" onClick={() => removeArrayItem("badges", idx)} disabled={form.badges.length === 1}>Remove</Button>
            </div>
          ))}
          <Button type="button" variant="secondary" onClick={() => addArrayItem("badges", "")}>Add Badge</Button>
        </div>

        {/* Specializations */}
        <div>
          <label className="font-medium">Specializations</label>
          {Array.isArray(form.specializations) && form.specializations.map((spec, idx) => (
            <div key={idx} className="flex gap-2 mb-2">
              <Input value={spec} onChange={e => handleArrayChange("specializations", idx, e.target.value)} placeholder="Specialization" />
              <Button type="button" variant="outline" onClick={() => removeArrayItem("specializations", idx)} disabled={form.specializations.length === 1}>Remove</Button>
            </div>
          ))}
          <Button type="button" variant="secondary" onClick={() => addArrayItem("specializations", "")}>Add Specialization</Button>
        </div>

        {/* Education */}
        <div>
          <label className="font-medium">Education</label>
          {Array.isArray(form.education) && form.education.map((edu, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-2">
              <Input value={edu.degree} onChange={e => handleArrayObjectChange("education", idx, "degree", e.target.value)} placeholder="Degree" />
              <Input value={edu.institution} onChange={e => handleArrayObjectChange("education", idx, "institution", e.target.value)} placeholder="Institution" />
              <Input value={edu.year} onChange={e => handleArrayObjectChange("education", idx, "year", e.target.value)} placeholder="Year" />
              <Input value={edu.achievement} onChange={e => handleArrayObjectChange("education", idx, "achievement", e.target.value)} placeholder="Achievement (optional)" />
              <Button type="button" variant="outline" onClick={() => removeArrayItem("education", idx)} disabled={form.education.length === 1}>Remove</Button>
            </div>
          ))}
          <Button type="button" variant="secondary" onClick={() => addArrayItem("education", { degree: "", institution: "", year: "", achievement: "" })}>Add Education</Button>
        </div>

        {/* Projects */}
        <div>
          <label className="font-medium">Projects</label>
          {Array.isArray(form.projects) && form.projects.map((proj, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-2">
              <Input value={proj.name} onChange={e => handleArrayObjectChange("projects", idx, "name", e.target.value)} placeholder="Project Name" />
              <Input value={proj.description} onChange={e => handleArrayObjectChange("projects", idx, "description", e.target.value)} placeholder="Description" />
              <Input value={proj.year} onChange={e => handleArrayObjectChange("projects", idx, "year", e.target.value)} placeholder="Year" />
              <Input value={proj.image} onChange={e => handleArrayObjectChange("projects", idx, "image", e.target.value)} placeholder="Image URL" />
              <Button type="button" variant="outline" onClick={() => removeArrayItem("projects", idx)} disabled={form.projects.length === 1}>Remove</Button>
            </div>
          ))}
          <Button type="button" variant="secondary" onClick={() => addArrayItem("projects", { name: "", description: "", year: "", image: "" })}>Add Project</Button>
        </div>

        {/* Testimonials */}
        <div>
          <label className="font-medium">Testimonials</label>
          {Array.isArray(form.testimonials) && form.testimonials.map((test, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
              <Input value={test.name} onChange={e => handleArrayObjectChange("testimonials", idx, "name", e.target.value)} placeholder="Name" />
              <Input value={test.role} onChange={e => handleArrayObjectChange("testimonials", idx, "role", e.target.value)} placeholder="Role" />
              <Input value={test.text} onChange={e => handleArrayObjectChange("testimonials", idx, "text", e.target.value)} placeholder="Text" />
              <Button type="button" variant="outline" onClick={() => removeArrayItem("testimonials", idx)} disabled={form.testimonials.length === 1}>Remove</Button>
            </div>
          ))}
          <Button type="button" variant="secondary" onClick={() => addArrayItem("testimonials", { name: "", role: "", text: "" })}>Add Testimonial</Button>
        </div>

        {error && <div className="text-red-600">{error}</div>}
        {success && <div className="text-green-600">Student created successfully!</div>}
        <Button type="submit" className="bg-[#7a2323] text-white w-full" disabled={loading}>{loading ? "Saving..." : "Add Student"}</Button>
      </form>
    </div>
  );
} 