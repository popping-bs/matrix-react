import { Activity, AlertTriangle, BarChart3, Download, Search, SlidersHorizontal } from "lucide-react";

import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const summaryCards = [
  {
    title: "Selected Lots",
    value: "1,284",
    description: "Filtered across active lines and process windows.",
    icon: Activity,
  },
  {
    title: "Anomaly Candidates",
    value: "37",
    description: "Abnormal sensor patterns requiring engineering review.",
    icon: AlertTriangle,
  },
  {
    title: "Yield Gap",
    value: "-1.8%",
    description: "Compared with the previous rolling 7-day baseline.",
    icon: BarChart3,
  },
];

const filters = [
  { label: "Line", value: "LINE-02, LINE-05" },
  { label: "Equipment", value: "ETCH-14, CVD-07" },
  { label: "Time Range", value: "Last 24 hours" },
  { label: "Process Step", value: "Etch / Deposition" },
];

const analysisRows = [
  {
    lot: "LOT-A1023",
    line: "LINE-02",
    equipment: "ETCH-14",
    step: "Etch",
    yield: "97.8%",
    status: "Stable",
  },
  {
    lot: "LOT-A1028",
    line: "LINE-05",
    equipment: "CVD-07",
    step: "Deposition",
    yield: "95.9%",
    status: "Monitor",
  },
  {
    lot: "LOT-B2041",
    line: "LINE-02",
    equipment: "ETCH-14",
    step: "Etch",
    yield: "93.7%",
    status: "Alert",
  },
  {
    lot: "LOT-B2048",
    line: "LINE-03",
    equipment: "CMP-03",
    step: "Polish",
    yield: "96.8%",
    status: "Stable",
  },
];

const trendBars = [62, 74, 68, 81, 77, 84, 71];
const distributionBars = [28, 42, 64, 82, 60, 36, 18];

function statusTone(status: string) {
  if (status === "Alert") {
    return "bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-200";
  }

  if (status === "Monitor") {
    return "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200";
  }

  return "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200";
}

export function AnalysisPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analysis"
        description="Prototype workspace for process filtering, result inspection, and chart-based engineering review."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <Card key={card.title}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div className="space-y-1">
                  <CardTitle className="text-base">{card.title}</CardTitle>
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

      <Card>
        <CardHeader className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-1">
            <CardTitle>Search Filters</CardTitle>
            <CardDescription>
              Line, equipment, and time conditions are grouped here so the analysis flow stays consistent.
            </CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Save Preset
            </Button>
            <Button size="sm">
              <Search className="mr-2 h-4 w-4" />
              Run Analysis
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {filters.map((filter) => (
              <div key={filter.label} className="rounded-xl border bg-slate-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {filter.label}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-800">{filter.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <Card>
          <CardHeader className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-1">
              <CardTitle>Result Table</CardTitle>
              <CardDescription>
                Prototype row layout for filtered lots, process step, and yield status.
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-xl border">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-slate-50 text-left text-xs uppercase tracking-[0.14em] text-slate-500">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Lot ID</th>
                      <th className="px-4 py-3 font-semibold">Line</th>
                      <th className="px-4 py-3 font-semibold">Equipment</th>
                      <th className="px-4 py-3 font-semibold">Step</th>
                      <th className="px-4 py-3 font-semibold">Yield</th>
                      <th className="px-4 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {analysisRows.map((row) => (
                      <tr key={row.lot} className="hover:bg-slate-50/80">
                        <td className="px-4 py-3 font-medium text-slate-900">{row.lot}</td>
                        <td className="px-4 py-3 text-slate-600">{row.line}</td>
                        <td className="px-4 py-3 text-slate-600">{row.equipment}</td>
                        <td className="px-4 py-3 text-slate-600">{row.step}</td>
                        <td className="px-4 py-3 text-slate-900">{row.yield}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusTone(row.status)}`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Yield Trend</CardTitle>
              <CardDescription>
                Placeholder card showing how time-series charts can sit in a compact side panel.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-52 items-end gap-3 rounded-xl border bg-slate-50/70 p-4">
                {trendBars.map((value, index) => (
                  <div key={index} className="flex flex-1 flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-md bg-slate-900/85"
                      style={{ height: `${value}%` }}
                    />
                    <span className="text-xs text-slate-500">D{index + 1}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Defect Distribution</CardTitle>
              <CardDescription>
                Bucketed chart area for anomaly concentration or sensor deviation comparison.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 rounded-xl border bg-slate-50/70 p-4">
                {distributionBars.map((value, index) => (
                  <div key={index} className="grid grid-cols-[56px_1fr_48px] items-center gap-3">
                    <span className="text-xs font-medium text-slate-500">BIN {index + 1}</span>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-sky-700"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                    <span className="text-right text-xs text-slate-600">{value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
