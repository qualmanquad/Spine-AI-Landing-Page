const logos = [
  { name: "Deel", opacity: "opacity-40" },
  { name: "Translink", opacity: "opacity-40" },
  { name: "Cornell", opacity: "opacity-30" },
  { name: "Novisto", opacity: "opacity-40" },
  { name: "PagerDuty", opacity: "opacity-40" },
  { name: "Georgetown", opacity: "opacity-30" },
  { name: "Koro", opacity: "opacity-40" },
  { name: "TRM", opacity: "opacity-40" },
  { name: "ATB", opacity: "opacity-40" },
  { name: "Maiora", opacity: "opacity-30" },
  { name: "Zilliz", opacity: "opacity-40" }
];

export default function LogoTicker() {
  return (
    <section className="py-12 border-b border-slate-6 bg-slate-1 overflow-hidden mb-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-infinite-scroll flex space-x-20 whitespace-nowrap">
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className={`text-2xl font-bold text-slate-8 hover:text-slate-12 transition-colors duration-300 select-none flex items-center`}>
                 {/* Simulating Logo Look with Fonts */}
                 <span className="tracking-tight">{logo.name}</span>
              </div>
            ))}
          </div>
          
          {/* Fade edges */}
          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-slate-1 via-slate-1/80 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-slate-1 via-slate-1/80 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}
