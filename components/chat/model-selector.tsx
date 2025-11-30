"use client"
import { ChevronDown, Sparkles, Zap, Brain } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const models = [
  { id: "gemini", name: "Gemini", icon: Sparkles, description: "Google's most capable AI" },
  { id: "grok", name: "Grok", icon: Zap, description: "Real-time market insights" },
  { id: "openai", name: "OpenAI", icon: Brain, description: "GPT-4 powered analysis" },
]

interface ModelSelectorProps {
  selectedModel: string
  onSelectModel: (model: string) => void
}

export function ModelSelector({ selectedModel, onSelectModel }: ModelSelectorProps) {
  const currentModel = models.find((m) => m.id === selectedModel) || models[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="glass border-border gap-2 bg-transparent">
          <currentModel.icon className="w-4 h-4 text-primary" />
          <span>{currentModel.name}</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="glass border-border w-56">
        {models.map((model) => (
          <DropdownMenuItem
            key={model.id}
            onClick={() => onSelectModel(model.id)}
            className={`flex items-center gap-3 p-3 cursor-pointer ${
              selectedModel === model.id ? "bg-primary/10" : ""
            }`}
          >
            <model.icon className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium text-foreground">{model.name}</p>
              <p className="text-xs text-muted-foreground">{model.description}</p>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
