"use client"

import { Switch } from "@/components/ui/switch"
import React from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Share } from 'lucide-react';
import { Button } from "./ui/button";
import { Sun, Moon, SunSnow, MoonStar, MonitorCog } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isLightMode, setIsLightMode] = React.useState(theme === "light")
  const { toast } = useToast();

  React.useEffect(() => {
    setIsLightMode(theme === "light")
  }, [theme])

  const handleSwitchChange = (checked: boolean) => {
    setTheme(checked ? "light" : "dark")
  }

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      })
        .then(() => {
          toast({
            title: "Successfully shared!",
            description: "The page was successfully shared.",
            variant: "success",
            action: (
              <ToastAction altText="Undo share">Undo</ToastAction>
            ),
          });
        })
        .catch((error) => {
          toast({
            title: "Error sharing",
            description: "There was an error while trying to share the page.",
            variant: "destructive",
            action: (
              <ToastAction altText="Try again">Try again, Later.</ToastAction>
            ),
          });
          console.error("Error sharing:", error);
        });
    } else {
      toast({
        title: "Sharing not supported",
        description: "Your browser does not support sharing.",
        variant: "destructive",
        action: (
          <ToastAction altText="Learn more">Learn more</ToastAction>
        ),
      });
    }
  }

  return (
    <div className="flex flex-row gap-3 items-center">
      {/* Share Button */}
      <Button variant="outline" className="hidden md:flex rounded-full font-semibold" onClick={handleShareClick}>
        <Share className="w-4 h-4 font-bold mr-2" />
        Share
      </Button>

      <div className="flex items-center space-x-2">
        <Switch
          checked={isLightMode}
          onCheckedChange={handleSwitchChange}
          className="data-[state=checked]:bg-slate-900 data-[state=unchecked]:bg-slate-800"
        />
        <span>{isLightMode ? "Light" : "Dark"}</span>
      </div>

      {/* Theme Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <SunSnow />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <MoonStar />
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <MonitorCog />
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
