"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import FormModal from "@/app/components/FormModal";

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mt-12 bg-[#FFC000]">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to develop your team?</span>
          <span className="block">Start your training journey today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-white text-opacity-80">
          Our experts are ready to help you navigate the complex world of professional development and training.
        </p>
        <Button size="lg" variant="secondary" className="mt-8" onClick={() => setIsModalOpen(true)}>
          Contact Us
        </Button>
        <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}