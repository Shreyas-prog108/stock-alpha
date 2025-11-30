"use client"

import { Sparkles } from "lucide-react"

interface QuickPromptsProps {
  onSelect: (prompt: string) => void
}

const prompts = [
  "Analyze Apple stock for 5 years",
  "Give sentiment analysis of Tesla",
  "Generate a diversified portfolio for a student investor",
  "What are the top tech stocks to watch?",
  "Explain the current market trends",
  "Compare NVIDIA vs AMD stocks",
]

export function QuickPrompts({ onSelect }: QuickPromptsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Sparkles className="w-4 h-4" />
        <span className="text-sm">Quick prompts to get started</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onSelect(prompt)}
            className="glass rounded-xl p-4 text-left hover:bg-muted/50 transition-colors gradient-border"
          >
            <p className="text-sm text-foreground">{prompt}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
