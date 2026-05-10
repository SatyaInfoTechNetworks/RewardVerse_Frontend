import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | RewardVerse by Satya InfoTech Networks",
  description: "Read the Cookie Policy of RewardVerse by Satya InfoTech Networks.",
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-[#070B14]">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2rem] border border-white/5">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              RewardVerse uses cookies and similar tracking technologies to ensure our website and app function correctly, to understand how you use our platform, and to provide personalized experiences.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Essential Cookies:</strong> These are necessary for the platform to function. They include authentication cookies that keep you logged in.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> We use these to track how users interact with our site, helping us identify which features are popular and which need improvement.
                </li>
                <li>
                  <strong>Preference Cookies:</strong> These remember your settings, such as language or theme preferences.
                </li>
                <li>
                  <strong>Security Cookies:</strong> These help us identify and prevent security risks and fraudulent activity.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. However, disabling essential cookies may limit your ability to use certain features of the platform.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
