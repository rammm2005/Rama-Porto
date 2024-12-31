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


export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isLightMode, setIsLightMode] = React.useState(theme === "light")

  React.useEffect(() => {
    setIsLightMode(theme === "light")
  }, [theme])

  const handleSwitchChange = (checked: boolean) => {
    setTheme(checked ? "light" : "dark")
  }

  return (
    <div className="flex flex-row gap-3 items-center">
      <Button variant="outline" className="hidden md:flex rounded-full font-semibold">
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

