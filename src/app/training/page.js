"use client"

import { useState } from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

const trainings = [
  { name: "Leadership Development", duration: "2 days", level: "Advanced", price: "$1,500" },
  { name: "Project Management", duration: "3 days", level: "Intermediate", price: "$2,000" },
  { name: "Financial Management", duration: "2 days", level: "Beginner", price: "$1,200" },
  { name: "Digital Marketing", duration: "2 days", level: "Intermediate", price: "$1,300" },
  { name: "Data Analysis", duration: "3 days", level: "Advanced", price: "$2,200" },
  { name: "Agile Methodologies", duration: "2 days", level: "Intermediate", price: "$1,400" },
  { name: "Change Management", duration: "3 days", level: "Advanced", price: "$2,500" },
  { name: "Business Analytics", duration: "2 days", level: "Intermediate", price: "$1,600" },
  { name: "Time Management", duration: "1 day", level: "Beginner", price: "$800" },
  { name: "Customer Relationship Management", duration: "3 days", level: "Intermediate", price: "$2,100" },
  { name: "Artificial Intelligence in Business", duration: "4 days", level: "Advanced", price: "$3,000" },
  { name: "Strategic Marketing", duration: "3 days", level: "Advanced", price: "$2,400" },
  { name: "Sales Leadership", duration: "2 days", level: "Intermediate", price: "$1,700" },
  { name: "Personal Branding", duration: "1 day", level: "Beginner", price: "$600" },
  { name: "Public Speaking", duration: "2 days", level: "Intermediate", price: "$1,200" },
  { name: "Conflict Resolution", duration: "2 days", level: "Beginner", price: "$1,000" },
  { name: "Product Management", duration: "3 days", level: "Intermediate", price: "$2,300" },
  { name: "Negotiation Skills", duration: "2 days", level: "Intermediate", price: "$1,500" },
  { name: "E-commerce Strategies", duration: "3 days", level: "Advanced", price: "$2,500" },
  { name: "Data Science", duration: "5 days", level: "Advanced", price: "$3,200" },
  { name: "Creative Thinking", duration: "1 day", level: "Beginner", price: "$700" },
  { name: "Financial Planning", duration: "3 days", level: "Intermediate", price: "$2,000" },
  { name: "Cybersecurity", duration: "4 days", level: "Advanced", price: "$2,800" },
  { name: "Excel for Business", duration: "2 days", level: "Beginner", price: "$900" },
  { name: "Social Media Marketing", duration: "2 days", level: "Intermediate", price: "$1,500" },
  { name: "Brand Management", duration: "3 days", level: "Advanced", price: "$2,400" },
  { name: "Innovation Management", duration: "2 days", level: "Intermediate", price: "$1,800" },
  { name: "Team Building", duration: "1 day", level: "Beginner", price: "$650" },
  { name: "Employee Engagement", duration: "2 days", level: "Intermediate", price: "$1,200" },
  { name: "Digital Transformation", duration: "4 days", level: "Advanced", price: "$3,100" },
  { name: "Leadership in Crisis", duration: "3 days", level: "Advanced", price: "$2,700" },
  { name: "Sustainability in Business", duration: "2 days", level: "Intermediate", price: "$1,600" },
  { name: "Human Resource Management", duration: "3 days", level: "Intermediate", price: "$2,200" },
  { name: "Marketing Analytics", duration: "2 days", level: "Intermediate", price: "$1,700" },
  { name: "Data Visualization", duration: "3 days", level: "Advanced", price: "$2,500" },
  { name: "Lean Six Sigma", duration: "5 days", level: "Advanced", price: "$3,500" },
]

function Training() {
  const [search, setSearch] = useState("")
  const [selectedLevels, setSelectedLevels] = useState([])

  const levels = ["Beginner", "Intermediate", "Advanced"]

  const filteredTrainings = trainings.filter(training => {
    const matchesSearch = training.name.toLowerCase().includes(search.toLowerCase())
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(training.level)
    return matchesSearch && matchesLevel
  })

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Training Programs</h1>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Our public training programs are designed to provide practical experience to participants, making it easy to apply in their workplace.
      </p>
      
      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Search training..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter Level
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
  )
}

export default Training