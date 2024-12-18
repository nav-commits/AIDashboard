"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Activity, Brain, Database, Settings, BarChart, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface NavItem {
  title: string;
  icon: React.ElementType;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Overview", icon: Home, href: "/" },
  { title: "Performance", icon: Activity, href: "/performance" },
  { title: "Models", icon: Brain, href: "/models" },
  { title: "Analytics", icon: BarChart, href: "/analytics" },
  { title: "Data", icon: Database, href: "/data" },
  { title: "Settings", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] p-0">
          <MobileNav setIsOpen={setIsOpen} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <nav className="hidden lg:block fixed left-0 top-0 z-20 h-full w-56 border-r bg-background">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex h-14 items-center px-4 font-semibold">
            <Sparkles className="mr-2 h-6 w-6 text-purple-500" />
            NeuroPulse
          </div>
          <ScrollArea className="flex-1">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </div>
          </ScrollArea>
        </div>
      </nav>
    </>
  );
}

function MobileNav({ setIsOpen }: { readonly setIsOpen: (value: boolean) => void }) {
  return (
    <ScrollArea className="h-full py-6">
      <div className="flex h-14 items-center border-b px-6 font-semibold">
        <Sparkles className="mr-2 h-6 w-6 text-purple-500" />
        NeuroPulse
      </div>
      <div className="flex flex-col gap-2 p-4">
        {navItems.map((item) => (
          <NavLink key={item.href} item={item} mobile setIsOpen={setIsOpen} />
        ))}
      </div>
    </ScrollArea>
  );
}

interface NavLinkProps {
  item: Readonly<NavItem>;
  mobile?: boolean;
  setIsOpen?: (value: boolean) => void;
}

function NavLink({ item, mobile, setIsOpen }: Readonly<NavLinkProps>) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={() => mobile && setIsOpen?.(false)}
      className={cn(
        "flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      )}
    >
      <Icon className="h-5 w-5" />
      {item.title}
    </Link>
  );
}