import React, { useState, useRef, useEffect } from 'react';
import { 
  X, Send, Sparkles, RefreshCw, Key, 
  CheckCircle2, Bot, ChevronDown, 
  ExternalLink, MessageSquare, Zap
} from 'lucide-react';
import { getInstantBotResponse } from '../utils/ucpBotKnowledge';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actionLink?: { label: string; url: string };
  suggestions?: string[];
  isAi?: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'welcome-1',
    sender: 'bot',
    text: "👋 Assalam-o-Alaikum! I'm **UCP Bot**, your official AI assistant for **UCP Bahawalpur Campus** 🎓.\n\nAsk me anything about our 27 degree programs, fee plans, admissions, or scholarships — I respond instantly with official campus information!",
    time: 'Just now',
    suggestions: [
      "Degree Programs 🎓",
      "ADP Artificial Intelligence 🤖",
      "Fee Structure 💰",
      "Scholarships 🏆",
      "Admission Eligibility 📋",
      "Contact & Location 📍"
    ]
  }
];

export const UcpChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasPromptTooltip, setHasPromptTooltip] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [customApiKey, setCustomApiKey] = useState('');
  const [apiStatus, setApiStatus] = useState<{ hasKey: boolean; model: string } | null>(null);
  const [preferGemini, setPreferGemini] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Check backend Gemini API status on mount
  useEffect(() => {
    fetch('/api/chat/status')
      .then((res) => res.json())
      .then((data) => {
        setApiStatus({ hasKey: !!data.hasKey, model: data.model || 'gemini-3.5-flash' });
      })
      .catch(() => {
        // Fallback: local knowledge engine is always 100% operational
        setApiStatus({ hasKey: false, model: 'local-knowledge' });
      });

    // Auto-dismiss tooltip after 8 seconds
    const timer = setTimeout(() => {
      setHasPromptTooltip(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    setInputValue('');
    setHasPromptTooltip(false);

    const userMsgId = `user-${Date.now()}`;
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMessages: Message[] = [
      ...messages,
      {
        id: userMsgId,
        sender: 'user',
        text: query,
        time: currentTime
      }
    ];
    setMessages(newMessages);
    setIsLoading(true);

    // Prepare conversation history
    const conversationHistory = newMessages.slice(-6).map((m) => ({
      role: m.sender === 'user' ? ('user' as const) : ('model' as const),
      text: m.text
    }));

    let botReplyText = '';
    let isFromAi = false;
    let actionLink: { label: string; url: string } | undefined;
    let suggestions: string[] | undefined;

    // First attempt server Gemini AI route if preferred
    if (preferGemini) {
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: query,
            history: conversationHistory,
            apiKey: customApiKey || undefined
          })
        });

        if (response.ok) {
          const data = await response.json();
          if (data.success && data.reply) {
            botReplyText = data.reply;
            isFromAi = true;
          }
        }
      } catch (err) {
        // Network/server error -> fallback seamlessly to instant local engine
        console.warn('Gemini server fallback to local knowledge:', err);
      }
    }

    // Fallback or Instant Knowledge Engine
    if (!botReplyText) {
      const localResult = getInstantBotResponse(query);
      botReplyText = localResult.reply;
      actionLink = localResult.actionLink;
      suggestions = localResult.suggestions;
      isFromAi = false;
    }

    const botMsgId = `bot-${Date.now()}`;
    setMessages((prev) => [
      ...prev,
      {
        id: botMsgId,
        sender: 'bot',
        text: botReplyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionLink,
        suggestions,
        isAi: isFromAi
      }
    ]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* =========================================================================
          1. CHAT WINDOW MODAL
          ========================================================================= */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[94vw] sm:w-[410px] h-[560px] max-h-[84vh] bg-white rounded-3xl shadow-[0_12px_50px_rgba(10,25,49,0.28)] border border-slate-200/80 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-250 select-text"
          role="dialog"
          aria-label="UCP Bot Assistant"
        >
          {/* Header */}
          <div className="bg-[#0A1931] text-white p-4 flex items-center justify-between border-b-2 border-[#B91C1C] relative">
            <div className="flex items-center gap-3">
              {/* Cute Bot Avatar */}
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0F2C52] to-[#1E3A8A] border border-[#FFC700]/70 flex items-center justify-center shadow-md">
                {/* Robot SVG with graduation cap */}
                <svg className="w-6 h-6 text-[#FFC700]" viewBox="0 0 24 24" fill="currentColor">
                  {/* Graduation Cap */}
                  <path d="M12 2L1 7L12 12L23 7L12 2Z" fill="#FFC700" />
                  <path d="M5 9.5V14C5 17 8 19 12 19C16 19 19 17 19 14V9.5L12 13.5L5 9.5Z" fill="#FFFFFF" fillOpacity="0.25" />
                  {/* Cute Bot Eyes */}
                  <circle cx="9" cy="14" r="1.5" fill="#38BDF8" />
                  <circle cx="15" cy="14" r="1.5" fill="#38BDF8" />
                  {/* Smile */}
                  <path d="M10 16.5C10.5 17.2 11.2 17.5 12 17.5C12.8 17.5 13.5 17.2 14 16.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                </svg>
                {/* Glowing Online Dot */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0A1931] animate-pulse" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white tracking-wide">UCP Bot</h3>
                  <span className="px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 text-[10px] font-mono rounded border border-emerald-500/40 font-semibold">
                    ONLINE
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 font-sans">
                  Bahawalpur Campus Assistant 🎓
                </p>
              </div>
            </div>

            {/* Header Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ${showSettings ? 'bg-white/20 text-[#FFC700]' : ''}`}
                title="AI & Key Settings"
                aria-label="Settings"
              >
                <Key size={16} />
              </button>

              <button
                onClick={handleClearChat}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Clear conversation"
                aria-label="Reset Chat"
              >
                <RefreshCw size={15} />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ml-1"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Optional Settings Panel */}
          {showSettings && (
            <div className="bg-slate-100 border-b border-slate-200 p-3 text-xs space-y-2.5 animate-in slide-in-from-top-2 duration-150">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0A1931] flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#B91C1C]" /> AI Mode & Configuration
                </span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-semibold">
                  {apiStatus?.hasKey ? 'Gemini 3.5 Flash Active' : 'Instant Knowledge Active'}
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-600">
                <span>Respond using Gemini AI:</span>
                <button
                  onClick={() => setPreferGemini(!preferGemini)}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold cursor-pointer transition-colors ${
                    preferGemini ? 'bg-[#0A1931] text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {preferGemini ? 'Enabled (AI)' : 'Instant Offline Only'}
                </button>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 font-medium block">
                  Custom Gemini API Key (Optional):
                </label>
                <input
                  type="password"
                  value={customApiKey}
                  onChange={(e) => setCustomApiKey(e.target.value)}
                  placeholder="AIzaSy... (Leave blank to use server key)"
                  className="w-full px-2.5 py-1 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:border-[#0A1931] font-mono"
                />
              </div>
            </div>
          )}

          {/* Conversation Thread */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8FAFC]/50 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-1`}
              >
                {/* Sender badge */}
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 px-1 font-mono">
                  {msg.sender === 'bot' ? (
                    <>
                      <Bot size={11} className="text-[#0A1931]" />
                      <span className="font-semibold text-slate-600">UCP Bot</span>
                      {msg.isAi && (
                        <span className="text-[9px] bg-indigo-50 text-indigo-700 px-1 rounded border border-indigo-200">
                          Gemini 3.5
                        </span>
                      )}
                    </>
                  ) : (
                    <span>You</span>
                  )}
                  <span>•</span>
                  <span>{msg.time}</span>
                </div>

                {/* Bubble */}
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-wrap break-words text-[12.5px] ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#0A1931] to-[#1E3A8A] text-white rounded-tr-xs shadow-sm font-sans'
                      : 'bg-white text-slate-800 rounded-tl-xs border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] font-sans'
                  }`}
                >
                  {msg.text}

                  {/* Action Link button */}
                  {msg.actionLink && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100">
                      <a
                        href={msg.actionLink.url}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B91C1C] hover:underline"
                      >
                        {msg.actionLink.label} <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </div>

                {/* Suggestions Chips */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1 max-w-[90%]">
                    {msg.suggestions.map((sug, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(sug.replace(/[^\w\s&]/gi, '').trim())}
                        className="px-2.5 py-1 bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-700 border border-slate-300 rounded-full text-[11px] font-medium transition-colors shadow-2xs cursor-pointer flex items-center gap-1"
                      >
                        <span>{sug}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-slate-400 text-xs px-2 py-1">
                <div className="w-6 h-6 rounded-xl bg-[#0A1931] flex items-center justify-center text-[#FFC700]">
                  <Sparkles size={13} className="animate-spin" />
                </div>
                <span className="font-mono text-[11px] text-slate-500 animate-pulse">
                  UCP Bot is typing...
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Shortcuts Pill Strip */}
          <div className="px-3 py-1.5 bg-slate-50 border-t border-slate-200/70 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono scrollbar-none">
            <span className="text-slate-400 flex items-center gap-1 flex-shrink-0 text-[10px]">
              <Zap size={11} className="text-[#FFC700]" /> Ask:
            </span>
            <button
              onClick={() => handleSendMessage("What degree programs are offered?")}
              className="px-2 py-0.5 bg-white border border-slate-200 text-slate-600 rounded whitespace-nowrap hover:bg-slate-100 cursor-pointer"
            >
              Programs
            </button>
            <button
              onClick={() => handleSendMessage("Tell me about ADP Artificial Intelligence")}
              className="px-2 py-0.5 bg-white border border-slate-200 text-slate-600 rounded whitespace-nowrap hover:bg-slate-100 cursor-pointer text-[#B91C1C] font-semibold"
            >
              ADP AI
            </button>
            <button
              onClick={() => handleSendMessage("What is the fee structure?")}
              className="px-2 py-0.5 bg-white border border-slate-200 text-slate-600 rounded whitespace-nowrap hover:bg-slate-100 cursor-pointer"
            >
              Fees
            </button>
            <button
              onClick={() => handleSendMessage("How much scholarship can I get?")}
              className="px-2 py-0.5 bg-white border border-slate-200 text-slate-600 rounded whitespace-nowrap hover:bg-slate-100 cursor-pointer"
            >
              Scholarships
            </button>
            <button
              onClick={() => handleSendMessage("What is the admission eligibility?")}
              className="px-2 py-0.5 bg-white border border-slate-200 text-slate-600 rounded whitespace-nowrap hover:bg-slate-100 cursor-pointer"
            >
              Eligibility
            </button>
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask UCP Bot anything about campus..."
                disabled={isLoading}
                className="flex-1 px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-[#0A1931] focus:bg-white text-slate-800 placeholder-slate-400 font-sans transition-colors"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isLoading}
                className="w-9 h-9 rounded-xl bg-[#0A1931] hover:bg-[#1E3A8A] disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer shadow-md disabled:cursor-not-allowed flex-shrink-0 active:scale-95"
                aria-label="Send Message"
              >
                <Send size={15} />
              </button>
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-400 px-1 font-sans">
              <span>⚡ Non-stop Instant Answers</span>
              <span>Official UCP Bahawalpur 🎓</span>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          2. FLOATING BOT LAUNCHER BUTTON (Bottom-Right, Under Contact Icon)
          ========================================================================= */}
      <div className="fixed bottom-5 right-5 sm:right-6 z-50 flex items-center">
        {/* Tooltip on First Visit / Hover */}
        {hasPromptTooltip && !isOpen && (
          <div className="mr-3 bg-[#0A1931] text-white text-xs px-3.5 py-2 rounded-2xl shadow-2xl border border-[#FFC700]/50 font-medium flex items-center gap-2 animate-in fade-in slide-in-from-right-3 duration-300">
            <span className="text-sm">👋</span>
            <div>
              <p className="font-bold text-[#FFC700] text-[11px] leading-tight">UCP Bot Online</p>
              <p className="text-[10px] text-slate-200">Ask about programs, fees & scholarships!</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setHasPromptTooltip(false);
              }}
              className="text-slate-400 hover:text-white p-0.5 ml-1"
            >
              <X size={12} />
            </button>
          </div>
        )}

        {/* Small Cute Bot Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setHasPromptTooltip(false);
          }}
          className={`group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(10,25,49,0.35)] transition-all duration-300 cursor-pointer focus:outline-none ${
            isOpen 
              ? 'bg-[#B91C1C] text-white rotate-90 scale-95' 
              : 'bg-gradient-to-tr from-[#0A1931] via-[#122A50] to-[#1E3A8A] text-[#FFC700] hover:scale-108 active:scale-95 border-2 border-[#FFC700]/80'
          }`}
          aria-label="Open UCP Bot Chat"
          title="UCP Bot — 24/7 Campus Assistant"
        >
          {/* Subtle pulse glow */}
          {!isOpen && (
            <span className="absolute -inset-1 rounded-full bg-[#38BDF8] opacity-35 group-hover:opacity-60 blur-xs animate-pulse" />
          )}

          {isOpen ? (
            <X size={24} className="relative z-10" />
          ) : (
            <>
              {/* Cute Robot SVG Icon */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                  {/* Graduation Mortarboard Cap */}
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FFC700" />
                  <path d="M22 7V13" stroke="#FFC700" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="22" cy="13.5" r="1" fill="#FFC700" />
                  {/* Robot Head */}
                  <rect x="4" y="9" width="16" height="12" rx="4" fill="#FFFFFF" fillOpacity="0.15" stroke="#FFFFFF" strokeWidth="1.2" />
                  {/* Expressive Glowing Eyes */}
                  <circle cx="8.5" cy="14" r="1.5" fill="#38BDF8" className="group-hover:animate-ping" />
                  <circle cx="15.5" cy="14" r="1.5" fill="#38BDF8" />
                  {/* Cute Smile */}
                  <path d="M9.5 17.5C10.5 18.5 13.5 18.5 14.5 17.5" stroke="#FFC700" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>

              {/* Bot Name Badge Pill beneath */}
              <span className="absolute -top-1.5 -right-1 px-1.5 py-0.2 bg-[#B91C1C] text-white text-[9px] font-bold rounded-full border border-white font-mono shadow-xs tracking-tight">
                BOT
              </span>
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default UcpChatbot;
