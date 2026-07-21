import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "StitchShop v2",
    image: "/stitchshopv2.png",
    link: "https://stitchshop-v2.vercel.app/"
  },
  {
    title: "Medium Sanity Clone",
    image: "/medium.png",
    link: "https://medium-blog-sanity-clone.vercel.app/"
  }
];

export default function HomePage() {
  return (
    <main className="space-y-24">
      <section className="space-y-4 max-w-2xl py-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Hello! I'm Ratan
        </h2>
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Fullstack Developer building React and Next.js applications. Open source contributor to Rocket.Chat. Based in Pune.
        </p>
      </section>

      <section className="space-y-8">
        <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200">
          Projects
        </h3>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-video overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover opacity-90 dark:opacity-80 group-hover:scale-[1.02] transition duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <h4 className="text-lg font-bold text-white tracking-wide">
                  {project.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>

        <div className="pt-2">
          {/* Fixed: Point this link to your local internal sub-route */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-black dark:hover:text-white transition"
          >
            view all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}