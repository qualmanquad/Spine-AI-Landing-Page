import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Why not just use ChatGPT?",
    answer: "ChatGPT is great for linear Q&A, but your work isn't linear. Spine gives you an infinite canvas to explore multiple campaign angles simultaneously, compare model outputs side-by-side, and build a knowledge graph of your brand strategy—not just a chat log."
  },
  {
    question: "Is this an automation tool, like Zapier?",
    answer: "No. Automation tools are for clear well structured processes, where you know what each step will be every time. Spine let's you have the best of both exploration, figuring out what you need to do next based on what you find, and automation, repeating your process once you've found something that works for you."
  },
  {
    question: "What kind of sources does Spine use?",
    answer: "There are many different types of sources you can use in Spine. Add your own documents, spreadsheets, specific webpages, even youTube videos directly to the canvas. You can also search across millions of public sources, from academic papers to news articles to company websites. Every insight is traceable back to its original source."
  },
  {
    question: "Is my data secure?",
    answer: "Your uploaded documents and research remain private to your workspace. We never train on your proprietary data, and you can delete your research at any time. Enterprise plans include additional security controls and compliance options."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-20 tracking-tight">
          Frequently asked questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-200 hover:border-gray-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <span className="text-gray-400 flex-shrink-0 ml-4">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
