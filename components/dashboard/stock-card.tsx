"use client"

import { TrendingUp, TrendingDown, Plus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Stock {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  volume: string
  marketCap: string
  high: number
  low: number
  open: number
}

interface StockCardProps {
  stock: Stock
  onSelect: () => void
  isSelected: boolean
}

export function StockCard({ stock, onSelect, isSelected }: StockCardProps) {
  const [inWatchlist, setInWatchlist] = useState(false)
  const isPositive = stock.change >= 0

  return (
    <div
      className={`glass rounded-xl p-4 cursor-pointer transition-all duration-300 ${
        isSelected ? "ring-2 ring-primary glow-primary" : "hover:bg-muted/50"
      }`}
      onClick={onSelect}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-foreground">{stock.symbol}</h3>
          <p className="text-sm text-muted-foreground truncate max-w-[150px]">{stock.name}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={inWatchlist ? "text-primary" : "text-muted-foreground"}
          onClick={(e) => {
            e.stopPropagation()
            setInWatchlist(!inWatchlist)
          }}
        >
          {inWatchlist ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </Button>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <span className="text-2xl font-bold text-foreground">${stock.price.toFixed(2)}</span>
          <div className={`flex items-center gap-1 ${isPositive ? "text-primary" : "text-destructive"}`}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span className="text-sm font-medium">
              {isPositive ? "+" : ""}
              {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>
        <div className="text-right text-xs text-muted-foreground">
          <p>Vol: {stock.volume}</p>
          <p>Cap: {stock.marketCap}</p>
        </div>
      </div>
    </div>
  )
}
