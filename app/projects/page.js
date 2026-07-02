import React from 'react';
import Link from 'next/link';

const allProjects = [
    {
        title: "medium-blog",
        description: "Clone site of medium blog site",
        tech: ["Next.js", "Tailwind"],
        fullWidth: true,
        link: "https://github.com/yourusername/medium-blog"
    },
    {
        title: "stitchshop",
        description: "A fully functional full stack ecommerce site",
        tech: ["React", "MERN"],
        fullWidth: true,
        link: "https://github.com/yourusername/stitchshop"
    },
    {
        title: "Airbnb Clone",
        description: "Airbnb Clone",
        tech: ["Next.js", "Tailwind"],
        fullWidth: false,
        link: "https://github.com/yourusername/airbnb-clone"
    },
    {
        title: "Clean UI",
        description: "A Practise Project",
        tech: ["Next.js", "Chakra"],
        fullWidth: false,
        link: "https://github.com/yourusername/clean-ui"
    }
];

export default function ProjectsPage() {
    return (
        <main className="space-y-24">
            <div className="space-y-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Projects
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {allProjects.map((project, index) => (
                        /* Changed from <div> to <Link> wrapper layout */
                        <Link
                            href={project.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 flex flex-col justify-between h-44 transition cursor-pointer hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/80 ${project.fullWidth ? "md:col-span-2" : "md:col-span-1"
                                }`}
                        >
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-wide">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono mt-4 pt-2">
                                {project.tech.map((icon, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-1 rounded bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300/40 dark:border-zinc-700/50 text-[10px] tracking-wider uppercase font-semibold"
                                    >
                                        {icon}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}