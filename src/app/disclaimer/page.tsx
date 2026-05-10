import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | RewardVerse by Satya InfoTech Networks",
  description: "Read the Disclaimer of RewardVerse by Satya InfoTech Networks.",
};

export default function Disclaimer() {
  const lastUpdated = "May 10, 2026";

  return (
    <main className="min-h-screen bg-[#070B14]">
      <Navbar />
      <div className="container mx-auto px-4 pt-40 pb-24">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4 font-heading tracking-tight">Disclaimer</h1>
            <p className="text-muted-foreground italic">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">1. General Disclaimer</h2>
              <p>
                The information provided by RewardVerse ("we," "us," or "our") on our mobile application and website is for general informational purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">2. "As Is" Basis</h2>
              <p>
                The Application is provided on an "AS IS" and "AS AVAILABLE" basis. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the application or reliance on any information provided. Your use of the application and your reliance on any information is solely at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">3. External Links Disclaimer</h2>
              <p>
                The Application may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">4. Earnings Disclaimer</h2>
              <p>
                RewardVerse is a rewards and engagement platform. While we aim to provide accurate and timely tracking of reward coins, we are not responsible for delays or discrepancies caused by third-party offerwalls or survey providers.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Rewards are not guaranteed and are subject to verification and third-party approval.</li>
                <li>Redemption amounts and availability are subject to change without notice.</li>
                <li>RewardVerse is NOT an investment platform or a "get rich quick" scheme.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">5. Limitation of Liability</h2>
              <p>
                In no event shall Satya InfoTech Networks or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">6. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Satya InfoTech Networks and its licensees and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of your use and access of the application.
              </p>
            </section>

            <section className="pt-12 border-t border-white/5">
              <p className="text-sm font-medium">
                For any questions regarding this disclaimer, please contact us at <a href="mailto:support@satyainfotechnetworks.com" className="text-primary hover:underline">support@satyainfotechnetworks.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
