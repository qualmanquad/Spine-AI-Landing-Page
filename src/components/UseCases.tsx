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
    <section id="use-cases" className="py-24 bg-slate-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-12 mb-4">Use Cases</h2>
          <p className="text-xl text-slate-11">Spine adapts to your role, not the other way around.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-slate-12 text-slate-1 shadow-lg scale-105'
                  : 'bg-slate-3 text-slate-11 hover:bg-slate-6'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-slate-3 rounded-2xl p-8 md:p-10 border border-slate-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-12 mb-4 leading-tight">
              {activeContent.headline}
            </h3>
            <p className="text-lg text-slate-11 mb-10">
              {activeContent.pain}
            </p>
            
            {/* Features */}
            <div>
              <h4 className="text-sm font-semibold text-slate-12 mb-4 uppercase tracking-wide">Key Features</h4>
              <div className="space-y-4">
                {activeContent.features.map((feature, idx) => (
                  <div key={idx}>
                    <h5 className="font-semibold text-slate-12 mb-1">{feature.title}</h5>
                    <p className="text-sm text-slate-11">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

