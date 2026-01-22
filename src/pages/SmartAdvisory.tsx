import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Lightbulb, RefreshCw, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function SmartAdvisory() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Smart Advisory</h1>
          <p className="text-muted-foreground">
            AI-powered recommendations tailored for your farm
          </p>
        </div>
        <Button variant="default" className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Replan
        </Button>
      </div>

      {/* Priority Recommendations */}
      <Card className="border-l-4 border-l-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            High Priority Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/20">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  Immediate Pest Control Required
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aphid infestation detected in Zone B4. Apply neem-based pesticide within 24 hours to prevent spread.
                </p>
              </div>
              <Badge variant="destructive">Urgent</Badge>
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-sm font-medium text-foreground">Reasoning:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Visual detection shows 15% leaf damage in affected area</li>
                <li>Weather conditions (warm & humid) favor rapid pest multiplication</li>
                <li>Adjacent zones at high risk if not controlled immediately</li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-full bg-muted rounded-full h-2 w-32">
                  <div className="bg-destructive h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <span className="text-sm font-medium text-foreground">95% Confidence</span>
              </div>
              <Button variant="destructive" size="sm">Take Action</Button>
            </div>
          </div>

          <div className="p-4 bg-warning/5 rounded-lg border border-warning/20">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  Nitrogen Supplementation Needed
                </h3>
                <p className="text-sm text-muted-foreground">
                  Soil analysis shows declining nitrogen levels in Zone C. Apply 45kg/hectare of nitrogen fertilizer.
                </p>
              </div>
              <Badge variant="outline" className="border-warning text-warning">High</Badge>
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-sm font-medium text-foreground">Reasoning:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Last soil test (5 days ago) shows N levels at 180 ppm (below optimal 250 ppm)</li>
                <li>Wheat crop is in tillering stage requiring high nitrogen</li>
                <li>Delayed application may reduce yield by 12-15%</li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-full bg-muted rounded-full h-2 w-32">
                  <div className="bg-warning h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
                <span className="text-sm font-medium text-foreground">88% Confidence</span>
              </div>
              <Button variant="outline" size="sm">Schedule Task</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medium Priority */}
      <Card className="border-l-4 border-l-accent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-accent" />
            Recommended Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  Optimize Irrigation Schedule
                </h3>
                <p className="text-sm text-muted-foreground">
                  Forecast shows 40% rain probability in next 48 hours. Delay Zone A irrigation by 2 days to conserve water.
                </p>
              </div>
              <Badge variant="secondary">Medium</Badge>
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-sm font-medium text-foreground">Reasoning:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Current soil moisture at 68% (adequate for 2 more days)</li>
                <li>Weather model predicts 15-20mm rainfall on Day 3</li>
                <li>Can save ~5,000 liters of water with minimal crop stress</li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-full bg-muted rounded-full h-2 w-32">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '76%' }}></div>
                </div>
                <span className="text-sm font-medium text-foreground">76% Confidence</span>
              </div>
              <Button variant="outline" size="sm">Apply Changes</Button>
            </div>
          </div>

          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  Early Disease Scouting
                </h3>
                <p className="text-sm text-muted-foreground">
                  Current weather favors fungal growth. Inspect tomato plants in Zone D for early blight symptoms.
                </p>
              </div>
              <Badge variant="secondary">Medium</Badge>
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-sm font-medium text-foreground">Reasoning:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Temperature 25-30°C with high humidity ideal for Alternaria fungus</li>
                <li>Historical data shows 30% disease occurrence in similar conditions</li>
                <li>Early detection can prevent 80% crop loss</li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-full bg-muted rounded-full h-2 w-32">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '71%' }}></div>
                </div>
                <span className="text-sm font-medium text-foreground">71% Confidence</span>
              </div>
              <Button variant="outline" size="sm">Add to Tasks</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Task Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-success" />
            Today's Action Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { task: "Apply neem-based pesticide in Zone B4", priority: "High", completed: false },
              { task: "Schedule nitrogen fertilizer delivery", priority: "High", completed: false },
              { task: "Review weather forecast for next week", priority: "Medium", completed: true },
              { task: "Inspect irrigation system in Zone A", priority: "Medium", completed: false },
              { task: "Scout tomato plants for disease symptoms", priority: "Medium", completed: false },
              { task: "Update harvest schedule based on growth rate", priority: "Low", completed: true },
              { task: "Check soil moisture levels in all zones", priority: "Low", completed: false },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <Checkbox checked={item.completed} />
                <div className="flex-1">
                  <p className={`text-sm font-medium ${item.completed ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                    {item.task}
                  </p>
                </div>
                <Badge
                  variant={
                    item.priority === "High"
                      ? "destructive"
                      : item.priority === "Medium"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {item.priority}
                </Badge>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="text-sm text-muted-foreground">Task Completion</p>
              <p className="text-2xl font-bold text-foreground">2 of 7</p>
            </div>
            <div className="w-32 bg-muted rounded-full h-3">
              <div className="bg-primary h-3 rounded-full transition-all" style={{ width: '29%' }}></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
