import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Shield, Target, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070B14]">
      <Navbar />
      
      <div className="pt-40 pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
                About Our Company
              </span>
              <h1 className="text-5xl lg:text-7xl font-black mb-8 font-heading leading-tight">
                Satya InfoTech <span className="text-gradient">Networks</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                RewardVerse is a premium digital product developed and operated by Satya InfoTech Networks. 
                We are committed to building innovative, transparent, and rewarding mobile experiences for users across India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="glass p-8 rounded-[2rem] border border-white/5">
                <Target className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4 font-heading">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a safe and engaging ecosystem where users can discover new apps, share opinions, 
                  and earn legitimate rewards for their digital engagement.
                </p>
              </div>
              <div className="glass p-8 rounded-[2rem] border border-white/5">
                <Shield className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 font-heading">Trust & Transparency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Under Satya InfoTech Networks, we prioritize data privacy and instant redemption, 
                  ensuring every user interaction is valued and secured.
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6 font-heading">The RewardVerse Story</h2>
              <p className="text-muted-foreground text-lg mb-6">
                RewardVerse was born from a simple idea: digital engagement should be rewarding. 
                Our platform connects users with brands and research agencies, creating a win-win 
                environment where user feedback and app discovery lead to tangible rewards.
              </p>
              <p className="text-muted-foreground text-lg mb-12">
                As a part of Satya InfoTech Networks, we leverage cutting-edge technology to provide 
                a seamless Android experience, featuring instant payouts to UPI, Amazon Pay, and Google Play.
              </p>
              
              <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-12 text-center">
                <h3 className="text-2xl font-bold mb-4 font-heading">Compliance & Quality</h3>
                <p className="text-muted-foreground mb-8">
                  We strictly adhere to Google Play policies and industry best practices. 
                  RewardVerse is not a money-making scheme; it is a rewards and loyalty platform 
                  designed for verified user engagement.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-bold">50k+ Active Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-cyan-400" />
                    <span className="font-bold">Based in India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
