"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, X, HelpCircle, ChevronDown, ChevronUp } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with stock analysis",
    features: [
      { name: "5 stock searches/day", included: true },
      { name: "10 AI messages/month", included: true },
      { name: "Delayed data (15 min)", included: true },
      { name: "Basic charts", included: true },
      { name: "Community support", included: true },
      { name: "Real-time data", included: false },
      { name: "All AI models", included: false },
      { name: "Portfolio tracking", included: false },
      { name: "Price alerts", included: false },
      { name: "API access", included: false },
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious investors who want an edge",
    features: [
      { name: "Unlimited stock searches", included: true },
      { name: "500 AI messages/month", included: true },
      { name: "Real-time data", included: true },
      { name: "Advanced charts", included: true },
      { name: "All AI models", included: true },
      { name: "Portfolio tracking", included: true },
      { name: "Price alerts", included: true },
      { name: "Priority support", included: true },
      { name: "API access", included: false },
      { name: "Custom reports", included: false },
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Ultimate",
    price: "$99",
    period: "/month",
    description: "Maximum power for professional traders",
    features: [
      { name: "Everything in Pro", included: true },
      { name: "Unlimited AI messages", included: true },
      { name: "Premium AI insights", included: true },
      { name: "Portfolio suggestions", included: true },
      { name: "Custom alerts", included: true },
      { name: "API access", included: true },
      { name: "Custom reports", included: true },
      { name: "Dedicated support", included: true },
      { name: "Early feature access", included: true },
      { name: "White-label options", included: true },
    ],
    cta: "Go Ultimate",
    popular: false,
  },
]

const comparisonFeatures = [
  { name: "Stock Searches", free: "5/day", pro: "Unlimited", ultimate: "Unlimited" },
  { name: "AI Messages", free: "10/month", pro: "500/month", ultimate: "Unlimited" },
  { name: "Data Delay", free: "15 minutes", pro: "Real-time", ultimate: "Real-time" },
  { name: "AI Models", free: "1 model", pro: "All models", ultimate: "All + Premium" },
  { name: "Portfolio Tracking", free: "-", pro: "Up to 50 stocks", ultimate: "Unlimited" },
  { name: "Price Alerts", free: "-", pro: "10 alerts", ultimate: "Unlimited" },
  { name: "Support", free: "Community", pro: "Priority", ultimate: "Dedicated" },
  { name: "API Access", free: "-", pro: "-", ultimate: "Full access" },
]

const faqs = [
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the change takes effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "Yes! Both Pro and Ultimate plans come with a 14-day free trial. No credit card required to start. You'll only be charged after the trial period if you decide to continue.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions. All payments are processed securely through Stripe.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact our support team within 30 days of your purchase for a full refund.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes! When you choose annual billing, you get 2 months free. That's a 17% discount compared to monthly billing.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-level encryption (AES-256) for all data at rest and in transit. We never share your personal information or investment data with third parties.",
  },
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Choose Your <span className="gradient-text">Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and scale as you grow. All plans include core features with no hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`text-sm ${billingPeriod === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annual" : "monthly")}
                className="relative w-14 h-7 rounded-full bg-muted transition-colors"
              >
                <span
                  className={`absolute top-1 w-5 h-5 rounded-full bg-primary transition-all ${
                    billingPeriod === "annual" ? "left-8" : "left-1"
                  }`}
                />
              </button>
              <span className={`text-sm ${billingPeriod === "annual" ? "text-foreground" : "text-muted-foreground"}`}>
                Annual
                <span className="ml-2 text-xs text-primary font-semibold">Save 17%</span>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative glass rounded-2xl p-8 ${plan.popular ? "ring-2 ring-primary glow-primary" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    {billingPeriod === "annual" && plan.price !== "$0"
                      ? `$${Math.round(Number.parseInt(plan.price.slice(1)) * 10)}`
                      : plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {billingPeriod === "annual" && plan.price !== "$0" ? "/year" : plan.period}
                  </span>
                </div>

                <Button
                  className={`w-full mb-8 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Compare <span className="gradient-text">Plans</span>
            </h2>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-foreground font-semibold">Feature</th>
                      <th className="text-center p-4 text-foreground font-semibold">Free</th>
                      <th className="text-center p-4 text-foreground font-semibold bg-primary/5">Pro</th>
                      <th className="text-center p-4 text-foreground font-semibold">Ultimate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index} className="border-b border-border last:border-0">
                        <td className="p-4 text-foreground">{feature.name}</td>
                        <td className="p-4 text-center text-muted-foreground">{feature.free}</td>
                        <td className="p-4 text-center text-foreground bg-primary/5">{feature.pro}</td>
                        <td className="p-4 text-center text-foreground">{feature.ultimate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-semibold text-foreground">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12 glass rounded-2xl p-8">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                Our team is here to help you choose the right plan for your needs.
              </p>
              <Button variant="outline" className="border-border bg-transparent">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
