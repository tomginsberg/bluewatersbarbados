"use client";
import Navigation from "../../ui/navigation";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Menu } from "lucide-react";
import LaunchUI from "../../logos/launch-ui";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

export default function Navbar({
  logo = <LaunchUI />,
  name = "Launch UI",
  homeUrl = "https://www.launchuicomponents.com/",
  mobileLinks = [
    { text: "Getting Started", href: "https://www.launchuicomponents.com/" },
    { text: "Components", href: "https://www.launchuicomponents.com/" },
    { text: "Documentation", href: "https://www.launchuicomponents.com/" },
  ],
  actions = [
    { text: "Sign in", href: "https://www.launchuicomponents.com/", isButton: false },
    {
      text: "Get Started",
      href: "https://www.launchuicomponents.com/",
      isButton: true,
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  const pathname = usePathname();
  
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={cn("sticky top-0 z-50 p-0", className)}>
      
      <div className="max-w-container relative mx-auto px-4 py-2 bg-background">
        <NavbarComponent>
          <NavbarLeft>
            <a
              href={homeUrl}
              className="flex items-center gap-2 text-2xl font-bold"
            >
              {logo}
              {name}
            </a>
            {showNavigation && (customNavigation || <Navigation />)}
          </NavbarLeft>
          <NavbarRight>
            {actions.map((action, index) =>
              action.isButton ? (
                <Button
                  key={index}
                  variant={"default"}
                  asChild
                  className="text-lg"
                >
                  <a href={action.href}>
                    {action.icon}
                    {action.text}
                    {action.iconRight}
                  </a>
                </Button>
              ) : (
                <a
                  key={index}
                  href={action.href}
                  className={cn(
                    "hidden text-lg md:block relative",
                    isActive(action.href) && "text-blue-600 font-medium"
                  )}
                >
                  {action.text}
                  {isActive(action.href) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                  )}
                </a>
              ),
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href={homeUrl}
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>{name}</span>
                  </a>
                  {mobileLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className={cn(
                        "text-muted-foreground hover:text-foreground relative pl-2",
                        isActive(link.href) && "text-blue-600 font-medium"
                      )}
                    >
                      {link.text}
                      {isActive(link.href) && (
                        <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600 rounded-full" />
                      )}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
