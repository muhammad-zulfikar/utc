"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Phone, Mail, Building2 } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const [contactReason, setContactReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Get in touch with our team of experts
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-24">
          <Card>
            <CardHeader>
              <CardTitle>
                {contactReason === "consultation" ? "Schedule a Consultation" : "Send us a message"}
              </CardTitle>
              <CardDescription>
                {contactReason === "consultation" 
                  ? "Please provide your contact information to schedule a consultation."
                  : "Fill out the form below and we'll get back to you as soon as possible."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Contacting</Label>
                  <Select
                    onValueChange={setContactReason}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="services">Questions about Services</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="consultation">Book Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {contactReason !== "consultation" && (
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                )}

                <div className="flex justify-center">
                  {contactReason === "consultation" ? (
                    <Button
                      type="button"
                      size="lg"
                      className="w-full sm:w-auto px-8"
                      onClick={() => window.location.href = '/book-consultation'}
                    >
                      Schedule Consultation
                    </Button>
                  ) : (
                    <Button type="submit" size="lg" className="w-full sm:w-auto px-8">
                      Send Message
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Contact Information */}
        <div className="mx-auto mb-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Building2 className="h-8 w-8 text-[#FFC000] mb-2" />
                <CardTitle>Head Office</CardTitle>
                <CardDescription>
                  Gedung ASCOM, Lt.2
                  Jl. Matraman Raya No.67
                  Palmerah, Matraman
                  Jakarta Timur 13140
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 text-[#FFC000] mb-2" />
                <CardTitle>Phone</CardTitle>
                <CardDescription>
                  <li>
                    <a href="https://wa.me/+622129613810" className="text-[#FFC000]">
                      +62 21 29613810
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/+622129613810" className="text-[#FFC000]">
                      +62 21 29613810
                    </a>
                  </li>
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-[#FFC000] mb-2" />
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  <a href="gunawan@united-trainingdevelopment.com" className="text-[#FFC000] dark:text-indigo-400 hover:underline">
                    gunawan@united-trainingdevelopment.com
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
} 