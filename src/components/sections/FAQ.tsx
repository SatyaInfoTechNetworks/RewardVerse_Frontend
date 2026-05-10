"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I earn coins in RewardVerse?",
    answer: "You can earn coins by completing simple tasks such as surveys, app installs, daily check-ins, and inviting friends. Each task has a specific coin value mentioned."
  },
  {
    question: "Is it safe to use my Android phone?",
    answer: "Absolutely. RewardVerse is built with security in mind. We use industry-standard encryption and our app doesn't require any sensitive permissions like contacts or photos."
  },
  {
    question: "What is the minimum withdrawal amount?",
    answer: "We offer one of the lowest withdrawal limits. You can redeem your coins for as low as ₹10 to your Paytm wallet or UPI instantly."
  },
  {
    question: "How long does it take to receive rewards?",
    answer: "95% of our payouts are processed instantly. In some cases, manual verification might take up to 24 hours to ensure platform security."
  },
  {
    question: "Can I use RewardVerse on multiple devices?",
    answer: "To ensure fairness, we allow only one account per device. Using multiple accounts or VPNs will result in an automatic permanent ban."
  },
];

export function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-32 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
            Common <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            Everything you need to know about India's favorite rewards app.
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass p-12 rounded-[3rem] border border-white/5 shadow-2xl">
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/5 last:border-0">
                <AccordionTrigger className="text-left font-bold text-xl py-8 hover:text-primary transition-all font-heading">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
