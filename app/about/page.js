import React from 'react';

export default function AboutPage() {
    return (
        <main className="space-y-6 max-w-2xl py-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                Yo, how are you?
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                    Frontend Developer based in Pune. I build with React, Next.js, and TypeScript. Contributed to Rocket.Chat's EmbeddedChat and OpenELIS-Global-2 open source projects.
                </p>
                <p>
                    Looking for frontend roles at startups.
                </p>
            </div>

            {/* Inline SVGs to avoid library export conflicts */}
            <div className="flex items-center gap-5 pt-4 text-zinc-500 dark:text-zinc-400">
                {/* GitHub */}
                <a
                    href="https://github.com/Strxangxl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
                    aria-label="GitHub"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/ratandeep1509"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
                    aria-label="LinkedIn"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                </a>

                {/* Email */}
                <a
                    href="mailto:your.singhratandeep2345@gmail.com"
                    className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
                    aria-label="Email"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                </a>
            </div>
        </main>
    );
}