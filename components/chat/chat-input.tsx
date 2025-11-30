"use client"

import type React from "react"

import { useState } from "react"
import { Send, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface ChatInputProps {
  onSend: (message: string) => void
  isLoading?: boolean
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !isLoading) {
      onSend(message.trim())
      setMessage("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-4">
      <div className="flex items-end gap-3">
        <Button type="button" variant="ghost" size="icon" className="text-muted-foreground flex-shrink-0">
          <Paperclip className="w-5 h-5" />
        </Button>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about stocks, get analysis, or request recommendations..."
          className="flex-1 min-h-[44px] max-h-[200px] bg-transparent border-0 resize-none focus-visible:ring-0 text-foreground placeholder:text-muted-foreground"
          rows={1}
        />
        <Button
          type="submit"
          size="icon"
          disabled={!message.trim() || isLoading}
          className="bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </form>
  )
}
