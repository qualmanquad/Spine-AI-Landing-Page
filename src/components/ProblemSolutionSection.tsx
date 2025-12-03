import { AlertTriangle, CheckCircle2, Network, FileText, GitBranch, Zap, MessageSquare, XCircle, Lock, RotateCcw, RefreshCw } from 'lucide-react';

const problemSolutions = [
  {
    problem: {
      icon: <MessageSquare className="w-6 h-6 text-slate-11" />,
      title: "No Cross-Thread Memory",
      description: "Switch to a new topic or start a new chat, and all your previous context disappears. The AI forgets what you were working on, what decisions you made, and why.",
      image: "/graphics/context-not-passing2.png"
    },
    solution: {
      icon: <Network className="w-6 h-6" style={{ color: '#6e56cf' }} />,
      title: "Visual Canvas That Preserves Context",
      description: "Your entire workflow lives on one canvas. Files, conversations, and decisions are visually connected—no more losing context when you switch topics.",
      image: "/graphics/appinputs2.png"
    }
  },
  {
    problem: {
      icon: <Lock className="w-6 h-6 text-slate-11" />,
      title: "Locked Into One Model",
      description: "You're stuck with whatever AI model that platform offers. Need GPT-4 for analysis but Claude for writing? Want to compare outputs? You're out of luck — each tool is a silo.",
      image: "/graphics/modellock.png"
    },
    solution: {
      icon: <Zap className="w-6 h-6" style={{ color: '#6e56cf' }} />,
      title: "300+ AI Models in One Workspace",
      description: "Use GPT-4 for analysis, Claude for writing, and compare outputs side-by-side. Switch models instantly—no more platform lock-in.",
      image: "/graphics/300models.png"
    }
  },
  {
    problem: {
      icon: <RotateCcw className="w-6 h-6 text-slate-11" />,
      title: "Can't Change Early Inputs",
      description: "Your conversations grow huge, and you realize you made a mistake or want to change something from the start. You can't go back—you're stuck starting a new chat or accepting the loss of all your work.",
      image: "/graphics/contextlock.png"
    },
    solution: {
      icon: <RefreshCw className="w-6 h-6" style={{ color: '#6e56cf' }} />,
      title: "Re-Run Every Branch with New Inputs",
      description: "Change an input from the beginning, and Spine automatically re-runs every branch downstream. No need to start over—your entire workflow updates instantly with the new information.",
      image: "/graphics/context-connection.png"
    }
  }
];

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-slate-1 border-b border-slate-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-12 mb-6 tracking-tight leading-tight">
            Modern chat interfaces treat every conversation as a linear thread.
          </h2>
          <p className="text-xl md:text-2xl text-slate-11 leading-relaxed">
            But your work isn't linear—it's a web of decisions, files, and connections that current AI tools can't preserve.
          </p>
        </div>

        <div className="space-y-12">
          {problemSolutions.map((item, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Problem Side */}
              <div className="bg-slate-3 rounded-2xl p-8 border border-slate-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-1 border border-slate-6 flex items-center justify-center flex-shrink-0 shadow-sm">
                    {item.problem.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-slate-11" />
                      <h3 className="text-xl font-semibold text-slate-12">Problem</h3>
                    </div>
                    <h4 className="font-semibold text-slate-12 mb-2">{item.problem.title}</h4>
                    <p className="text-slate-11 leading-relaxed mb-4">
                      {item.problem.description}
                    </p>
                  </div>
                </div>
                
                {/* Problem Image */}
                <div className="mt-4 rounded-xl border border-slate-6 aspect-video relative overflow-hidden bg-slate-1">
                  {item.problem.image ? (
                    <img 
                      src={item.problem.image} 
                      alt={item.problem.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
                  )}
                </div>
              </div>

              {/* Solution Side */}
              <div className="bg-slate-3 rounded-2xl p-8 border border-slate-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-1 border border-slate-6 flex items-center justify-center flex-shrink-0 shadow-sm">
                    {item.solution.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5" style={{ color: '#6e56cf' }} />
                      <h3 className="text-xl font-semibold text-slate-12">Solution</h3>
                    </div>
                    <h4 className="font-semibold text-slate-12 mb-2">{item.solution.title}</h4>
                    <p className="text-slate-11 leading-relaxed mb-4">
                      {item.solution.description}
                    </p>
                  </div>
                </div>
                
                {/* Solution Image */}
                <div className="mt-4 rounded-xl border border-slate-6 aspect-video relative overflow-hidden bg-slate-1">
                  {item.solution.image ? (
                    <img 
                      src={item.solution.image} 
                      alt={item.solution.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-3 rounded-2xl p-8 border border-slate-6 max-w-3xl">
            <p className="text-lg text-slate-11 leading-relaxed">
              <span className="font-semibold text-slate-12">One workspace.</span> All your context. <span className="font-semibold text-slate-12">300+ models.</span> No more starting from zero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

