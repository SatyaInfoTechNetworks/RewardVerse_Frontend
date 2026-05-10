import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, Send, Globe } from "lucide-react";

export default function Login() {
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
          <h1 className="text-4xl font-black text-white mb-4 font-heading tracking-tight">Welcome Back</h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-medium">Sign in to continue your earning journey</p>
        </div>

        <div className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-6">
          <Button size="lg" className="w-full h-14 bg-white text-black hover:bg-white/90 rounded-2xl font-bold flex items-center justify-center gap-3">
            <Globe className="w-5 h-5" />
            Continue with Google
          </Button>

          <Button size="lg" className="w-full h-14 bg-[#24A1DE] text-white hover:bg-[#24A1DE]/90 rounded-2xl font-bold flex items-center justify-center gap-3">
            <Send className="w-5 h-5" />
            Continue with Telegram
          </Button>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#060816] px-4 text-muted-foreground">New to RewardVerse?</span>
            </div>
          </div>

          <Link href="/register" className="block">
            <Button variant="outline" className="w-full h-14 border-white/10 hover:bg-white/5 rounded-2xl font-bold">
              Create an Account
            </Button>
          </Link>
        </div>

        <p className="text-center mt-10 text-sm text-muted-foreground">
          By continuing, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms</Link> and <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
}
