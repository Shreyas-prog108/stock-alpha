"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { StockSearch } from "@/components/dashboard/stock-search"
import { StockCard } from "@/components/dashboard/stock-card"
import { StockChart } from "@/components/dashboard/stock-chart"
import { NewsFeed } from "@/components/dashboard/news-feed"
import { FinancialsTab } from "@/components/dashboard/financials-tab"
import { PredictionsTab } from "@/components/dashboard/predictions-tab"
import { mockStocks } from "@/lib/mock-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const [selectedStock, setSelectedStock] = useState("AAPL")
  const stock = mockStocks.find((s) => s.symbol === selectedStock) || mockStocks[0]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Stock Dashboard</h1>
            <p className="text-muted-foreground">Search and analyze stocks with AI-powered insights</p>
          </div>

          <div className="mb-8">
            <StockSearch onSelectStock={setSelectedStock} />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {mockStocks.slice(0, 6).map((stock) => (
              <StockCard
                key={stock.symbol}
                stock={stock}
                onSelect={() => setSelectedStock(stock.symbol)}
                isSelected={selectedStock === stock.symbol}
              />
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <StockChart symbol={selectedStock} />

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="glass w-full justify-start">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="news">News & Analysis</TabsTrigger>
                  <TabsTrigger value="financials">Financials</TabsTrigger>
                  <TabsTrigger value="predictions">Predictions (AI)</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-4">
                  <div className="glass rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">{stock.name} Overview</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Open</p>
                        <p className="text-lg font-semibold text-foreground">${stock.open.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">High</p>
                        <p className="text-lg font-semibold text-foreground">${stock.high.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Low</p>
                        <p className="text-lg font-semibold text-foreground">${stock.low.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Volume</p>
                        <p className="text-lg font-semibold text-foreground">{stock.volume}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Market Cap</p>
                        <p className="text-lg font-semibold text-foreground">{stock.marketCap}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Change</p>
                        <p
                          className={`text-lg font-semibold ${stock.change >= 0 ? "text-primary" : "text-destructive"}`}
                        >
                          {stock.change >= 0 ? "+" : ""}${stock.change.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Change %</p>
                        <p
                          className={`text-lg font-semibold ${stock.change >= 0 ? "text-primary" : "text-destructive"}`}
                        >
                          {stock.change >= 0 ? "+" : ""}
                          {stock.changePercent.toFixed(2)}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Current Price</p>
                        <p className="text-lg font-semibold text-foreground">${stock.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="news" className="mt-4">
                  <NewsFeed />
                </TabsContent>

                <TabsContent value="financials" className="mt-4">
                  <FinancialsTab />
                </TabsContent>

                <TabsContent value="predictions" className="mt-4">
                  <PredictionsTab />
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">52 Week High</span>
                    <span className="font-semibold text-foreground">$199.62</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">52 Week Low</span>
                    <span className="font-semibold text-foreground">$124.17</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg Volume</span>
                    <span className="font-semibold text-foreground">58.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Beta</span>
                    <span className="font-semibold text-foreground">1.28</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Your Watchlist</h3>
                <div className="space-y-3">
                  {mockStocks.slice(0, 4).map((s) => (
                    <button
                      key={s.symbol}
                      onClick={() => setSelectedStock(s.symbol)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                        selectedStock === s.symbol ? "bg-primary/10" : "hover:bg-muted/50"
                      }`}
                    >
                      <span className="font-semibold text-foreground">{s.symbol}</span>
                      <span className={s.change >= 0 ? "text-primary" : "text-destructive"}>
                        {s.change >= 0 ? "+" : ""}
                        {s.changePercent.toFixed(2)}%
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
