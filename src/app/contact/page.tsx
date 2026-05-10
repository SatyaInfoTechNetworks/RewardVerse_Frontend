import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageSquare, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a question, feedback, or need help with a reward? Our support team is here to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="glass p-8 rounded-3xl border border-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Live Support</h3>
                    <p className="text-sm text-muted-foreground">Chat with us on Telegram</p>
                  </div>
                </div>
                <Link href="https://t.me/rewardverse_support" target="_blank">
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl">
                    Open Telegram Chat
                  </Button>
                </Link>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email Support</h3>
                    <p className="text-sm text-muted-foreground">support@rewardverse.com</p>
                  </div>
                </div>
                <Link href="mailto:support@rewardverse.com">
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 rounded-xl">
                    Send an Email
                  </Button>
                </Link>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Response Time</h3>
                    <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass p-8 md:p-10 rounded-3xl border border-white/5 h-full">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Name</label>
                      <Input placeholder="John Doe" className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-primary/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Input type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-primary/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="How can we help?" className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="Tell us more about your inquiry..." className="bg-white/5 border-white/10 min-h-[150px] rounded-xl focus:border-primary/50" />
                  </div>
                  <Button size="lg" className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-xl">
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
