import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Upload, AlertCircle, CheckCircle2, Clock } from "lucide-react";

export default function VisionDiagnosis() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Vision & Diagnosis</h1>
        <p className="text-muted-foreground">
          Upload plant images for AI-powered disease detection and treatment recommendations
        </p>
      </div>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-primary" />
            Upload Plant Images
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Drop images here or click to upload
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Supports JPG, PNG up to 10MB. Best results with clear, close-up leaf images.
            </p>
            <Button variant="default">Select Images</Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Diagnoses */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Diagnoses</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Diagnosis 1 - Disease Detected */}
          <div className="border border-destructive/20 rounded-lg p-4 bg-destructive/5">
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-destructive/20 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-muted-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Tomato Leaf - Zone D</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                  </div>
                  <Badge variant="destructive">Disease Detected</Badge>
                </div>
                
                <div className="space-y-3 mt-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Diagnosis:</p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-destructive">Early Blight (Alternaria solani)</span> - 94% confidence
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Symptoms Identified:</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>Dark brown concentric rings on older leaves</li>
                      <li>Yellowing around lesions</li>
                      <li>Premature leaf drop indicators</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <p className="text-sm font-medium text-foreground mb-2">Recommended Treatment:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li><span className="font-medium">1.</span> Remove and destroy infected leaves immediately</li>
                      <li><span className="font-medium">2.</span> Apply copper-based fungicide (Blitox 50 WP) @ 3g/liter</li>
                      <li><span className="font-medium">3.</span> Repeat spray after 7 days if symptoms persist</li>
                      <li><span className="font-medium">4.</span> Improve air circulation, avoid overhead irrigation</li>
                    </ul>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="destructive">Mark as Treated</Button>
                    <Button size="sm" variant="outline">Download Report</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnosis 2 - Healthy */}
          <div className="border border-success/20 rounded-lg p-4 bg-success/5">
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-success/20 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-muted-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Wheat - Zone A</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">1 day ago</span>
                    </div>
                  </div>
                  <Badge variant="default" className="bg-success text-success-foreground">Healthy</Badge>
                </div>
                
                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    <p className="text-sm text-muted-foreground">
                      No diseases or pest damage detected. Plant shows healthy growth with vibrant green color.
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">
                    Continue regular monitoring and maintain current care practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnosis 3 - Nutrient Deficiency */}
          <div className="border border-warning/20 rounded-lg p-4 bg-warning/5">
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-warning/20 to-secondary/20 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-muted-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Rice - Zone C</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">3 days ago</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-warning text-warning">Attention Needed</Badge>
                </div>
                
                <div className="space-y-3 mt-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Diagnosis:</p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-warning">Nitrogen Deficiency</span> - 87% confidence
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Symptoms:</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>Yellowing of older leaves (chlorosis)</li>
                      <li>Stunted growth compared to adjacent plants</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <p className="text-sm font-medium text-foreground mb-2">Recommended Action:</p>
                    <p className="text-sm text-muted-foreground">
                      Apply urea @ 50kg/hectare or ammonium sulfate @ 75kg/hectare. Monitor plant response after 7-10 days.
                    </p>
                  </div>
                  
                  <Button size="sm" variant="outline">Schedule Treatment</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Total Scans</p>
              <p className="text-3xl font-bold text-foreground">247</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Diseases Detected</p>
              <p className="text-3xl font-bold text-destructive">12</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Healthy Scans</p>
              <p className="text-3xl font-bold text-success">198</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Avg. Confidence</p>
              <p className="text-3xl font-bold text-foreground">91%</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
