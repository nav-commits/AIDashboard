"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { name: 'Jan', accuracy: 85, latency: 120, throughput: 95 },
  { name: 'Feb', accuracy: 88, latency: 115, throughput: 97 },
  { name: 'Mar', accuracy: 87, latency: 118, throughput: 94 },
  { name: 'Apr', accuracy: 89, latency: 110, throughput: 98 },
  { name: 'May', accuracy: 91, latency: 105, throughput: 99 },
  { name: 'Jun', accuracy: 90, latency: 108, throughput: 97 },
];

export function PerformanceChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Performance Metrics Over Time</h3>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="accuracy" 
              stroke="hsl(var(--chart-1))" 
              strokeWidth={2} 
            />
            <Line 
              type="monotone" 
              dataKey="latency" 
              stroke="hsl(var(--chart-2))" 
              strokeWidth={2} 
            />
            <Line 
              type="monotone" 
              dataKey="throughput" 
              stroke="hsl(var(--chart-3))" 
              strokeWidth={2} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}