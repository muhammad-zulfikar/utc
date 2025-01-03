"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FormModal = ({ isOpen, onClose }) => {
  const [contactReason, setContactReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {contactReason === "consultation" ? "Schedule a Consultation" : "Send us a message"}
          </DialogTitle>
          <DialogDescription>
            {contactReason === "consultation"
              ? "Please provide your contact information to schedule a consultation."
              : "Fill out the form below and we'll get back to you as soon as possible."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your full name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Contacting</Label>
            <Select onValueChange={setContactReason}>
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
              <Textarea id="message" placeholder="Your message..." className="min-h-[150px]" required />
            </div>
          )}
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            {contactReason === "consultation" ? (
              <Button type="button" onClick={() => window.location.href = "/book-consultation"}>
                Schedule Consultation
              </Button>
            ) : (
              <Button type="submit">Send Message</Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;