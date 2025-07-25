"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";

export default function ShowcasePage() {
  const [checked, setChecked] = useState(false);
  const [progress, setProgress] = useState(50);
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 space-y-12">
      <h1 className="text-3xl font-bold mb-8">UI Components Showcase</h1>

      {/* Button */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Button</h2>
        <div className="flex gap-2 flex-wrap">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Input */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Input</h2>
        <Input placeholder="Type something..." className="max-w-xs" />
      </section>

      {/* Card */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Card</h2>
        <Card className="max-w-xs">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>This is a card content.</CardContent>
        </Card>
      </section>

      {/* Table */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Table</h2>
        <div className="overflow-x-auto">
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>

      {/* Tabs */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Tabs</h2>
        <Tabs defaultValue="account" className="w-[300px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Account tab content</TabsContent>
          <TabsContent value="password">Password tab content</TabsContent>
        </Tabs>
      </section>

      {/* Alert */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Alert</h2>
        <Alert>
          <AlertTitle>Alert Title</AlertTitle>
          This is an alert message.
        </Alert>
      </section>

      {/* Badge */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Badge</h2>
        <Badge>Default</Badge>
      </section>

      {/* Checkbox */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Checkbox</h2>
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        <span className="ml-2">{checked ? "Checked" : "Unchecked"}</span>
      </section>

      {/* Dialog */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
            </DialogHeader>
            This is a dialog content.
          </DialogContent>
        </Dialog>
      </section>

      {/* DropdownMenu */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Dropdown Menu</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      {/* Progress */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Progress</h2>
        <Progress value={progress} className="w-56" />
        <div className="flex gap-2 mt-2">
          <Button size="sm" onClick={() => setProgress((p) => Math.max(0, p - 10))}>-</Button>
          <Button size="sm" onClick={() => setProgress((p) => Math.min(100, p + 10))}>+</Button>
          <span>{progress}%</span>
        </div>
      </section>

      {/* Switch */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Switch</h2>
        <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
        <span className="ml-2">{switchOn ? "On" : "Off"}</span>
      </section>

      {/* Tooltip */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Tooltip</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>Tooltip content</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </section>
    </div>
  );
} 