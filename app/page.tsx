import Hero from '@/components/Hero'
import Card from '@/components/Card'
import ContactForm from '@/components/ContactForm'
import { services } from '@/data/site'

export default function Page() {
  return (
    <>
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-cte-primary to-cte-secondary">
        <div className="container-p">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">26+</div>
              <div className="text-sm md:text-base opacity-90">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-sm md:text-base opacity-90">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">5+</div>
              <div className="text-sm md:text-base opacity-90">Countries Served</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">5</div>
              <div className="text-sm md:text-base opacity-90">Service Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Value Chain Section */}
      <section className="py-24 bg-gradient-to-b from-cte-mist/30 to-white dark:from-cte-cardDark/30 dark:to-cte-cardDark">
        <div className="container-p">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-cte-primary/10 dark:bg-cte-accent/20 text-cte-primary dark:text-cte-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-cte-ink dark:text-white mb-6">
              Energy Value Chain
            </h2>
            <p className="text-xl text-cte-ash dark:text-cte-mist/70 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive consulting services across the entire energy value chain,
              from generation to distribution, ensuring optimal performance at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Generation */}
            <div className="group bg-white dark:bg-cte-cardDark/50 rounded-2xl p-8 border border-cte-mist/50 dark:border-white/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cte-primary/5 via-transparent to-cte-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cte-primary to-cte-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-cte-ink dark:text-white mb-4">Generation</h3>
                <p className="text-cte-ash dark:text-cte-mist/70 leading-relaxed mb-4">
                  We offer consulting services in the generation sector including renewable energy integration,
                  conventional power plants, and hybrid energy solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Solar PV', 'Wind', 'BESS', 'Hybrid'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-cte-primary/10 text-cte-primary dark:bg-cte-accent/20 dark:text-cte-accent text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Transmission */}
            <div className="group bg-white dark:bg-cte-cardDark/50 rounded-2xl p-8 border border-cte-mist/50 dark:border-white/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cte-secondary/5 via-transparent to-cte-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cte-secondary to-cte-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L4 7v10c0 5.55 3.84 9.93 9 11 5.16-1.07 9-5.45 9-11V7l-8-5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h8M8 8h8M8 16h8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-cte-ink dark:text-white mb-4">Transmission</h3>
                <p className="text-cte-ash dark:text-cte-mist/70 leading-relaxed mb-4">
                  We offer consulting services in the transmission sector including high voltage network planning,
                  stability studies, and grid integration assessments.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['HV Networks', 'Stability', 'FACTS', 'Protection'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-cte-secondary/10 text-cte-secondary dark:bg-cte-accent/20 dark:text-cte-accent text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Distribution */}
            <div className="group bg-white dark:bg-cte-cardDark/50 rounded-2xl p-8 border border-cte-mist/50 dark:border-white/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cte-accent/5 via-transparent to-cte-info/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cte-accent to-cte-info rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" strokeWidth={2} />
                    <circle cx="6" cy="6" r="2" strokeWidth={2} />
                    <circle cx="18" cy="6" r="2" strokeWidth={2} />
                    <circle cx="6" cy="18" r="2" strokeWidth={2} />
                    <circle cx="18" cy="18" r="2" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 9.5L6.5 6.5M14.5 9.5L17.5 6.5M9.5 14.5L6.5 17.5M14.5 14.5L17.5 17.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-cte-ink dark:text-white mb-4">Distribution</h3>
                <p className="text-cte-ash dark:text-cte-mist/70 leading-relaxed mb-4">
                  We offer consulting services in the distribution sector including network modeling,
                  load flow studies, and embedded generation impact assessments.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['LV/MV Networks', 'DER Integration', 'Smart Grid', 'Metering'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-cte-accent/10 text-cte-accent dark:bg-cte-accent/20 dark:text-cte-accent text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24">
        <div className="container-p">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cte-accent/10 dark:bg-cte-accent/20 text-cte-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                About CTE
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-cte-ink dark:text-white mb-6">
                Who We Are
              </h2>
              <p className="text-xl text-cte-ash dark:text-cte-mist/70 leading-relaxed mb-6">
                We are an independent engineering consulting firm in the energy value chain with a particular focus on power systems.
              </p>
              <p className="text-cte-ash dark:text-cte-mist/70 leading-relaxed mb-8">
                Our team of engineers have experience working in Africa and parts of Asia in multi-disciplinary teams offering
                power systems consulting services. We operate from our main offices in <strong className="text-cte-primary dark:text-cte-accent">Johannesburg, South Africa</strong>.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-cte-primary dark:text-cte-accent mb-2">26+</div>
                  <div className="text-sm text-cte-ash dark:text-cte-mist/70">Years of Combined Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cte-primary dark:text-cte-accent mb-2">Africa</div>
                  <div className="text-sm text-cte-ash dark:text-cte-mist/70">& Asia Coverage</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cte-primary/10 to-cte-secondary/10 dark:from-cte-primary/20 dark:to-cte-secondary/20 rounded-2xl p-6 border border-cte-primary/20">
                <h3 className="text-lg font-semibold text-cte-primary dark:text-cte-accent mb-3">
                  Our Mission
                </h3>
                <p className="text-cte-ink dark:text-white font-medium">
                  Delivering strategic energy solutions that are customer-driven, quality-focused, and professionally executed.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-cte-cardDark/50 rounded-2xl p-8 border border-cte-mist/50 dark:border-white/10">
                <h3 className="text-2xl font-semibold text-cte-ink dark:text-white mb-6">What We Offer</h3>
                <p className="text-cte-ash dark:text-cte-mist/70 leading-relaxed mb-6">
                  We offer independent consulting services based on over <strong className="text-cte-primary dark:text-cte-accent">26 years</strong> of
                  the founding members' experience working for utilities and in the consulting sector.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: "M5 13l4 4L19 7", text: "Multi-disciplinary teams" },
                    { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", text: "Africa and Asia experience" },
                    { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", text: "Independent consulting approach" },
                    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Rapid project delivery" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cte-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-cte-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <p className="text-cte-ash dark:text-cte-mist/70">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cte-secondary/10 to-cte-accent/10 dark:from-cte-secondary/20 dark:to-cte-accent/20 rounded-2xl p-6 border border-cte-secondary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-cte-secondary/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-cte-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cte-ink dark:text-white">Headquarters</h4>
                    <p className="text-sm text-cte-ash dark:text-cte-mist/70">Johannesburg, South Africa</p>
                  </div>
                </div>
                <p className="text-sm text-cte-ash dark:text-cte-mist/70">
                  Strategically located to serve the entire African continent and selected Asian markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-cte-mist/30 dark:from-cte-cardDark dark:to-cte-cardDark/30">
        <div className="container-p">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-cte-secondary/10 dark:bg-cte-accent/20 text-cte-secondary dark:text-cte-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              What We Do
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-cte-ink dark:text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-cte-ash dark:text-cte-mist/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive power systems engineering services across the energy value chain,
              delivered by experts with over 26 years of industry experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="group" style={{animationDelay: `${index * 100}ms`}}>
                <Card title={service.title} subtitle={service.points.join(' · ')} />
              </div>
            ))}
          </div>

          {/* Service CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-cte-primary/10 to-cte-secondary/10 dark:from-cte-primary/20 dark:to-cte-secondary/20 rounded-2xl p-8 border border-cte-primary/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-cte-ink dark:text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-cte-ash dark:text-cte-mist/70 mb-6">
                Our multi-disciplinary team can design tailored engineering solutions for your unique power systems challenges.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-cte-primary hover:bg-cte-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
              >
                Discuss Your Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-cte-primary/10 via-cte-secondary/5 to-cte-accent/10 dark:from-cte-primary/20 dark:via-cte-secondary/10 dark:to-cte-accent/20">
        <div className="container-p">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cte-primary/10 dark:bg-cte-accent/20 text-cte-primary dark:text-cte-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-cte-ink dark:text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-cte-ash dark:text-cte-mist/70 max-w-3xl mx-auto leading-relaxed">
                Get expert power systems engineering support for your renewable energy project.
                We'll respond within one business day.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-cte-cardDark/50 rounded-2xl p-8 border border-cte-mist/50 dark:border-white/5 h-fit">
                  <h3 className="text-2xl font-semibold text-cte-ink dark:text-white mb-8">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-cte-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-cte-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-cte-ink dark:text-white mb-1">Email</h4>
                        <p className="text-cte-ash dark:text-cte-mist/70">info@cliffandtonyenergy.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-cte-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-cte-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-cte-ink dark:text-white mb-1">Location</h4>
                        <p className="text-cte-ash dark:text-cte-mist/70">Johannesburg, South Africa</p>
                        <p className="text-sm text-cte-ash dark:text-cte-mist/60">Serving Africa & Asia</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-cte-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-cte-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-cte-ink dark:text-white mb-1">Response Time</h4>
                        <p className="text-cte-ash dark:text-cte-mist/70">Within 1 business day</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-cte-info/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-cte-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-cte-ink dark:text-white mb-1">Expertise</h4>
                        <p className="text-cte-ash dark:text-cte-mist/70">26+ years experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-cte-cardDark/50 rounded-2xl p-8 border border-cte-mist/50 dark:border-white/5">
                  <h3 className="text-2xl font-semibold text-cte-ink dark:text-white mb-8">Send Us a Message</h3>

                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
