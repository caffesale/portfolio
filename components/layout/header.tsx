"use client";

import { Button } from "@/components/ui/button";
// import { useTheme } from "@/components/theme-provider";
import { Sun, Asterisk } from "lucide-react";

export function Header() {
    // const { theme, toggleTheme } = useTheme();

    const navItems = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/20">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Asterisk className="h-8 w-8 text-blue-400" />
                </div>

                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="capitalize transition-colors duration-200 hover:text-blue-400 text-muted-foreground"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <Button
                    variant="ghost"
                    size="icon"
                    // onClick={toggleTheme}
                    className="rounded-full"
                >
                    {/* {theme === "dark" ? (
                        <Sun className="h-5 w-5" />
                    ) : (
                        <Moon className="h-5 w-5" />
                    )} */}
                    <Sun className="h-5 w-5" />
                </Button>
            </div>
        </header>
    );
}
