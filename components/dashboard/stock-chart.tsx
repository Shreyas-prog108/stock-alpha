"use client"

import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { mockChartData } from "@/lib/mock-data"

interface StockChartProps {
  symbol: string
}

export function StockChart({ symbol }: StockChartProps) {
  return (
    <div className="glass rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">{symbol} Price History</h3>
        <div className="flex gap-2">
          {["1D", "1W", "1M", "3M", "1Y"].map((period) => (
            <button
              key={period}
              className="px-3 py-1 text-xs rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      <ChartContainer
        config={{
          price: {
            label: "Price",
            color: "oklch(0.75 0.18 160)",
          },
        }}
        className="h-[300px] w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.75 0.18 160)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="oklch(0.75 0.18 160)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.01 260)" />
            <XAxis dataKey="date" stroke="oklch(0.65 0.01 260)" fontSize={12} />
            <YAxis stroke="oklch(0.65 0.01 260)" fontSize={12} domain={["dataMin - 5", "dataMax + 5"]} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="oklch(0.75 0.18 160)"
              fillOpacity={1}
              fill="url(#colorPrice)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
