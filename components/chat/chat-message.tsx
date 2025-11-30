"use client"

import { Bot, User } from "lucide-react"

interface ChatMessageProps {
  role: "user" | "assistant"
  content: string
  model?: string
}

export function ChatMessage({ role, content, model }: ChatMessageProps) {
  const isAssistant = role === "assistant"

  return (
    <div className={`flex gap-4 ${isAssistant ? "" : "flex-row-reverse"}`}>
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
          isAssistant ? "bg-primary/10" : "bg-secondary/10"
        }`}
      >
        {isAssistant ? <Bot className="w-5 h-5 text-primary" /> : <User className="w-5 h-5 text-secondary" />}
      </div>
      <div className={`flex-1 max-w-[80%] ${isAssistant ? "" : "flex justify-end"}`}>
        {isAssistant && model && <span className="text-xs text-muted-foreground mb-1 block capitalize">{model}</span>}
        <div
          className={`rounded-2xl p-4 ${isAssistant ? "glass text-foreground" : "bg-primary text-primary-foreground"}`}
        >
          <p className="whitespace-pre-wrap">{content}</p>
        </div>
      </div>
    </div>
  )
}
