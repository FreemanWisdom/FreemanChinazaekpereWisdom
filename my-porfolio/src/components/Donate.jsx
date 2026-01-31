import { useState } from "react";
import { supportData } from "../data/support";

export default function Donate() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-12 px-6 border-t border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Support Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full group flex items-center justify-center gap-3 py-6 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/20 backdrop-blur-md hover:from-indigo-500/30 hover:to-purple-500/30 transition-all shadow-xl"
        >
          <span className="text-2xl">{isExpanded ? '✨' : '💝'}</span>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {isExpanded ? 'Close Support Section' : 'Support My Work'}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-12 grid md:grid-cols-2 gap-8 animate-in slide-in-from-top duration-500">
            {/* Part A: Project & Collaboration Support */}
            <div className="bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl flex flex-col h-full">
              <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                🚀 {supportData.projects.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed flex-grow">
                {supportData.projects.description}
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${supportData.projects.email}`}
                  className="w-full flex items-center justify-center gap-3 bg-indigo-600 text-white py-4 rounded-2xl font-bold transition-all hover:bg-indigo-700 hover:scale-[1.02] shadow-lg shadow-indigo-500/30"
                >
                  📧 Contact via Email
                </a>
                <a
                  href={`https://wa.me/${supportData.projects.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-green-500 text-white py-4 rounded-2xl font-bold transition-all hover:bg-green-700 hover:scale-[1.02] shadow-lg shadow-green-500/30"
                >
                  💬 WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Part B: Financial Support (Optional) */}
            <div className="bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl flex flex-col h-full">
              <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                ☕ {supportData.financial.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                {supportData.financial.description}
              </p>

              <div className="space-y-4">
                {supportData.financial.options.map((opt, idx) => (
                  <div
                    key={idx}
                    className="bg-white/50 dark:bg-white/10 rounded-2xl p-5 border border-white/20 relative group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                        {opt.bankName}
                      </span>
                      <button
                        onClick={() => copyToClipboard(opt.accountNumber, idx)}
                        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-500 dark:text-gray-400"
                        title="Copy account number"
                      >
                        {copiedIndex === idx ? (
                          <span className="text-xs font-bold text-green-500">COPIED!</span>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                          </svg>
                        )}
                      </button>
                    </div>
                    <p className="text-xl font-mono font-black text-gray-800 dark:text-gray-200 tracking-wider mb-1">
                      {opt.accountNumber}
                    </p>
                    <h4 className="text-sm font-bold text-gray-600 dark:text-gray-400">
                      {opt.accountName}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

