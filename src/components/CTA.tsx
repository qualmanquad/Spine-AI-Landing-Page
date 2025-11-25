import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Background gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-purple-600/20 rounded-full blur-3xl"></div>
          </div>

            <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Your Brain Doesn’t Work in Tabs. <br />
              <span className="text-gray-400">Neither Should Your AI Workflow.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10">
              Join the hundreds of users who save hours every week with Spine AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Try for Free <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
