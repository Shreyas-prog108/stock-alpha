import { Search, Newspaper, Bot, Target, Bell, Shield } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Real-time Stock Search",
    description: "Search any stock by ticker or company name and get instant price updates, charts, and market data.",
  },
  {
    icon: Newspaper,
    title: "AI News & Analysis Feed",
    description: "Stay informed with AI-curated news articles and sentiment analysis for every stock you track.",
  },
  {
    icon: Bot,
    title: "Multi-AI Model Chatbot",
    description: "Choose from Gemini, Grok, or OpenAI to power your investment research and get personalized insights.",
  },
  {
    icon: Target,
    title: "Smart Recommendations",
    description: "Get AI-powered stock recommendations based on your investment style and risk tolerance.",
  },
  {
    icon: Bell,
    title: "Portfolio Alerts",
    description: "Set custom alerts for price movements, news events, and AI-detected opportunities.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data and investment preferences are encrypted and never shared with third parties.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need for
            <span className="gradient-text"> Smarter Investing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines real-time market data with advanced AI to give you the edge in your investment
            decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:bg-muted/50 transition-all duration-300 gradient-border group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
