import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings as SettingsIcon, User, Bell, Globe, Shield } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and application preferences
        </p>
      </div>

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="Raj Kumar" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="raj.farmer@gmail.com" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+91 98765 43210" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="farm">Farm Name</Label>
              <Input id="farm" defaultValue="Green Valley Farms" className="mt-2" />
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button variant="default">Save Changes</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-accent" />
            Notification Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive updates via email</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">SMS Alerts</p>
              <p className="text-sm text-muted-foreground">Get critical alerts via SMS</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Weather Alerts</p>
              <p className="text-sm text-muted-foreground">Daily weather updates</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Market Price Alerts</p>
              <p className="text-sm text-muted-foreground">Notify when prices change significantly</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Task Reminders</p>
              <p className="text-sm text-muted-foreground">Remind about scheduled tasks</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Disease Risk Alerts</p>
              <p className="text-sm text-muted-foreground">Alert when disease risk is high</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Language & Region */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-success" />
            Language & Region
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="language">Preferred Language</Label>
            <Select defaultValue="english">
              <SelectTrigger id="language" className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">हिन्दी (Hindi)</SelectItem>
                <SelectItem value="punjabi">ਪੰਜਾਬੀ (Punjabi)</SelectItem>
                <SelectItem value="tamil">தமிழ் (Tamil)</SelectItem>
                <SelectItem value="telugu">తెలుగు (Telugu)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="timezone">Time Zone</Label>
            <Select defaultValue="ist">
              <SelectTrigger id="timezone" className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ist">IST (GMT+5:30)</SelectItem>
                <SelectItem value="pst">PST (GMT-8:00)</SelectItem>
                <SelectItem value="est">EST (GMT-5:00)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="units">Measurement Units</Label>
            <Select defaultValue="metric">
              <SelectTrigger id="units" className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="metric">Metric (kg, liters, hectares)</SelectItem>
                <SelectItem value="imperial">Imperial (lbs, gallons, acres)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button variant="default" className="mt-4">Save Preferences</Button>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-warning" />
            Privacy & Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Add extra security to your account</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Data Sharing</p>
              <p className="text-sm text-muted-foreground">Share anonymized data for research</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="p-4 border border-border rounded-lg space-y-3">
            <p className="font-medium text-foreground">Change Password</p>
            <div className="space-y-2">
              <Input type="password" placeholder="Current Password" />
              <Input type="password" placeholder="New Password" />
              <Input type="password" placeholder="Confirm New Password" />
            </div>
            <Button variant="outline" size="sm">Update Password</Button>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="text-destructive hover:bg-destructive/10">
              Delete Account
            </Button>
            <Button variant="outline">Export My Data</Button>
          </div>
        </CardContent>
      </Card>

      {/* App Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SettingsIcon className="w-5 h-5 text-secondary" />
            Application Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Dark Mode</p>
              <p className="text-sm text-muted-foreground">Switch to dark theme</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Auto-sync Data</p>
              <p className="text-sm text-muted-foreground">Sync data automatically</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Offline Mode</p>
              <p className="text-sm text-muted-foreground">Cache data for offline access</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
