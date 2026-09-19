import React from 'react';
import {
  earlierWork,
  featuredProjects,
  supportingProjects,
  type Project } from
'../data/resume';
import { Eyebrow, Reveal } from './Reveal';

function StackList({ stack }: {stack: string[];}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((tech) =>
      <li
        key={tech}
        className="rounded-full border border-ink/10 bg-paper px-3 py-1 text-xs text-ink-600">
        
          {tech}
        </li>
      )}
    </ul>);

}

function ProjectCard({
  project,
  emphasis



}: {project: Project;emphasis: boolean;}) {
  return (
    <article className="flex h-full flex-col rounded-panel bg-mist p-8 md:p-12">
      <p className="text-sm font-medium text-ink-400">{project.index}</p>
      <h3
        className={`mt-5 font-display font-medium leading-[1.03] tracking-tightest text-ink ${
        emphasis ? 'text-3xl md:text-5xl' : 'text-2xl md:text-4xl'}`
        }>
        
        {project.name}
      </h3>
      <p className="mt-3 text-base text-ink-600">{project.subtitle}</p>

      <ul className="mt-8 space-y-3 border-t border-ink/10 pt-8">
        {project.points.map((point) =>
        <li
          key={point}
          className="flex gap-3 text-base leading-relaxed text-ink-600">
          
            <span
            aria-hidden="true"
            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
          
            {point}
          </li>
        )}
      </ul>

      <div className="mt-auto pt-10">
        <StackList stack={project.stack} />
      </div>
    </article>);

}

export function Work() {
  return (
    <section id="work" className="bg-paper scroll-mt-24">
      <div className="mx-auto max-w-shell px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="text-center">
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tightest text-ink md:text-6xl">
            Four platforms, in production, at scale.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <Reveal className="h-full lg:col-span-7">
            <ProjectCard project={featuredProjects[0]} emphasis />
          </Reveal>
          <Reveal delay={0.05} className="h-full lg:col-span-5">
            <ProjectCard project={featuredProjects[1]} emphasis={false} />
          </Reveal>
          {supportingProjects.map((project, i) =>
          <Reveal
            key={project.name}
            delay={0.05 + i * 0.05}
            className="h-full lg:col-span-6">
            
              <ProjectCard project={project} emphasis={false} />
            </Reveal>
          )}
        </div>

        <Reveal delay={0.05}>
          <div className="mt-6 grid gap-8 rounded-panel border border-ink/5 bg-paper p-8 shadow-lift md:grid-cols-12 md:p-12">
            <h3 className="font-display text-2xl font-medium tracking-tight md:col-span-4">
              Earlier engagements
            </h3>
            <div className="md:col-span-4">
              <p className="text-xs font-medium text-ink-400">Clients</p>
              <p className="mt-2 text-base leading-relaxed text-ink-600">
                {earlierWork.clients.join(' · ')}
              </p>
            </div>
            <div className="md:col-span-4">
              <p className="text-xs font-medium text-ink-400">Technologies</p>
              <p className="mt-2 text-base leading-relaxed text-ink-600">
                {earlierWork.technologies}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}