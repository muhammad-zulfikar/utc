"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext";

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

function Training() {
  const [search, setSearch] = useState("")
  const [selectedLevels, setSelectedLevels] = useState([])
  const { t } = useLanguage();

  const levels = ["Beginner", "Intermediate", "Advanced"]

  const filteredTrainings = trainings.filter(training => {
    const matchesSearch = training.name.toLowerCase().includes(search.toLowerCase())
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(training.level)
    return matchesSearch && matchesLevel
  })

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">{t('training.title')}</h1>
      <p className="text-center mb-12 max-w-2xl mx-auto">
      {t('training.subtitle')}
      </p>
      
      <div className="flex gap-4 mb-6 justify-end">
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
  )
}

export default Training