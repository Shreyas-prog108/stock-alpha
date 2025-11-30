"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { mockStocks } from "@/lib/mock-data"

interface StockSearchProps {
  onSelectStock: (symbol: string) => void
}

export function StockSearch({ onSelectStock }: StockSearchProps) {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const filteredStocks = mockStocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
      stock.name.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="relative w-full max-w-xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search stocks by ticker or company name..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-10 bg-card border-border h-12 text-foreground"
        />
      </div>

      {isOpen && query && (
        <div className="absolute top-full left-0 right-0 mt-2 glass rounded-xl border border-border overflow-hidden z-50">
          {filteredStocks.length > 0 ? (
            filteredStocks.map((stock) => (
              <button
                key={stock.symbol}
                onClick={() => {
                  onSelectStock(stock.symbol)
                  setQuery("")
                  setIsOpen(false)
                }}
                className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors text-left"
              >
                <div>
                  <span className="font-semibold text-foreground">{stock.symbol}</span>
                  <span className="text-muted-foreground ml-2">{stock.name}</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-foreground">${stock.price.toFixed(2)}</span>
                  <span className={`ml-2 ${stock.change >= 0 ? "text-primary" : "text-destructive"}`}>
                    {stock.change >= 0 ? "+" : ""}
                    {stock.changePercent.toFixed(2)}%
                  </span>
                </div>
              </button>
            ))
          ) : (
            <div className="p-4 text-center text-muted-foreground">No stocks found</div>
          )}
        </div>
      )}
    </div>
  )
}
