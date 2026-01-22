import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, DollarSign, Droplets } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const yieldData = [
  { year: "2020", wheat: 2.5, rice: 2.8 },
  { year: "2021", wheat: 2.7, rice: 3.0 },
  { year: "2022", wheat: 2.6, rice: 2.9 },
  { year: "2023", wheat: 2.9, rice: 3.2 },
  { year: "2024", wheat: 3.1, rice: 3.4 },
];

const costData = [
  { category: "Seeds", cost: 120000, revenue: 0 },
  { category: "Fertilizers", cost: 280000, revenue: 0 },
  { category: "Irrigation", cost: 150000, revenue: 0 },
  { category: "Labor", cost: 230000, revenue: 0 },
  { category: "Sales", cost: 0, revenue: 1240000 },
];

const weatherImpact = [
  { month: "Nov", rainfall: 15, yield: 2.8 },
  { month: "Dec", rainfall: 25, yield: 2.9 },
  { month: "Jan", rainfall: 20, yield: 3.0 },
  { month: "Feb", rainfall: 10, yield: 3.1 },
  { month: "Mar", rainfall: 30, yield: 2.9 },
  { month: "Apr", rainfall: 40, yield: 2.7 },
];

export default function Insights() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Insights & Reports</h1>
        <p className="text-muted-foreground">
          Analyze your farm's performance with data-driven insights
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Avg Yield Growth</p>
                <p className="text-2xl font-bold text-success">+12%</p>
                <p className="text-xs text-muted-foreground mt-1">vs last year</p>
              </div>
              <TrendingUp className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Profit Margin</p>
                <p className="text-2xl font-bold text-foreground">37%</p>
                <p className="text-xs text-muted-foreground mt-1">current season</p>
              </div>
              <DollarSign className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Water Efficiency</p>
                <p className="text-2xl font-bold text-accent">89%</p>
                <p className="text-xs text-muted-foreground mt-1">optimal usage</p>
              </div>
              <Droplets className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Cost Reduction</p>
                <p className="text-2xl font-bold text-foreground">8%</p>
                <p className="text-xs text-muted-foreground mt-1">vs last year</p>
              </div>
              <BarChart3 className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Yield Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Yield Trends - Last 5 Years
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={yieldData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis
                dataKey="year"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                label={{ value: "Yield (tons/acre)", angle: -90, position: "insideLeft" }}
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="wheat"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                name="Wheat"
                dot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="rice"
                stroke="hsl(var(--accent))"
                strokeWidth={3}
                name="Rice"
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
          
          <div className="mt-4 p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Analysis:</span> Consistent yield improvement over 5 years. 
              Wheat yield increased by 24% and rice by 21%. Implementation of drip irrigation and 
              soil health management contributing to steady growth.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Cost-Benefit Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-success" />
            Cost-Benefit Analysis - Current Season
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={costData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis
                dataKey="category"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                label={{ value: "Amount (₹)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="cost" fill="hsl(var(--destructive))" name="Cost" />
              <Bar dataKey="revenue" fill="hsl(var(--success))" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <p className="text-sm text-muted-foreground mb-1">Total Investment</p>
              <p className="text-3xl font-bold text-foreground">₹7.8L</p>
            </div>
            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <p className="text-sm text-muted-foreground mb-1">Expected Return</p>
              <p className="text-3xl font-bold text-success">₹12.4L</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weather Impact */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-accent" />
            Weather Impact on Yield
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={weatherImpact}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis
                dataKey="month"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                yAxisId="left"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                label={{ value: "Rainfall (mm)", angle: -90, position: "insideLeft" }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                label={{ value: "Yield (tons/acre)", angle: 90, position: "insideRight" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="rainfall"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                name="Rainfall (mm)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="yield"
                stroke="hsl(var(--success))"
                strokeWidth={2}
                name="Yield (tons/acre)"
              />
            </LineChart>
          </ResponsiveContainer>
          
          <div className="mt-4 p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Key Insight:</span> Optimal rainfall range is 15-25mm per month. 
              Excessive rainfall (&gt;30mm) in late season correlates with reduced yield due to lodging and 
              fungal diseases. Irrigation scheduling critical during dry spells.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Recommendations for Next Season</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              title: "Increase Rice Allocation",
              desc: "Market analysis and historical yield data suggest 15% higher profitability for rice next season.",
              impact: "High",
            },
            {
              title: "Optimize Fertilizer Mix",
              desc: "Current NPK ratio analysis shows opportunity to reduce costs by 12% while maintaining yield.",
              impact: "Medium",
            },
            {
              title: "Early Sowing Schedule",
              desc: "Weather patterns suggest earlier optimal window. Consider advancing sowing by 7 days.",
              impact: "Medium",
            },
          ].map((rec, idx) => (
            <div key={idx} className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-foreground">{rec.title}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    rec.impact === "High"
                      ? "bg-success/20 text-success"
                      : "bg-warning/20 text-warning"
                  }`}
                >
                  {rec.impact} Impact
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{rec.desc}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
