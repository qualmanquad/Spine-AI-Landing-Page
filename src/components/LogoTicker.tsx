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
    <section className="py-12 border-b border-gray-100 bg-white overflow-hidden mb-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-infinite-scroll flex space-x-20 whitespace-nowrap">
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className={`text-2xl font-bold text-gray-400 hover:text-gray-900 transition-colors duration-300 select-none flex items-center`}>
                 {/* Simulating Logo Look with Fonts */}
                 <span className="tracking-tight">{logo.name}</span>
              </div>
            ))}
          </div>
          
          {/* Fade edges */}
          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}
