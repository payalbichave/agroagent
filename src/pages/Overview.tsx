import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  CheckCircle2,
  Cloud,
  Droplets,
  Sun,
  ThermometerSun,
  TrendingUp,
  Calendar,
  Leaf,
  DollarSign,
} from "lucide-react";
import farmHero from "@/assets/farm-hero.jpg";

export default function Overview() {
  return (
    <div className="space-y-6 p-6">
      {/* Hero Section */}
      <div className="relative h-48 rounded-2xl overflow-hidden">
        <img
          src={farmHero}
          alt="Farm landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
          <div className="p-8 text-primary-foreground">
            <h1 className="text-4xl font-bold mb-2">Welcome back, Raj!</h1>
            <p className="text-lg opacity-90">
              Your farm is looking healthy. Here's today's overview.
            </p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Today's Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">8</div>
            <p className="text-xs text-muted-foreground mt-1">
              3 completed, 5 pending
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-accent">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <ThermometerSun className="w-4 h-4" />
              Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground flex items-center gap-2">
              28°C
              <Sun className="w-8 h-8 text-success" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Sunny, Humidity 65%
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-success">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              Crop Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success">Good</div>
            <p className="text-xs text-muted-foreground mt-1">
              85% healthy zones
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-warning">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Market Price
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">₹2,850</div>
            <p className="text-xs text-success mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +5.2% from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Alerts & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-warning" />
              Active Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-sm text-foreground">
                  Pest Risk Detected
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Section B4 shows signs of aphid infestation. Immediate action recommended.
                </p>
                <Button size="sm" variant="destructive" className="mt-2">
                  View Details
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
              <Droplets className="w-5 h-5 text-accent mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-sm text-foreground">
                  Irrigation Schedule
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Zone A needs watering today at 6:00 PM (predicted dry spell).
                </p>
                <Button size="sm" variant="outline" className="mt-2">
                  Schedule Now
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-sm text-foreground">
                  Optimal Harvest Window
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Your wheat crop will be ready for harvest in 5-7 days. Market prices are favorable.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-success" />
              Today's Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium text-sm">Apply Nitrogen Fertilizer</span>
                </div>
                <Badge variant="outline" className="text-xs">High Priority</Badge>
              </div>
              <p className="text-xs text-muted-foreground pl-4">
                Soil analysis shows nitrogen deficiency in Zone C. Apply 45kg/hectare.
              </p>
              <div className="flex items-center gap-2 mt-2 pl-4">
                <Badge variant="secondary" className="text-xs">Zone C</Badge>
                <span className="text-xs text-muted-foreground">Confidence: 92%</span>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-medium text-sm">Adjust Irrigation Schedule</span>
                </div>
                <Badge variant="outline" className="text-xs">Medium</Badge>
              </div>
              <p className="text-xs text-muted-foreground pl-4">
                Weather forecast shows 30% rain chance tomorrow. Delay watering by 1 day.
              </p>
              <div className="flex items-center gap-2 mt-2 pl-4">
                <Badge variant="secondary" className="text-xs">All Zones</Badge>
                <span className="text-xs text-muted-foreground">Confidence: 78%</span>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span className="font-medium text-sm">Scout for Early Blight</span>
                </div>
                <Badge variant="outline" className="text-xs">Low</Badge>
              </div>
              <p className="text-xs text-muted-foreground pl-4">
                Current weather conditions favor fungal growth. Visual inspection recommended.
              </p>
              <div className="flex items-center gap-2 mt-2 pl-4">
                <Badge variant="secondary" className="text-xs">Zone A, B</Badge>
                <span className="text-xs text-muted-foreground">Confidence: 65%</span>
              </div>
            </div>

            <Button className="w-full mt-4" variant="default">
              View All Recommendations
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Farm Snapshot</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Acreage</p>
              <p className="text-2xl font-bold text-foreground">45 acres</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Active Crops</p>
              <p className="text-2xl font-bold text-foreground">3 types</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Soil Moisture</p>
              <p className="text-2xl font-bold text-accent">72%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Expected Yield</p>
              <p className="text-2xl font-bold text-success">8.5 tons</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
