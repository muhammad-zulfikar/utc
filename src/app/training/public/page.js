"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Filter, Calendar, Users, Award, Clock } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
// Import CSV data directly
import courseData from '@/data/course.csv'

const benefits = [
  {
    icon: <Users className="w-6 h-6 text-[#FFC000]" />,
    title: "Networking Opportunities",
    description: "Connect with professionals across different industries and expand your professional network."
  },
  {
    icon: <Calendar className="w-6 h-6 text-[#FFC000]" />,
    title: "Flexible Scheduling",
    description: "Choose from multiple dates throughout the year that best fit your schedule."
  },
  {
    icon: <Award className="w-6 h-6 text-[#FFC000]" />,
    title: "Certification",
    description: "Receive industry-recognized certification upon successful completion of the program."
  },
  {
    icon: <Clock className="w-6 h-6 text-[#FFC000]" />,
    title: "Time-Efficient",
    description: "Concentrated learning experience designed to maximize your time investment."
  }
]

function PublicTraining() {
  const [search, setSearch] = useState("")
  const { t } = useLanguage()

  // Filter courses based on search
  const filteredCourses = courseData.filter(course => {
    if (!course || !course["Judul Pelatihan"]) return false
    return course["Judul Pelatihan"].toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-primary">
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">Public Training Programs</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Join our comprehensive training programs designed to enhance your professional skills
              and advance your career through hands-on learning experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Public Training?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 border-gray-100">
              <CardHeader className="space-y-4">
                <div>{benefit.icon}</div>
                <CardTitle>{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Available Programs Section */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Available Programs</h2>
        <div className="flex gap-4 mb-6 justify-end">
          <Input
            placeholder="Search training..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm border-2 border-[#FFC000]"
          />
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">Training Title</TableHead>
                <TableHead className="whitespace-nowrap">Duration</TableHead>
                <TableHead className="whitespace-nowrap">Date</TableHead>
                <TableHead className="whitespace-nowrap">Online Price</TableHead>
                <TableHead className="whitespace-nowrap">Offline Price</TableHead>
                <TableHead className="whitespace-nowrap">Location</TableHead>
                <TableHead className="whitespace-nowrap">Contact Person</TableHead>
                <TableHead className="whitespace-nowrap">Phone Number</TableHead>
                <TableHead className="whitespace-nowrap">E-mail Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCourses.map((course, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium whitespace-nowrap">{course["Judul Pelatihan"]}</TableCell>
                  <TableCell className="whitespace-nowrap">
                    {`${course["Jumlah Hari Pelatihan"]} (${course["Jumlah Jam Pelatihan Per Hari"]})`}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {`${course["tanggal awal"]} - ${course["tanggal akhir"]}`}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">{course["Biaya Pelatihan Online"]}</TableCell>
                  <TableCell className="whitespace-nowrap">{course["Biaya Pelatihan Offline"]}</TableCell>
                  <TableCell className="whitespace-nowrap">{course["Lokasi Pelatihan"]}</TableCell>
                  <TableCell className="whitespace-nowrap">{course["Contact Person"]}</TableCell>
                  <TableCell className="whitespace-nowrap">0{course["No Telepon/HP"]}</TableCell>
                  <TableCell className="whitespace-nowrap">{course["Alamat Email"]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Take the next step in your professional development journey with our expert-led training programs.
          </p>
          <Button className="bg-[#FFC000] hover:bg-[#E5AC00] text-black">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PublicTraining;