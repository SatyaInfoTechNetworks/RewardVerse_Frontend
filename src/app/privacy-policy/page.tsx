import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | RewardVerse by Satya InfoTech Networks",
  description: "Read the Privacy Policy of RewardVerse by Satya InfoTech Networks.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "May 10, 2026";

  return (
    <main className="min-h-screen bg-[#070B14]">
      <Navbar />
      <div className="container mx-auto px-4 pt-40 pb-24">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4 font-heading tracking-tight">Privacy Policy</h1>
            <p className="text-muted-foreground italic">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">1. Introduction</h2>
              <p>
                RewardVerse ("we," "our," or "us"), operated by Satya InfoTech Networks, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">2. Information Collection</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect via the Application includes:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-white">Personal Data:</strong> Personally identifiable information, such as your name, email address, and phone number, that you voluntarily give to us when you register with the Application or when you choose to participate in various activities related to the Application.
                </li>
                <li>
                  <strong className="text-white">Device & Location Data:</strong> We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using the Application, to provide location-based services (like region-specific surveys). We also collect device-specific info (ID, model, OS).
                </li>
                <li>
                  <strong className="text-white">Advertising ID:</strong> We collect and share your Android Advertising ID with our partners to track offer completions and provide personalized rewards.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">3. How We Use Your Information</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we use information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create and manage your account.</li>
                <li>Deliver rewards, gift cards, and bonuses.</li>
                <li>Verify task completions and prevent fraudulent activity.</li>
                <li>Process payments and redemptions (UPI, Amazon Pay, etc.).</li>
                <li>Analyze usage trends to improve Application functionality.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">4. Third-Party Services</h2>
              <p>
                The Application uses third-party services that may collect information used to identify you. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Play Services / AdMob</li>
                <li>Google Analytics for Firebase</li>
                <li>Firebase Crashlytics</li>
                <li>Third-party Offerwall & Survey Providers (e.g., BitLabs, CPX Research)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">5. Data Retention & Deletion</h2>
              <p>
                We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law. 
              </p>
              <p className="mt-4">
                <strong className="text-white">Requesting Data Deletion:</strong> You have the right to request the deletion of your account and all associated personal data. To do so, please contact us at <a href="mailto:support@satyainfotechnetworks.com" className="text-primary hover:underline font-bold">support@satyainfotechnetworks.com</a>. We will process your request within 7 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">6. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">7. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <p className="font-bold text-white">Satya InfoTech Networks</p>
                <p>Website: <a href="https://satyainfotechnetworks.com" className="text-primary hover:underline">satyainfotechnetworks.com</a></p>
                <p>Email: <a href="mailto:support@satyainfotechnetworks.com" className="text-primary hover:underline">support@satyainfotechnetworks.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
