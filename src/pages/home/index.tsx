import { Activity, Factory, ShieldCheck } from "lucide-react";

import { PageHeader } from "@/components/common/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const summaryCards = [
  {
    title: "Line Availability",
    value: "98.2%",
    description: "8 lines are running within normal operating range.",
    icon: Factory,
  },
  {
    title: "Active Alerts",
    value: "12",
    description: "3 critical alerts require engineering review.",
    icon: ShieldCheck,
  },
  {
    title: "Daily Throughput",
    value: "24.8K",
    description: "Processed wafers across all active lines today.",
    icon: Activity,
  },
];

export function HomePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Home"
        description="Operational snapshot for fab lines, equipment health, and current process activity."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <Card key={card.title}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div className="space-y-1">
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </div>
                <div className="rounded-lg bg-slate-100 p-2">
                  <Icon className="h-5 w-5 text-slate-700" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold tracking-tight text-slate-900">{card.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </div>
  );
}
