import { useState } from 'react';
import { GitBranch, MessageSquareText, Palette, TrendingUp, BookOpen } from 'lucide-react';

const tabs = [
  {
    id: 'pm',
    label: 'Product & UX',
    role: 'Product Strategy',
    headline: 'From User Insight to Product Plans—Without the Context Switch.',
    pain: "Moving from vague ideas to clear product specs while losing context between tools.",
    features: [
      { title: "Research", desc: "Gather competitor data and user feedback directly onto the canvas." },
      { title: "Branching", desc: "Create 'Feature A' vs. 'Feature B' branches to test different approaches without deleting work." },
      { title: "User Journey Simulation", desc: "Simulate flow changes based on personas to prevent 'happy path' only planning." },
      { title: "UI/UX Copy Explorer", desc: "Visualize layouts with real generated copy rather than placeholder text." }
    ],
    icon: <GitBranch className="w-5 h-5" />
  },
  {
    id: 'pmm',
    label: 'Marketers & PMMs',
    role: 'Campaign Management',
    headline: 'One Core Message. Infinite Variations.',
    pain: "Rewriting the same value prop 10 times and losing the 'core message' as assets get distributed.",
    features: [
      { title: "Webinar Repurposing", desc: "Turn one video into a month's worth of downstream content across all channels." },
      { title: "Competitor Deep Dive", desc: "Automate market research by analyzing multiple competitor sites simultaneously." },
      { title: "Automatic Updates", desc: "Define 'Target Audience' once. Watch Blog Post, Email, and Tweets update downstream." },
      { title: "Consistent Messaging", desc: "Change the persona at the source, and the whole campaign updates instantly." }
    ],
    icon: <MessageSquareText className="w-5 h-5" />
  },
  {
    id: 'designers',
    label: 'Designers & Creatives',
    role: 'Visual Design',
    headline: 'Beyond Static Design to a Dynamic Engine.',
    pain: "Static brand guidelines don't adapt to different contexts, and starting from a blank canvas is paralyzing.",
    features: [
      { title: "Infinite Brand Identity", desc: "Test your brand across contexts instantly with dynamic variations that adapt automatically." },
      { title: "Divergent Design Mood Board", desc: "Solve blank canvas paralysis by automating distinct visual styles and exploring variations." },
      { title: "Multimedia Prompts", desc: "Use a YouTube video transcript as the prompt for image generation." },
      { title: "Visual Canvas", desc: "Drag, drop, and branch. Place mood boards next to copy next to strategy." }
    ],
    icon: <Palette className="w-5 h-5" />
  },
  {
    id: 'strategists',
    label: 'Strategists & Analysts',
    role: 'Strategic Analysis',
    headline: 'The Competitive Landscape War Room.',
    pain: "Market analysis is scattered across spreadsheets and documents—you can't see the big picture, and you're stuck in your own perspective.",
    features: [
      { title: "War Room Matrix", desc: "Get a bird's-eye view of the market with visual bulk analysis of multiple competitors at once." },
      { title: "360-Degree Perspective", desc: "Reduce cognitive bias by testing decisions through multiple AI personalities and models." },
      { title: "Bulk Actions", desc: "Analyze dozens of sites simultaneously without losing track of insights." },
      { title: "Model Comparison", desc: "Compare outputs from different AI models side-by-side to get diverse perspectives." }
    ],
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    id: 'knowledge',
    label: 'Knowledge Workers',
    role: 'Research & Synthesis',
    headline: 'The Syntopical Reading Workbench.',
    pain: "Reading multiple sources on one topic creates information overload—connections get lost, and your best ideas come from unexpected connections.",
    features: [
      { title: "Syntopical Reading", desc: "Synthesize multiple sources on a single subject without losing connections or context." },
      { title: "Idea Collider", desc: "Force connections between unrelated fields to generate serendipitous insights." },
      { title: "Source Synthesis", desc: "Handle the cognitive load of combining research from multiple documents and sources." },
      { title: "Cross-Domain Connections", desc: "Move beyond organization into generation by connecting ideas across different fields." }
    ],
    icon: <BookOpen className="w-5 h-5" />
  }
];

export default function UseCases() {
  const [activeTab, setActiveTab] = useState('pm');
  const activeContent = tabs.find(t => t.id === activeTab)!;

  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Use Cases</h2>
          <p className="text-xl text-gray-600">Spine adapts to your role, not the other way around.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 animate-fadeIn">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
                {activeContent.role}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {activeContent.headline}
              </h3>
              <p className="text-lg text-gray-600 mb-8 italic border-l-4 border-gray-300 pl-4">
                "{activeContent.pain}"
              </p>
              
              <div className="space-y-6">
                {activeContent.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold mt-1">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 aspect-square md:aspect-[4/3] flex items-center justify-center p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
              <div className="text-center relative z-10">
                 <div className="w-16 h-16 mx-auto bg-gray-100 rounded-xl flex items-center justify-center mb-4 text-gray-400">
                   {activeContent.icon}
                 </div>
                 <p className="text-gray-400 font-medium">Interactive Workflow Demo</p>
                 <p className="text-xs text-gray-300 mt-2">Shows {activeContent.label} flow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

