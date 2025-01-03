import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Where are your training locations?</AccordionTrigger>
            <AccordionContent>
              We conduct training in major cities across Indonesia including Jakarta, Bandung, Yogyakarta, Surabaya, and Bali. All training sessions are held in 4-star hotels for optimal comfort and learning experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is your training experience?</AccordionTrigger>
            <AccordionContent>
              Since 2005, UTC has conducted over 520 training sessions comprising 235 different topics with more than 1,550 participants.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do you ensure training quality?</AccordionTrigger>
            <AccordionContent>
              We collaborate with leading university laboratories and institutions, and our training programs are designed to provide practical experience that can be easily applied in the workplace.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}