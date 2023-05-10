import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQs() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is a Happift Gift Card?</AccordionTrigger>
        <AccordionContent>
          A Happift Gift Card is a prepaid card that can be used to purchase
          products and services from a variety of retailers and businesses.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          How do I purchase a Happift Gift Card?
        </AccordionTrigger>
        <AccordionContent>
          You can purchase a Happift Gift Card directly from our website. Simply
          select the amount you would like to purchase, provide your billing
          information, and the gift card will be delivered to you
          electronically.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How can I use my Happift Gift Card?</AccordionTrigger>
        <AccordionContent>
          You can use your Happift Gift Card to purchase products and services
          from any of the retailers or businesses that accept our gift cards.
          Simply present the gift card as payment at the time of purchase.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          How do I check my Happift Gift Card balance?
        </AccordionTrigger>
        <AccordionContent>
          You can check your Happift Gift Card balance on our website. Simply
          enter the gift card number and security code, and your balance will be
          displayed.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          What is the expiration date for a Happift Gift Card?
        </AccordionTrigger>
        <AccordionContent>
          Happift Gift Cards do not have an expiration date.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Can I reload my Happift Gift Card?</AccordionTrigger>
        <AccordionContent>
          No, Happift Gift Cards cannot be reloaded. Once the balance on the
          gift card has been used, the card cannot be used again.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
          Can I return or exchange a Happift Gift Card?
        </AccordionTrigger>
        <AccordionContent>
          : No, Happift Gift Cards cannot be returned or exchanged for cash or
          other products.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
