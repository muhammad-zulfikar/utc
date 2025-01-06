"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Filter, Calendar, Users, Award, Clock } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const trainings = [
  { name: "Leadership Development", duration: "2 days", level: "Advanced", price: "$1,500" },
  { name: "Project Management", duration: "3 days", level: "Intermediate", price: "$2,000" },
  { name: "Financial Management", duration: "2 days", level: "Beginner", price: "$1,200" },
  { name: "Digital Marketing", duration: "2 days", level: "Intermediate", price: "$1,300" },
  { name: "Data Analysis", duration: "3 days", level: "Advanced", price: "$2,200" },
  { name: "Agile Methodologies", duration: "2 days", level: "Intermediate", price: "$1,400" },
  { name: "Change Management", duration: "3 days", level: "Advanced", price: "$2,500" },
  { name: "Business Analytics", duration: "2 days", level: "Intermediate", price: "$1,600" }
]

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
  const [selectedLevels, setSelectedLevels] = useState([])
  const { t } = useLanguage()

  const levels = ["Beginner", "Intermediate", "Advanced"]

  const filteredTrainings = trainings.filter(training => {
    const matchesSearch = training.name.toLowerCase().includes(search.toLowerCase())
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(training.level)
    return matchesSearch && matchesLevel
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/api/placeholder/1200/400')`
          }}
        />
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-2 border-[#FFC000]">
                <Filter className="mr-2 h-4 w-4" />
                Level
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {levels.map((level) => (
                <DropdownMenuCheckboxItem
                  key={level}
                  checked={selectedLevels.includes(level)}
                  onCheckedChange={(checked) => {
                    setSelectedLevels(
                      checked 
                        ? [...selectedLevels, level]
                        : selectedLevels.filter((l) => l !== level)
                    )
                  }}
                >
                  {level}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Level</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTrainings.map((training) => (
              <TableRow key={training.name}>
                <TableCell className="font-medium">{training.name}</TableCell>
                <TableCell>{training.duration}</TableCell>
                <TableCell>{training.level}</TableCell>
                <TableCell className="text-right">{training.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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