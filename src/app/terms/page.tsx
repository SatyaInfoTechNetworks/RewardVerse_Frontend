import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | RewardVerse by Satya InfoTech Networks",
  description: "Read the Terms & Conditions of RewardVerse by Satya InfoTech Networks.",
};

export default function TermsAndConditions() {
  const lastUpdated = "May 10, 2026";

  return (
    <main className="min-h-screen bg-[#070B14]">
      <Navbar />
      <div className="container mx-auto px-4 pt-40 pb-24">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4 font-heading tracking-tight">Terms & Conditions</h1>
            <p className="text-muted-foreground italic">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">1. Intellectual Property</h2>
              <p>
                The Application and its original content, features, and functionality are and will remain the exclusive property of Satya InfoTech Networks and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent. Reverse engineering, copying, or distributing our application code is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">2. User Accounts & Security</h2>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li>You are responsible for safeguarding the device you use to access the service.</li>
                <li>You agree not to disclose your account details to any third party.</li>
                <li>The application requires an active internet connection; Satya InfoTech Networks is not responsible for any data charges incurred.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">3. Modified & Rooted Devices</h2>
              <p>
                RewardVerse is designed to operate on standard, un-modified Android devices. We do not guarantee the Application will function correctly on rooted, jailbroken, or otherwise modified devices. We are not liable for any security breaches or functionality issues arising from use on such devices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">4. Rewards & Redemptions</h2>
              <p>
                All rewards earned in the Application are promotional in nature. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verify all task completions before processing redemptions.</li>
                <li>Cancel or withhold rewards if fraudulent activity (e.g., VPN use, fake referrals) is detected.</li>
                <li>Modify the exchange rate of reward coins or the availability of gift cards at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">5. Prohibited Activities</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use VPNs, proxies, or emulators to access the application.</li>
                <li>Create multiple accounts for a single individual.</li>
                <li>Use automated bots or scripts to complete tasks.</li>
                <li>Exploit any bugs or glitches for unauthorized rewards.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">6. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">7. Changes</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="pt-12 border-t border-white/5">
              <p className="text-sm font-medium">
                By using RewardVerse, you acknowledge that you have read and agree to these Terms & Conditions. For support, email <a href="mailto:support@satyainfotechnetworks.com" className="text-primary hover:underline">support@satyainfotechnetworks.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
