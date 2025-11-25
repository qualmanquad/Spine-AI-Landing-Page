import { AlertTriangle } from 'lucide-react';

export default function ContextSection() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-4">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Problem
          </h2>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 border border-orange-100 shadow-sm">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Modern chat interfaces treat every conversation as a linear thread. But your work isn't linear—it's a web of decisions, files, and connections that current AI tools can't preserve.
          </p>
          
          <div className="space-y-5 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-semibold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">No Cross-Thread Memory</h3>
                <p className="text-gray-700 leading-relaxed">
                  Switch to a new topic or start a new chat, and all your previous context disappears. The AI forgets what you were working on, what decisions you made, and why.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-semibold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Files Get Disconnected</h3>
                <p className="text-gray-700 leading-relaxed">
                  Upload a PDF or image in one conversation, and it's trapped there. Reference it in another chat, and the AI has no idea what you're talking about—even though you already provided it.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-semibold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">The "Why" Gets Lost</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your reasoning, constraints, and decision-making process vanish the moment you change topics. You're forced to re-explain your entire thought process every single time.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-semibold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Locked Into One Model</h3>
                <p className="text-gray-700 leading-relaxed">
                  You're stuck with whatever AI model that platform offers. Need GPT-4 for analysis but Claude for writing? Want to compare outputs? You're out of luck—each tool is a silo.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-orange-200 bg-white/50 rounded-lg p-4">
            <p className="text-gray-800 font-medium leading-relaxed">
              The result? You spend more time re-explaining context than actually getting work done. Every conversation starts from zero, and you're trapped in whatever model that platform decided to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

