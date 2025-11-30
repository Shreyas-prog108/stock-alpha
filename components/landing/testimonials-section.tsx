import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Day Trader",
    avatar: "/professional-woman-avatar.png",
    content:
      "StockAI has completely changed how I research stocks. The AI chat feature saves me hours of analysis every day.",
    rating: 5,
  },
  {
    name: "Michael Roberts",
    role: "Retail Investor",
    avatar: "/professional-man-avatar.png",
    content:
      "The sentiment analysis on news articles is incredibly accurate. I've made better decisions since using this platform.",
    rating: 5,
  },
  {
    name: "Emily Zhang",
    role: "Student Investor",
    avatar: "/young-woman-avatar.png",
    content:
      "As a beginner, the AI recommendations helped me build a diversified portfolio. The free tier is perfect for learning.",
    rating: 5,
  },
]

const logos = [
  { name: "TechCrunch", width: "w-24" },
  { name: "Forbes", width: "w-20" },
  { name: "Bloomberg", width: "w-28" },
  { name: "Reuters", width: "w-24" },
  { name: "CNBC", width: "w-16" },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="gradient-text">Investors Worldwide</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of investors who are making smarter decisions with StockAI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6">{`"${testimonial.content}"`}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8">Featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`${logo.width} h-8 bg-muted-foreground/20 rounded flex items-center justify-center`}
              >
                <span className="text-xs text-muted-foreground font-semibold">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
