"use client"

import { useState, useRef, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { ChatSidebar } from "@/components/chat/chat-sidebar"
import { ModelSelector } from "@/components/chat/model-selector"
import { ChatMessage } from "@/components/chat/chat-message"
import { ChatInput } from "@/components/chat/chat-input"
import { QuickPrompts } from "@/components/chat/quick-prompts"
import { TrendingUp } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  model?: string
}

const mockResponses: Record<string, string> = {
  default: `Based on my analysis, here are the key insights:

**Market Overview:**
The current market conditions show mixed signals with tech stocks leading the recovery. Volume has been above average, indicating strong investor interest.

**Key Metrics:**
- P/E Ratio: Within historical average
- RSI: Neutral territory (50-55)
- Moving Averages: Price above 50-day MA

**Recommendation:**
Consider a balanced approach with focus on quality growth stocks. Diversification remains important given current volatility.

Would you like me to dive deeper into any specific aspect?`,
  apple: `**Apple (AAPL) 5-Year Analysis:**

**Performance Summary:**
Apple has delivered strong returns over the past 5 years, outperforming the S&P 500 by approximately 45%.

**Key Growth Drivers:**
1. **Services Revenue** - Growing at 15% CAGR, now representing 22% of total revenue
2. **Wearables** - Apple Watch and AirPods showing consistent growth
3. **iPhone** - Steady upgrade cycles with premium pricing power

**Financial Health:**
- Revenue CAGR: 11.2%
- Net Income CAGR: 14.8%
- Free Cash Flow: $100B+ annually
- Cash Position: $150B+

**5-Year Price Targets:**
- Conservative: $220
- Base Case: $280
- Optimistic: $350

**Risks to Consider:**
- China market dependency
- Regulatory pressures
- Competition in services

**Verdict:** Strong long-term hold with potential for continued appreciation.`,
  tesla: `**Tesla (TSLA) Sentiment Analysis:**

**Current Sentiment Score: 0.65 (Moderately Positive)**

**News Sentiment Breakdown:**
- Positive Articles: 58%
- Neutral Articles: 27%
- Negative Articles: 15%

**Key Sentiment Drivers:**

📈 **Positive Factors:**
- Strong Q3 delivery numbers exceeding estimates
- Cybertruck production ramp-up on track
- Energy storage business showing 40% growth
- FSD (Full Self-Driving) improvements receiving praise

📉 **Negative Factors:**
- Price war concerns affecting margins
- Competition from Chinese EV makers
- Valuation concerns from some analysts
- CEO attention divided across companies

**Social Media Analysis:**
- Twitter/X mentions: 85% positive
- Reddit sentiment: Mixed (60% bullish)
- StockTwits: Bullish momentum

**Institutional Activity:**
Recent filings show net buying from institutional investors.

**Recommendation:** Monitor closely. High volatility expected around earnings.`,
  portfolio: `**Diversified Portfolio for Student Investors:**

**Investment Philosophy:**
Long-term growth focus with risk management appropriate for a longer time horizon.

**Recommended Allocation:**

**Growth (60%)**
| Stock | Allocation | Rationale |
|-------|------------|-----------|
| VOO (S&P 500 ETF) | 25% | Market exposure |
| QQQ (Nasdaq ETF) | 15% | Tech growth |
| AAPL | 10% | Quality growth |
| MSFT | 10% | Cloud + AI leader |

**Dividend Income (20%)**
| Stock | Allocation | Yield |
|-------|------------|-------|
| SCHD (Dividend ETF) | 15% | 3.5% |
| VYM | 5% | 3.2% |

**Emerging Opportunities (15%)**
| Stock | Allocation | Theme |
|-------|------------|-------|
| NVDA | 8% | AI revolution |
| AMZN | 7% | E-commerce + Cloud |

**Cash Reserve (5%)**
Keep for opportunities and emergencies.

**Monthly Investment Strategy:**
- Dollar-cost average $200-500/month
- Reinvest all dividends
- Rebalance quarterly

**Expected Returns:** 8-12% annually over 10+ years

Would you like specific entry points or more details on any position?`,
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedModel, setSelectedModel] = useState("gemini")
  const [currentChatId, setCurrentChatId] = useState("new")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleNewChat = () => {
    setMessages([])
    setCurrentChatId("new")
  }

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let response = mockResponses.default
      const lowerContent = content.toLowerCase()

      if (lowerContent.includes("apple") || lowerContent.includes("aapl")) {
        response = mockResponses.apple
      } else if (
        lowerContent.includes("tesla") ||
        lowerContent.includes("tsla") ||
        lowerContent.includes("sentiment")
      ) {
        response = mockResponses.tesla
      } else if (
        lowerContent.includes("portfolio") ||
        lowerContent.includes("student") ||
        lowerContent.includes("diversif")
      ) {
        response = mockResponses.portfolio
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        model: selectedModel,
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 flex pt-16 overflow-hidden">
        <ChatSidebar onNewChat={handleNewChat} currentChatId={currentChatId} onSelectChat={setCurrentChatId} />

        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-border flex items-center justify-between glass">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="font-semibold text-foreground">AI Stock Assistant</h1>
                <p className="text-xs text-muted-foreground">Ask about stocks, analysis, or recommendations</p>
              </div>
            </div>
            <ModelSelector selectedModel={selectedModel} onSelectModel={setSelectedModel} />
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">How can I help you invest smarter?</h2>
                <p className="text-muted-foreground text-center mb-8">
                  Ask me about any stock, request analysis, or get personalized recommendations.
                </p>
                <QuickPrompts onSelect={handleSendMessage} />
              </div>
            ) : (
              <div className="max-w-3xl mx-auto space-y-6">
                {messages.map((message) => (
                  <ChatMessage key={message.id} role={message.role} content={message.content} model={message.model} />
                ))}
                {isLoading && (
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                    <div className="glass rounded-2xl p-4">
                      <div className="flex gap-1">
                        <span
                          className="w-2 h-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="w-2 h-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-2 h-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          <div className="p-4 border-t border-border">
            <div className="max-w-3xl mx-auto">
              <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
