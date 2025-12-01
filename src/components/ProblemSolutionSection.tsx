import { AlertTriangle, CheckCircle2, Network, FileText, GitBranch, Zap, MessageSquare, XCircle, Lock, RotateCcw, RefreshCw } from 'lucide-react';

const problemSolutions = [
  {
    problem: {
      icon: <MessageSquare className="w-6 h-6 text-orange-600" />,
      title: "No Cross-Thread Memory",
      description: "Switch to a new topic or start a new chat, and all your previous context disappears. The AI forgets what you were working on, what decisions you made, and why.",
      visual: "broken-chat"
    },
    solution: {
      icon: <Network className="w-6 h-6 text-purple-600" />,
      title: "Visual Canvas That Preserves Context",
      description: "Your entire workflow lives on one canvas. Files, conversations, and decisions are visually connected—no more losing context when you switch topics.",
      visual: "canvas-network"
    }
  },
  {
    problem: {
      icon: <XCircle className="w-6 h-6 text-orange-600" />,
      title: "Files Get Disconnected",
      description: "Upload a PDF or image in one conversation, and it's trapped there. Reference it in another chat, and the AI has no idea what you're talking about—even though you already provided it.",
      visual: "disconnected-files"
    },
    solution: {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Files Connected Across Your Workspace",
      description: "Upload a PDF once, reference it everywhere. Your documents, images, and media are part of your workspace, not trapped in individual chats.",
      visual: "canvas-files"
    }
  },
  {
    problem: {
      icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
      title: "The 'Why' Gets Lost",
      description: "Your reasoning, constraints, and decision-making process vanish the moment you change topics. You're forced to re-explain your entire thought process every single time.",
      visual: "lost-reasoning"
    },
    solution: {
      icon: <GitBranch className="w-6 h-6 text-green-600" />,
      title: "Branch Your Logic, Keep Your Reasoning",
      description: "Create parallel paths to explore different approaches. Your decision tree is visible, and the 'why' behind each choice is preserved.",
      visual: "canvas-branching"
    }
  },
  {
    problem: {
      icon: <Lock className="w-6 h-6 text-orange-600" />,
      title: "Locked Into One Model",
      description: "You're stuck with whatever AI model that platform offers. Need GPT-4 for analysis but Claude for writing? Want to compare outputs? You're out of luck—each tool is a silo.",
      visual: "single-model"
    },
    solution: {
      icon: <Zap className="w-6 h-6 text-orange-600" />,
      title: "300+ AI Models in One Workspace",
      description: "Use GPT-4 for analysis, Claude for writing, and compare outputs side-by-side. Switch models instantly—no more platform lock-in.",
      visual: "canvas-models"
    }
  },
  {
    problem: {
      icon: <RotateCcw className="w-6 h-6 text-orange-600" />,
      title: "Can't Change Early Inputs",
      description: "Your conversations grow huge, and you realize you made a mistake or want to change something from the start. You can't go back—you're stuck starting a new chat or accepting the loss of all your work.",
      visual: "locked-conversation"
    },
    solution: {
      icon: <RefreshCw className="w-6 h-6 text-indigo-600" />,
      title: "Re-Run Every Branch with New Inputs",
      description: "Change an input from the beginning, and Spine automatically re-runs every branch downstream. No need to start over—your entire workflow updates instantly with the new information.",
      visual: "canvas-rerun"
    }
  }
];

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Modern chat interfaces treat every conversation as a linear thread.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            But your work isn't linear—it's a web of decisions, files, and connections that current AI tools can't preserve.
          </p>
        </div>

        <div className="space-y-12">
          {problemSolutions.map((item, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Problem Side */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-orange-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                    {item.problem.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      <h3 className="text-xl font-semibold text-gray-900">Problem</h3>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.problem.title}</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {item.problem.description}
                    </p>
                  </div>
                </div>
                
                {/* Visual Placeholder */}
                <div className="mt-4 bg-white rounded-xl border border-orange-200 aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center relative z-10">
                      <div className="w-12 h-12 mx-auto bg-orange-50 rounded-lg flex items-center justify-center mb-2">
                        {item.problem.icon}
                      </div>
                      <p className="text-xs text-gray-500 font-medium">{item.problem.visual}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution Side */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-purple-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                    {item.solution.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600" />
                      <h3 className="text-xl font-semibold text-gray-900">Solution</h3>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.solution.title}</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {item.solution.description}
                    </p>
                  </div>
                </div>
                
                {/* Visual Placeholder */}
                <div className="mt-4 bg-white rounded-xl border border-purple-200 aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center relative z-10">
                      <div className="w-12 h-12 mx-auto bg-purple-50 rounded-lg flex items-center justify-center mb-2">
                        {item.solution.icon}
                      </div>
                      <p className="text-xs text-gray-500 font-medium">{item.solution.visual}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200 max-w-3xl">
            <p className="text-lg text-gray-800 leading-relaxed">
              <span className="font-semibold text-gray-900">One workspace.</span> All your context. <span className="font-semibold text-gray-900">300+ models.</span> No more starting from zero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

