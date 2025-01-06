"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Building2, Users2, Target, Settings, CheckCircle2, ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const features = [
  {
    icon: <Target className="w-6 h-6 text-[#FFC000]" />,
    title: "Customized Content",
    description: "Training materials tailored to your organization's specific needs and objectives"
  },
  {
    icon: <Users2 className="w-6 h-6 text-[#FFC000]" />,
    title: "Team Development",
    description: "Build stronger teams through shared learning experiences and collaborative exercises"
  },
  {
    icon: <Building2 className="w-6 h-6 text-[#FFC000]" />,
    title: "On-site Delivery",
    description: "Training conducted at your preferred location for maximum convenience"
  },
  {
    icon: <Settings className="w-6 h-6 text-[#FFC000]" />,
    title: "Flexible Format",
    description: "Choose between in-person, virtual, or hybrid delivery methods"
  }
]

const faqs = [
  {
    question: "How long does a typical in-house training program last?",
    answer: "Program duration is flexible and can be customized based on your needs, typically ranging from 1-5 days. We work with you to determine the optimal length based on content complexity and your team's availability."
  },
  {
    question: "What is the minimum group size required?",
    answer: "We recommend a minimum of 8 participants to ensure interactive learning and cost-effectiveness, with a maximum of 25 participants per session to maintain quality interaction."
  },
  {
    question: "Can the training be delivered virtually?",
    answer: "Yes, we offer fully virtual and hybrid options using enterprise-grade video conferencing platforms. Our virtual training maintains the same level of interaction and engagement as in-person sessions."
  },
  {
    question: "How do you ensure the training meets our specific needs?",
    answer: "We begin with a thorough needs assessment, reviewing your objectives, challenges, and desired outcomes. Our instructional designers then customize the content, including relevant case studies and exercises specific to your industry."
  }
]

const areas = [
  {
    title: "Leadership & Management",
    topics: [
      "Executive Leadership",
      "Change Management",
      "Team Building",
      "Strategic Planning"
    ]
  },
  {
    title: "Technical Skills",
    topics: [
      "Project Management",
      "Data Analysis",
      "Digital Transformation",
      "Agile Methodologies"
    ]
  },
  {
    title: "Soft Skills",
    topics: [
      "Communication",
      "Negotiation",
      "Problem Solving",
      "Time Management"
    ]
  }
]

function InHouseTraining() {
  const { t } = useLanguage()
  
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
            <h1 className="text-4xl font-bold mb-4">In-House Training Solutions</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Custom-designed training programs delivered exclusively for your organization,
              aligned with your business objectives and culture.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose In-House Training?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-gray-100">
              <CardHeader className="space-y-4">
                <div>{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Training Areas Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Training Areas</h2>
          <Tabs defaultValue={areas[0].title.toLowerCase()} className="max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              {areas.map((area) => (
                <TabsTrigger key={area.title} value={area.title.toLowerCase()}>
                  {area.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {areas.map((area) => (
              <TabsContent key={area.title} value={area.title.toLowerCase()}>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="grid md:grid-cols-2 gap-4">
                      {area.topics.map((topic, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-[#FFC000] mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Have Questions?</h2>
        <p className="text-gray-600 mb-4">
          Our training consultants are here to help you design the perfect program for your organization.
        </p>
        <div className="flex justify-center gap-8">
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-gray-600">training@company.com</p>
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Team?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our training experts to discuss your organization's needs
            and discover how our customized in-house training programs can help achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FFC000] hover:bg-[#E5AC00] text-black">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="text-black border-white hover:bg-white">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InHouseTraining;