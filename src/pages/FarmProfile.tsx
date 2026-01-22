import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Droplets, Thermometer, Wind, Calendar } from "lucide-react";

export default function FarmProfile() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Farm Profile</h1>
        <p className="text-muted-foreground">
          Complete information about your farm and agricultural practices
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Farm Location & Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Farm Name</label>
                <p className="text-lg font-semibold text-foreground mt-1">Green Valley Farms</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Location</label>
                <p className="text-lg font-semibold text-foreground mt-1">Punjab, India</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Total Acreage</label>
                <p className="text-lg font-semibold text-foreground mt-1">45 acres</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Coordinates</label>
                <p className="text-lg font-semibold text-foreground mt-1">30.7333° N, 76.7794° E</p>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-foreground mb-4">Active Crops</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Wheat</p>
                    <p className="text-sm text-muted-foreground">Winter Crop</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">20 acres</p>
                    <Badge variant="secondary" className="mt-1">Zone A, B</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Rice</p>
                    <p className="text-sm text-muted-foreground">Kharif Crop</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">15 acres</p>
                    <Badge variant="secondary" className="mt-1">Zone C</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Vegetables</p>
                    <p className="text-sm text-muted-foreground">Mixed Crops</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">10 acres</p>
                    <Badge variant="secondary" className="mt-1">Zone D</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-accent" />
              Irrigation System
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Primary Method</label>
              <p className="text-lg font-semibold text-foreground mt-1">Drip Irrigation</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Water Source</label>
              <p className="text-lg font-semibold text-foreground mt-1">Borewell + Canal</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Coverage</label>
              <p className="text-lg font-semibold text-foreground mt-1">100%</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Automation</label>
              <Badge variant="default">Partially Automated</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="w-5 h-5 text-secondary" />
            Soil Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Soil Type & Composition</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Soil Type</span>
                  <span className="text-sm font-medium text-foreground">Alluvial</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">pH Level</span>
                  <span className="text-sm font-medium text-foreground">6.8 (Neutral)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Organic Matter</span>
                  <span className="text-sm font-medium text-foreground">3.2%</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Nutrient Levels</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Nitrogen (N)</span>
                  <Badge variant="secondary">Medium</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Phosphorus (P)</span>
                  <Badge variant="default">High</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Potassium (K)</span>
                  <Badge variant="secondary">Medium</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Recent Tests</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Last Test: 15 Jan 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Next Test: 15 Apr 2025</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Farming History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 border border-border rounded-lg">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground">2024 Rabi Season</h4>
                  <Badge>Completed</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Wheat cultivation across 20 acres. Yield: 2.8 tons/acre
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">Wheat</Badge>
                  <Badge variant="outline">Organic Fertilizer</Badge>
                  <Badge variant="outline">Drip Irrigation</Badge>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-border rounded-lg">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-success" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground">2024 Kharif Season</h4>
                  <Badge variant="default">Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Rice cultivation in progress. Expected yield: 3.2 tons/acre
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">Rice</Badge>
                  <Badge variant="outline">Mixed Fertilizer</Badge>
                  <Badge variant="outline">Flood Irrigation</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
