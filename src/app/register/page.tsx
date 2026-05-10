import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket, User, Mail, Gift } from "lucide-react";

export default function Register() {
  return (
    <main className="min-h-screen bg-[#070B14] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <Link href="/" className="flex items-center gap-2 justify-center mb-8 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <Rocket className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white font-heading">
              Reward<span className="text-primary">Verse</span>
            </span>
          </Link>
          <h1 className="text-4xl font-black text-white mb-4 font-heading tracking-tight">Create Account</h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-medium">Join the universe and start earning today</p>
        </div>

        <div className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground ml-1">Username</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="rewarder_2026" className="bg-white/5 border-white/10 h-14 pl-12 rounded-2xl focus:border-primary/50" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 h-14 pl-12 rounded-2xl focus:border-primary/50" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground ml-1">Referral Code (Optional)</label>
            <div className="relative">
              <Gift className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="REWARD500" className="bg-white/5 border-white/10 h-14 pl-12 rounded-2xl focus:border-primary/50" />
            </div>
          </div>

          <Button size="lg" className="w-full h-14 bg-primary hover:bg-primary/90 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 mt-4">
            Sign Up Now
          </Button>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Sign In</Link>
            </p>
          </div>
        </div>

        <p className="text-center mt-10 text-sm text-muted-foreground">
          By signing up, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms</Link> and <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
}
