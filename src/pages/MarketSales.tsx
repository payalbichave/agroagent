import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, Calendar, MapPin } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const priceData = [
  { date: "Jan 1", price: 2650 },
  { date: "Jan 8", price: 2720 },
  { date: "Jan 15", price: 2680 },
  { date: "Jan 22", price: 2780 },
  { date: "Jan 29", price: 2850 },
  { date: "Feb 5", price: 2920 },
  { date: "Feb 12", price: 2890 },
];

export default function MarketSales() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Market & Sales</h1>
        <p className="text-muted-foreground">
          Live mandi prices, market trends, and profit estimates
        </p>
      </div>

      {/* Current Prices */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-l-4 border-l-success">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Wheat Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-foreground">₹2,850</p>
                <p className="text-xs text-muted-foreground mt-1">per quintal</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-success">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">+5.2%</span>
                </div>
                <p className="text-xs text-muted-foreground">vs last week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-accent">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Rice Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-foreground">₹3,420</p>
                <p className="text-xs text-muted-foreground mt-1">per quintal</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-success">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">+2.8%</span>
                </div>
                <p className="text-xs text-muted-foreground">vs last week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-warning">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Vegetables</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-foreground">₹1,850</p>
                <p className="text-xs text-muted-foreground mt-1">avg per quintal</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-destructive">
                  <TrendingDown className="w-4 h-4" />
                  <span className="text-sm font-medium">-1.5%</span>
                </div>
                <p className="text-xs text-muted-foreground">vs last week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Price Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Wheat Price Trend - Last 6 Weeks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis 
                dataKey="date" 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                domain={[2600, 3000]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="hsl(var(--success))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--success))', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Best Sell Window */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-success" />
              Optimal Selling Window
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-foreground">Wheat - Next 7-10 Days</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Market analysis suggests favorable conditions
                  </p>
                </div>
                <Badge variant="default" className="bg-success text-success-foreground">Recommended</Badge>
              </div>
              
              <div className="space-y-2 mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Current Price</span>
                  <span className="font-medium text-foreground">₹2,850/quintal</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Expected Peak</span>
                  <span className="font-medium text-success">₹2,950/quintal</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Potential Gain</span>
                  <span className="font-medium text-success">+3.5%</span>
                </div>
              </div>

              <Button className="w-full mt-4" variant="default">
                Set Price Alert
              </Button>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium text-foreground mb-2">Market Factors:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Demand increasing in nearby markets</li>
                <li>• Limited supply from competing regions</li>
                <li>• Festival season approaching (higher demand)</li>
                <li>• Storage costs remain low for next 2 weeks</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Profit Estimate */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-warning" />
              Profit Estimate - This Season
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Expected Revenue</p>
                <p className="text-2xl font-bold text-foreground">₹12.4L</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Total Costs</p>
                <p className="text-2xl font-bold text-foreground">₹7.8L</p>
              </div>
            </div>

            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <p className="text-sm text-muted-foreground mb-1">Estimated Net Profit</p>
              <p className="text-4xl font-bold text-success">₹4.6L</p>
              <p className="text-sm text-muted-foreground mt-2">
                Based on current market prices and yield projections
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Cost Breakdown:</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Seeds & Planting</span>
                  <span className="font-medium text-foreground">₹1.2L</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Fertilizers</span>
                  <span className="font-medium text-foreground">₹2.8L</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Irrigation</span>
                  <span className="font-medium text-foreground">₹1.5L</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Labor & Others</span>
                  <span className="font-medium text-foreground">₹2.3L</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Nearby Markets */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            Nearby Mandi Prices - Today
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { market: "Ludhiana Mandi", distance: "12 km", wheat: 2850, rice: 3420, trend: "up" },
              { market: "Jalandhar Mandi", distance: "28 km", wheat: 2820, rice: 3450, trend: "up" },
              { market: "Amritsar Mandi", distance: "45 km", wheat: 2880, rice: 3380, trend: "down" },
              { market: "Patiala Mandi", distance: "38 km", wheat: 2795, rice: 3410, trend: "stable" },
            ].map((market, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">{market.market}</p>
                    <p className="text-xs text-muted-foreground">{market.distance} away</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">₹{market.wheat}</p>
                    <p className="text-xs text-muted-foreground">Wheat</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">₹{market.rice}</p>
                    <p className="text-xs text-muted-foreground">Rice</p>
                  </div>
                  {market.trend === "up" && <TrendingUp className="w-4 h-4 text-success" />}
                  {market.trend === "down" && <TrendingDown className="w-4 h-4 text-destructive" />}
                  {market.trend === "stable" && <div className="w-4 h-0.5 bg-muted-foreground" />}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
