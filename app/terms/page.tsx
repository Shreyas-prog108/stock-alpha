import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: December 1, 2025</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using StockAI's services, you agree to be bound by these Terms of Service and all
                  applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
                  using or accessing this site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily access and use StockAI for personal, non-commercial use subject
                  to the following restrictions:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>You must not modify or copy the materials</li>
                  <li>You must not use the materials for any commercial purpose</li>
                  <li>You must not attempt to reverse engineer any software</li>
                  <li>You must not remove any copyright or proprietary notations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Financial Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  StockAI provides AI-generated stock analysis and recommendations for informational purposes only. This
                  is not financial advice. We are not licensed financial advisors. Always consult with a qualified
                  financial professional before making investment decisions. Past performance does not guarantee future
                  results. Trading stocks involves risk, and you may lose money.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Account Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account and password. You agree to
                  accept responsibility for all activities that occur under your account. You must notify us immediately
                  of any unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Service Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  StockAI reserves the right to modify, suspend, or discontinue any part of the service at any time
                  without prior notice. We shall not be liable to you or any third party for any modification,
                  suspension, or discontinuation of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall StockAI or its suppliers be liable for any damages arising out of the use or
                  inability to use the materials or services, even if we have been notified of the possibility of such
                  damage. Some jurisdictions do not allow limitations on implied warranties, so this limitation may not
                  apply to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of the United States,
                  without regard to its conflict of law provisions. Any disputes arising under these terms shall be
                  resolved in the courts of San Francisco, California.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at legal@stockai.com or
                  through our contact page.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
