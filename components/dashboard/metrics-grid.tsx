"use client";

import { Card } from "@/components/ui/card";
import { Brain, Cpu, Network, Zap } from "lucide-react";

const metrics = [
  {
    title: "Model Accuracy",
    value: "94.3%",
    change: "+2.1%",
    icon: Brain,
    color: "text-blue-500"
  },
  {
    title: "Inference Speed",
    value: "23ms",
    change: "-5ms",
    icon: Zap,
    color: "text-yellow-500"
  },
  {
    title: "Active Models",
    value: "12",
    change: "+3",
    icon: Network,
    color: "text-purple-500"
  },
  {
    title: "GPU Utilization",
    value: "78%",
    change: "+5%",
    icon: Cpu,
    color: "text-green-500"
  },
];

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full bg-background ${metric.color} bg-opacity-10`}>
              <metric.icon className={`w-6 h-6 ${metric.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold">{metric.value}</h3>
                <span className={`text-sm ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.change}
                </span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}