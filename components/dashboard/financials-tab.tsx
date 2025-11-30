"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { mockFinancials } from "@/lib/mock-data"

export function FinancialsTab() {
  return (
    <div className="space-y-6">
      <div className="glass rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quarterly Revenue (Billions)</h3>
        <ChartContainer
          config={{
            value: {
              label: "Revenue",
              color: "oklch(0.75 0.18 160)",
            },
          }}
          className="h-[250px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockFinancials.revenue} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.01 260)" />
              <XAxis dataKey="quarter" stroke="oklch(0.65 0.01 260)" fontSize={12} />
              <YAxis stroke="oklch(0.65 0.01 260)" fontSize={12} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="oklch(0.75 0.18 160)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      <div className="glass rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Earnings Per Share (EPS)</h3>
        <ChartContainer
          config={{
            value: {
              label: "EPS",
              color: "oklch(0.55 0.15 250)",
            },
          }}
          className="h-[250px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockFinancials.earnings} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.01 260)" />
              <XAxis dataKey="quarter" stroke="oklch(0.65 0.01 260)" fontSize={12} />
              <YAxis stroke="oklch(0.65 0.01 260)" fontSize={12} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="oklch(0.55 0.15 250)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "P/E Ratio", value: "28.5" },
          { label: "EPS (TTM)", value: "$6.13" },
          { label: "Dividend Yield", value: "0.51%" },
          { label: "52W High", value: "$199.62" },
        ].map((metric) => (
          <div key={metric.label} className="glass rounded-xl p-4">
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="text-xl font-bold text-foreground">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
