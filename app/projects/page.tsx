'use client'

import { projects } from '@/data/projects'
import Image from 'next/image'
import { useState } from 'react'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen py-20">
      <div className="container-p">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cte-primary/10 dark:bg-cte-accent/20 text-cte-primary dark:text-cte-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5l5-5m0 0l-5 5m5-5v10" />
            </svg>
            Our Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-cte-ink dark:text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-cte-ash dark:text-cte-mist/70 max-w-3xl mx-auto leading-relaxed">
            Delivering exceptional power systems engineering solutions across Africa and Asia.
            Explore our comprehensive portfolio of successful projects.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white dark:bg-cte-cardDark/50 rounded-2xl p-6 border border-cte-mist/50 dark:border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-cte-primary dark:text-cte-accent mb-2">50+</div>
            <div className="text-sm text-cte-ash dark:text-cte-mist/70">Total Projects</div>
          </div>
          <div className="text-center bg-white dark:bg-cte-cardDark/50 rounded-2xl p-6 border border-cte-mist/50 dark:border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-cte-secondary dark:text-cte-accent mb-2">{categories.length - 1}</div>
            <div className="text-sm text-cte-ash dark:text-cte-mist/70">Categories</div>
          </div>
          <div className="text-center bg-white dark:bg-cte-cardDark/50 rounded-2xl p-6 border border-cte-mist/50 dark:border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-cte-accent mb-2">26+</div>
            <div className="text-sm text-cte-ash dark:text-cte-mist/70">Years Experience</div>
          </div>
          <div className="text-center bg-white dark:bg-cte-cardDark/50 rounded-2xl p-6 border border-cte-mist/50 dark:border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-cte-info mb-2">5+</div>
            <div className="text-sm text-cte-ash dark:text-cte-mist/70">Countries</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-cte-primary text-white shadow-lg'
                  : 'bg-white dark:bg-cte-cardDark/50 text-cte-ash dark:text-cte-mist/70 hover:bg-cte-primary/10 dark:hover:bg-cte-accent/20 border border-cte-mist/50 dark:border-white/10'
              }`}
            >
              {category}
              {category !== 'All' && (
                <span className="ml-2 px-2 py-1 bg-black/10 rounded-full text-xs">
                  {projects.filter(p => p.category === category).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-cte-mist/30 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-cte-ash dark:text-cte-mist/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5l5-5m0 0l-5 5m5-5v10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cte-ink dark:text-white mb-2">No projects found</h3>
              <p className="text-cte-ash dark:text-cte-mist/70">Try selecting a different category.</p>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-cte-cardDark/50 rounded-2xl border border-cte-mist/50 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative"
                style={{animationDelay: `${index * 150}ms`}}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cte-primary/5 via-transparent to-cte-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="grid lg:grid-cols-2 gap-0 relative z-10">
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 dark:bg-cte-cardDark/90 backdrop-blur-sm text-cte-primary dark:text-cte-accent px-3 py-1 rounded-full text-sm font-medium border border-white/20">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 lg:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h2 className="text-2xl lg:text-3xl font-bold text-cte-ink dark:text-white mb-4 group-hover:text-cte-primary dark:group-hover:text-cte-accent transition-colors">
                          {project.title}
                        </h2>

                        <p className="text-cte-ash dark:text-cte-mist/70 leading-relaxed mb-6 text-lg">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Project specifications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {project.capacity && (
                        <div className="bg-cte-mist/20 dark:bg-white/5 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-cte-primary dark:text-cte-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="text-sm font-medium text-cte-primary dark:text-cte-accent">Capacity</span>
                          </div>
                          <span className="text-cte-ink dark:text-white font-semibold">{project.capacity}</span>
                        </div>
                      )}

                      {project.technology && (
                        <div className="bg-cte-mist/20 dark:bg-white/5 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-cte-secondary dark:text-cte-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <span className="text-sm font-medium text-cte-secondary dark:text-cte-accent">Technology</span>
                          </div>
                          <span className="text-cte-ink dark:text-white font-semibold">{project.technology}</span>
                        </div>
                      )}
                    </div>

                    {/* Project scope */}
                    <div>
                      <h3 className="text-xl font-semibold text-cte-ink dark:text-white mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-cte-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Project Scope
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-3 group/item">
                            <div className="w-2 h-2 bg-cte-accent rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                            <span className="text-cte-ash dark:text-cte-mist/70 text-sm leading-relaxed group-hover/item:text-cte-ink dark:group-hover/item:text-white transition-colors">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cte-primary/10 to-cte-secondary/10 dark:from-cte-primary/20 dark:to-cte-secondary/20 rounded-2xl p-8 border border-cte-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-cte-ink dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-cte-ash dark:text-cte-mist/70 mb-6">
              Let's discuss how our expertise can help bring your power systems project to life.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cte-primary to-cte-secondary hover:from-cte-primary/90 hover:to-cte-secondary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
            >
              Get In Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
