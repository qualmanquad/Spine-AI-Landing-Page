export default function Hero() {
  return (
    <div className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-dot-pattern">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* YC Badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-6 h-6 bg-[#F26522] rounded flex items-center justify-center text-white font-bold text-sm">
                Y
              </div>
              <span className="text-sm text-slate-8 font-medium">Backed by Y Combinator</span>
            </div>
            
            <h1 className="text-6xl md:text-[5rem] leading-[0.95] font-semibold tracking-tight text-slate-12 mb-8">
              The better way <br />
              to use AI.<sup className="text-3xl ml-1">✦</sup> <br />
            </h1>
            
            <p className="text-lg md:text-xl text-slate-11 mb-10 leading-relaxed max-w-xl">
            Spine AI is the first visual workspace that lets you branch conversations, connect disparate context, and orchestrate 300+ AI models on a single canvas. Don't just chat with AI—build with it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-slate-12 text-slate-1 rounded-xl font-medium text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg">
                Start Building
              </button>
              <button className="px-8 py-4 bg-slate-1 text-slate-12 border border-slate-6 rounded-xl font-medium text-lg hover:bg-slate-3 transition-all hover:border-slate-8 flex items-center gap-2">
                See Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="graphics/hero image.jpg" 
              alt="Spine AI workspace canvas showing connected workflows"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            
            {/* Glow Effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-50 rounded-3xl -z-10 blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>
      
      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-1 to-transparent z-20"></div>
    </div>
  );
}
