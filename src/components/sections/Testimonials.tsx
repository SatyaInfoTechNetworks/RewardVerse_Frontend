"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Power User",
    content: "The payouts are incredibly fast. I've earned over ₹2000 in my first week just by doing simple surveys in my spare time.",
    avatar: "AJ",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Verified Earner",
    content: "Best reward platform I've used. The UI is so smooth on my Android phone. I refer all my friends to this app.",
    avatar: "SC",
    rating: 5
  },
  {
    name: "David Miller",
    role: "Daily User",
    content: "Legitimate and secure. I use RewardVerse to get my Google Play credits and UPI cash. Highly recommended for students.",
    avatar: "DM",
    rating: 5
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-white/[0.01] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-heading">
            User <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            Trusted by thousands of users across the country. See what they have to say about RewardVerse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] border border-white/5 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-8 italic text-white/90">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center font-black text-primary text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold font-heading text-lg">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
