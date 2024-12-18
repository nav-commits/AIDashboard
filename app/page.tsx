"use client";

import { MetricsGrid } from "@/components/dashboard/metrics-grid";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Brain, Database, GitBranch, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-purple-500" />
          <h1 className="text-4xl font-bold tracking-tight">NeuroPulse</h1>
        </div>
        <p className="text-muted-foreground">
          Advanced AI monitoring and analytics platform
        </p>
      </div>
      <MetricsGrid />
      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance" className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Performance
          </TabsTrigger>
          <TabsTrigger value="models" className="flex items-center gap-2">
            <GitBranch className="w-4 h-4" />
            Models
          </TabsTrigger>
          <TabsTrigger value="data" className="flex items-center gap-2">
            <Database className="w-4 h-4" />
            Data
          </TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <PerformanceChart />
        </TabsContent>

        <TabsContent value="models">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Active Models</h3>
            <div className="grid gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-4">
                    <Brain className="w-6 h-6 text-purple-500" />
                    <div>
                      <h4 className="font-medium">Model {i}</h4>
                      <p className="text-sm text-muted-foreground">Last updated 2h ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">95.2% Accuracy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">Active</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="data">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Dataset Statistics</h3>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4">
                  <h4 className="text-sm font-medium text-muted-foreground">Total Samples</h4>
                  <p className="text-2xl font-bold">1.2M</p>
                </Card>
                <Card className="p-4">
                  <h4 className="text-sm font-medium text-muted-foreground">Training Split</h4>
                  <p className="text-2xl font-bold">980K</p>
                </Card>
                <Card className="p-4">
                  <h4 className="text-sm font-medium text-muted-foreground">Validation Split</h4>
                  <p className="text-2xl font-bold">220K</p>
                </Card>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}