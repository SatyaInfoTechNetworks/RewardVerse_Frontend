import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Refund Policy | RewardVerse by Satya InfoTech Networks",
  description: "Read the Refund Policy of RewardVerse by Satya InfoTech Networks.",
};

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-[#070B14]">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2rem] border border-white/5">
          <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Digital Rewards</h2>
              <p>
                All rewards redeemed through RewardVerse, including but not limited to gift cards, game credits, and cash transfers, are digital in nature. Once a reward is successfully processed and delivered, it is strictly non-refundable and non-exchangeable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Invalid or Fraudulent Activity</h2>
              <p>
                If a reward redemption is found to be based on fraudulent activity, VPN abuse, or any violation of our Terms & Conditions, RewardVerse reserves the right to void the transaction and revoke the rewards without any refund or compensation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Redemption Errors</h2>
              <p>
                In case of a technical error during redemption where coins are deducted but the reward is not delivered, please contact our support team within 48 hours. We will investigate and credit the coins back to your account if the error is verified on our end.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Support Contact</h2>
              <p>
                For any disputes or issues regarding reward redemptions, please reach out to us at <a href="mailto:support@satyainfotechnetworks.com" className="text-primary hover:underline">support@satyainfotechnetworks.com</a> with your account details and transaction ID.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
