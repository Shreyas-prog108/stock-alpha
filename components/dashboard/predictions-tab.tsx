"use client"

import { mockPredictions } from "@/lib/mock-data"
import { Target, Brain } from "lucide-react"

export function PredictionsTab() {
  const getPredictionColor = (prediction: string) => {
    switch (prediction.toLowerCase()) {
      case "buy":
        return "text-primary bg-primary/10"
      case "sell":
        return "text-destructive bg-destructive/10"
      default:
        return "text-warning bg-warning/10"
    }
  }

  return (
    <div className="space-y-4">
      <div className="glass rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">AI Predictions</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Multiple AI models analyze the stock based on technical indicators, fundamental analysis, and market
          sentiment.
        </p>

        <div className="space-y-4">
          {mockPredictions.map((pred, index) => (
            <div key={index} className="bg-muted/30 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-foreground">{pred.model}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getPredictionColor(pred.prediction)}`}
                  >
                    {pred.prediction}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-semibold text-foreground">${pred.targetPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Confidence</span>
                  <span>{pred.confidence}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${pred.confidence}%` }}
                  />
                </div>
              </div>

              <p className="text-sm text-muted-foreground">{pred.reasoning}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass rounded-xl p-6">
        <h4 className="font-semibold text-foreground mb-3">Consensus</h4>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-primary">Buy (67%)</span>
              <span className="text-warning">Hold (33%)</span>
              <span className="text-destructive">Sell (0%)</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden flex">
              <div className="h-full bg-primary" style={{ width: "67%" }} />
              <div className="h-full bg-warning" style={{ width: "33%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
