import Link from 'next/link';

export default function Hero(){
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cte-primary/5 via-transparent to-cte-accent/5" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-cte-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cte-accent/10 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }}
      />

      <div className="container-p py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            <span className="block text-cte-ink dark:text-white mb-2">
              SPECIALISTS IN THE
            </span>
            <span className="block text-transparent bg-gradient-to-r from-cte-primary via-cte-secondary to-cte-accent bg-clip-text">
              ENERGY VALUE CHAIN
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-cte-slate dark:text-cte-mist/80 font-medium mb-8 max-w-3xl">
            Helping clients towards the global energy transition.
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-cte-ash dark:text-cte-mist/70 leading-relaxed mb-8 max-w-2xl">
            Independent engineering consulting firm with over 26 years of experience in power systems,
            offering specialized services across generation, transmission, and distribution sectors in Africa and Asia.
          </p>          {/* Features list */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-sm">
            {['Grid Code Studies', 'Power System Protection', 'Hybrid energy solutions', 'Technical Advisory'].map((feature, i) => (
              <div key={feature} className="flex items-center gap-2 text-cte-slate dark:text-cte-mist/60">
                <div className="w-1.5 h-1.5 bg-cte-accent rounded-full"></div>
                {feature}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className="group bg-cte-primary hover:bg-cte-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
              href="/projects"
            >
              View Our Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              className="group bg-white/80 hover:bg-white dark:bg-cte-cardDark/80 dark:hover:bg-cte-cardDark text-cte-ink dark:text-white px-8 py-4 rounded-xl font-semibold border border-cte-mist/50 dark:border-white/10 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2"
              href="#contact"
            >
              Start a Project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
