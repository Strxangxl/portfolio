"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import the path tracking hook
import { Home, Rocket, User, Sun, Moon } from "lucide-react";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname(); // 2. Grab the current active path string

    useEffect(() => {
        setMounted(true);
    }, []);

    // 3. Define a logical style rule helper function
    const getLinkStyles = (path, isIcon = false) => {
        const isActive = pathname === path;

        if (isIcon) {
            // Styles for the Home button which has a round background wrap
            return isActive
                ? "p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 transition"
                : "p-2 rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition";
        }

        // Styles for the standard bare icon navigation items
        return isActive
            ? "text-zinc-900 dark:text-zinc-100 scale-110"
            : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition";
    };

    return (
        <header className="flex items-center justify-between w-full">
            <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200">strxangxl</h1>
            <nav className="flex items-center gap-6">

                {/* 4. Apply dynamic class matching evaluations */}
                <Link href="/" className={getLinkStyles("/", true)}>
                    <Home className="w-4 h-4" />
                </Link>

                <Link href="/projects" className={getLinkStyles("/projects")}>
                    <Rocket className="w-4 h-4" />
                </Link>

                <Link href="/about" className={getLinkStyles("/about")}>
                    <User className="w-4 h-4" />
                </Link>

                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 h-7 w-7 flex items-center justify-center"
                    aria-label="Toggle Theme"
                >
                    {mounted ? (
                        theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />
                    ) : (
                        <div className="w-4 h-4" />
                    )}
                </button>
            </nav>
        </header>
    );
}