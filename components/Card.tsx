import Image from 'next/image';

const serviceIcons: Record<string, JSX.Element> = {
  'Power System Planning': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  'Grid Code Compliance': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  'Hybrid Energy Solutions': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      <circle cx="18" cy="6" r="2" strokeWidth={1.5} />
      <circle cx="6" cy="18" r="2" strokeWidth={1.5} />
    </svg>
  ),
  'Technical Advisory': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  'Capacity Building': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
};

export default function Card({title, subtitle, image}:{title:string, subtitle?:string, image?:string}){
  const icon = serviceIcons[title];

  return (
    <div className="group relative bg-white dark:bg-cte-cardDark/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cte-primary/10 transition-all duration-300 hover:-translate-y-2 border border-cte-mist/50 dark:border-white/5 overflow-hidden h-full flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cte-primary/5 via-transparent to-cte-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Project image */}
      {image && (
        <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4 bg-cte-mist/30 dark:bg-white/5">
          <Image src={image} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      {/* Service icon for service cards */}
      {!image && (
        <div className="relative z-10 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-cte-primary to-cte-secondary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
            {icon || (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5l5-5m0 0l-5 5m5-5v10" />
              </svg>
            )}
          </div>
        </div>
      )}

      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-cte-ink dark:text-white mb-2 group-hover:text-cte-primary dark:group-hover:text-cte-accent transition-colors">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-cte-ash dark:text-cte-mist/70 leading-relaxed flex-1">
            {subtitle}
          </p>
        )}
      </div>

      {/* Hover arrow */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-6 h-6 bg-cte-primary/10 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-cte-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
