import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Why not just use ChatGPT?",
    answer: "ChatGPT is great for linear Q&A, but marketing isn't linear. Spine gives you an infinite canvas to explore multiple campaign angles simultaneously, compare model outputs side-by-side, and build a knowledge graph of your brand strategy—not just a chat log."
  },
  {
    question: "Is this an automation tool, like Zapier?",
    answer: "No, Spine is a thinking workspace. While you can create repeatable workflows, it's designed for the creative and strategic process of marketing—ideation, drafting, refining, and planning—rather than just background automation."
  },
  {
    question: "What kind of sources does Spine use?",
    answer: "You can bring in anything: PDFs, websites, YouTube videos, CSVs, and more. Spine allows you to chat with your market research, competitor ads, and internal documents directly on the canvas."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. Your proprietary marketing data and strategy documents are yours. We prioritize security and privacy to ensure your competitive advantage stays safe."
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
