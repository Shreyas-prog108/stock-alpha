"use client"

import { mockNews } from "@/lib/mock-data"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export function NewsFeed() {
  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return <TrendingUp className="w-4 h-4 text-primary" />
      case "negative":
        return <TrendingDown className="w-4 h-4 text-destructive" />
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getSentimentColor = (score: number) => {
    if (score > 0.3) return "text-primary"
    if (score < -0.3) return "text-destructive"
    return "text-muted-foreground"
  }

  return (
    <div className="space-y-4">
      {mockNews.map((article) => (
        <div key={article.id} className="glass rounded-xl p-4 hover:bg-muted/50 transition-colors cursor-pointer">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-1 line-clamp-2">{article.title}</h4>
              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{article.summary}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{article.source}</span>
                <span>•</span>
                <span>{article.time}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              {getSentimentIcon(article.sentiment)}
              <span className={`text-xs font-semibold ${getSentimentColor(article.sentimentScore)}`}>
                {article.sentimentScore > 0 ? "+" : ""}
                {(article.sentimentScore * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
