import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Plus, Bell } from "lucide-react";

export default function Scheduler() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Task Scheduler</h1>
          <p className="text-muted-foreground">
            Plan and manage your farming activities
          </p>
        </div>
        <Button variant="default" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Task
        </Button>
      </div>

      {/* Calendar View */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              February 2025
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Today</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}
            
            {/* Calendar days */}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 2; // Start from -2 to show previous month days
              const isToday = day === 15;
              const hasTasks = [8, 15, 18, 22, 25].includes(day);
              
              return (
                <div
                  key={i}
                  className={`
                    min-h-20 p-2 border border-border rounded-lg
                    ${day < 1 || day > 28 ? 'bg-muted/30 text-muted-foreground' : 'bg-card'}
                    ${isToday ? 'ring-2 ring-primary' : ''}
                    ${hasTasks ? 'cursor-pointer hover:bg-muted/50' : ''}
                    transition-colors
                  `}
                >
                  {day > 0 && day <= 28 && (
                    <>
                      <div className={`text-sm font-medium ${isToday ? 'text-primary' : 'text-foreground'}`}>
                        {day}
                      </div>
                      {hasTasks && (
                        <div className="mt-1 space-y-1">
                          <div className="w-full h-1 bg-primary rounded" />
                          {day === 15 && <div className="w-full h-1 bg-destructive rounded" />}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Today's Tasks */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Tasks - Feb 15</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { 
              task: "Apply pesticide in Zone B4",
              time: "06:00 AM - 08:00 AM",
              priority: "High",
              zone: "Zone B4",
              completed: false,
              reminder: true
            },
            { 
              task: "Irrigation - Zone A",
              time: "06:00 PM - 07:00 PM",
              priority: "High",
              zone: "Zone A",
              completed: false,
              reminder: true
            },
            { 
              task: "Soil moisture check - All zones",
              time: "09:00 AM",
              priority: "Medium",
              zone: "All Zones",
              completed: true,
              reminder: false
            },
            { 
              task: "Review market prices",
              time: "10:00 AM",
              priority: "Low",
              zone: "Office",
              completed: true,
              reminder: false
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`
                flex items-start gap-4 p-4 rounded-lg border border-border
                ${item.completed ? 'bg-muted/30' : 'bg-card'}
                hover:bg-muted/50 transition-colors
              `}
            >
              <Checkbox checked={item.completed} className="mt-1" />
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className={`font-medium ${item.completed ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                      {item.task}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.reminder && <Bell className="w-4 h-4 text-accent" />}
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
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">{item.zone}</Badge>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Tasks */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Tasks - Next 7 Days</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { date: "Feb 18", tasks: ["Fertilizer application - Zone C", "Equipment maintenance"] },
            { date: "Feb 22", tasks: ["Harvest readiness assessment", "Quality testing"] },
            { date: "Feb 25", tasks: ["Soil testing - Zone D", "Pest scouting"] },
          ].map((day, idx) => (
            <div key={idx} className="border-l-4 border-l-primary pl-4">
              <h3 className="font-semibold text-foreground mb-2">{day.date}</h3>
              <ul className="space-y-1">
                {day.tasks.map((task, taskIdx) => (
                  <li key={taskIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Auto-update Options */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-accent" />
            Smart Reminders & Auto-updates
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Weather-based adjustments</p>
              <p className="text-sm text-muted-foreground">Auto-reschedule irrigation based on rain forecast</p>
            </div>
            <Checkbox defaultChecked />
          </div>
          
          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Market alerts</p>
              <p className="text-sm text-muted-foreground">Notify when crop prices reach target levels</p>
            </div>
            <Checkbox defaultChecked />
          </div>
          
          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Disease risk notifications</p>
              <p className="text-sm text-muted-foreground">Alert when conditions favor pest/disease outbreaks</p>
            </div>
            <Checkbox defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
