"use client"

import { useState } from "react"
import { Plus, MessageSquare, Star, ChevronLeft, ChevronRight, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { mockStocks } from "@/lib/mock-data"

interface ChatSidebarProps {
  onNewChat: () => void
  currentChatId: string
  onSelectChat: (id: string) => void
}

const savedChats = [
  { id: "1", title: "Apple Stock Analysis", date: "Today" },
  { id: "2", title: "Portfolio Diversification", date: "Yesterday" },
  { id: "3", title: "Tesla Investment Strategy", date: "Dec 10" },
  { id: "4", title: "NVIDIA Market Position", date: "Dec 9" },
]

export function ChatSidebar({ onNewChat, currentChatId, onSelectChat }: ChatSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  if (isCollapsed) {
    return (
      <div className="w-16 glass border-r border-border flex flex-col items-center py-4">
        <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(false)} className="mb-4">
          <ChevronRight className="w-5 h-5" />
        </Button>
        <Button size="icon" onClick={onNewChat} className="bg-primary text-primary-foreground mb-4">
          <Plus className="w-5 h-5" />
        </Button>
        <div className="flex-1" />
        <Star className="w-5 h-5 text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="w-72 glass border-r border-border flex flex-col">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-foreground">Chats</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(true)}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </div>
        <Button onClick={onNewChat} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          New Chat
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-3">Saved Chats</h3>
        <div className="space-y-2">
          {savedChats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors group ${
                currentChatId === chat.id ? "bg-primary/10 text-foreground" : "hover:bg-muted/50 text-muted-foreground"
              }`}
            >
              <MessageSquare className="w-4 h-4 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{chat.title}</p>
                <p className="text-xs text-muted-foreground">{chat.date}</p>
              </div>
              <Trash2 className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive" />
            </button>
          ))}
        </div>

        <h3 className="text-xs font-semibold text-muted-foreground uppercase mt-6 mb-3">Watchlist</h3>
        <div className="space-y-2">
          {mockStocks.slice(0, 4).map((stock) => (
            <div
              key={stock.symbol}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{stock.symbol}</span>
              </div>
              <span className={`text-xs ${stock.change >= 0 ? "text-primary" : "text-destructive"}`}>
                {stock.change >= 0 ? "+" : ""}
                {stock.changePercent.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
