import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  X, Send, RefreshCw, 
  ExternalLink, Sparkles, MessageSquare, ChevronRight
} from 'lucide-react';
import { getInstantBotResponse } from '../utils/ucpBotKnowledge';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actionLink?: { label: string; url: string };
  suggestions?: string[];
  isTyping?: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'welcome-1',
    sender: 'bot',
    text: "👋 Assalam-o-Alaikum! I'm **UCP Bot**, the official assistant for **University of Central Punjab (Bahawalpur Campus)**.\n\nHow can I help you today? Ask me about our 27 degree programs, admissions, fee structures, or merit scholarships.",
    time: 'Just now',
    suggestions: [
      "Degree Programs 🎓",
      "ADP Artificial Intelligence 🤖",
      "Fee Structure 💰",
      "Scholarships & Concessions 🏆",
      "Admission Eligibility 📋",
      "Contact & Location 📍"
    ],
    isTyping: false
  }
];

// Helper to render formatted Markdown text (bolding, lists, line breaks)
const renderFormattedText = (content: string) => {
  const lines = content.split('\n');
  return lines.map((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      return <div key={idx} className="h-1.5" />;
    }

    const isBullet = trimmed.startsWith('•') || trimmed.startsWith('- ');
    const cleanedLine = isBullet ? trimmed.replace(/^[•\-]\s*/, '') : line;

    // Process **bold** and *italic*
    const parts = cleanedLine.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    const renderedParts = parts.map((part, pIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={pIdx} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={pIdx} className="italic text-slate-700">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });

    if (isBullet) {
      return (
        <div key={idx} className="flex items-start gap-2 my-1 text-slate-700">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] mt-2 shrink-0" />
          <span className="flex-1 leading-relaxed">{renderedParts}</span>
        </div>
      );
    }

    return (
      <p key={idx} className="my-0.5 leading-relaxed">
        {renderedParts}
      </p>
    );
  });
};

// Typewriter Text Component with smooth streaming animation
interface TypewriterTextProps {
  text: string;
  isTyping: boolean;
  onFinish?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, isTyping, onFinish }) => {
  const [displayedLength, setDisplayedLength] = useState(isTyping ? 0 : text.length);

  useEffect(() => {
    if (!isTyping) {
      setDisplayedLength(text.length);
      return;
    }

    let currentIndex = 0;
    const totalLength = text.length;
    // Step by 2-3 characters every 16ms for a natural, smooth ChatGPT-like typing speed
    const stepSize = Math.max(2, Math.floor(totalLength / 60));
    const interval = setInterval(() => {
      currentIndex = Math.min(totalLength, currentIndex + stepSize);
      setDisplayedLength(currentIndex);
      if (currentIndex >= totalLength) {
        clearInterval(interval);
        onFinish?.();
      }
    }, 16);

    return () => clearInterval(interval);
  }, [text, isTyping, onFinish]);

  const visibleText = text.slice(0, displayedLength);
  const stillTyping = isTyping && displayedLength < text.length;

  return (
    <div
      onClick={() => {
        if (stillTyping) {
          setDisplayedLength(text.length);
          onFinish?.();
        }
      }}
      className={stillTyping ? 'cursor-pointer select-none' : ''}
      title={stillTyping ? 'Click to show full response' : undefined}
    >
      {renderFormattedText(visibleText)}
      {stillTyping && (
        <span
          className="inline-block w-1.5 h-3.5 bg-[#0A1931] ml-0.5 rounded-xs animate-pulse align-middle"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

// Reusable Official Bot Mascot Avatar
const BotAvatar: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  }[size];

  return (
    <div className={`relative ${sizeClasses} rounded-full overflow-hidden shrink-0 border border-slate-200/90 shadow-2xs bg-white flex items-center justify-center ${className}`}>
      <img
        src="/assets/ucp-bot-avatar.jpg"
        alt="UCP Bot"
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.currentTarget;
          if (!target.dataset.triedFallback) {
            target.dataset.triedFallback = 'true';
            target.src = '/ucp-bot-avatar.jpg';
          }
        }}
      />
    </div>
  );
};

export const UcpChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasPromptTooltip, setHasPromptTooltip] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of conversation
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading, scrollToBottom]);

  // Auto-dismiss tooltip after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPromptTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  const handleFinishTyping = (messageId: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === messageId ? { ...m, isTyping: false } : m))
    );
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    setInputValue('');
    setHasPromptTooltip(false);

    const userMsgId = `user-${Date.now()}`;
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMessages: Message[] = [
      ...messages.map((m) => ({ ...m, isTyping: false })),
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
    let actionLink: { label: string; url: string } | undefined;
    let suggestions: string[] | undefined;

    // First attempt server route
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: conversationHistory
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.reply) {
          botReplyText = data.reply;
        }
      }
    } catch {
      // Fallback silently to instant knowledge engine
    }

    // Fallback to Instant Knowledge Engine if server did not respond
    if (!botReplyText) {
      const localResult = getInstantBotResponse(query);
      botReplyText = localResult.reply;
      actionLink = localResult.actionLink;
      suggestions = localResult.suggestions;
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
        isTyping: true
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
    inputRef.current?.focus();
  };

  return (
    <>
      {/* =========================================================================
          1. CHAT WINDOW (Clean, Minimal, ChatGPT-Style, Official UCP Branding)
          ========================================================================= */}
      {isOpen && (
        <div 
          className="fixed bottom-22 right-4 sm:right-6 z-50 w-[94vw] sm:w-[420px] h-[580px] max-h-[85vh] bg-white rounded-2xl shadow-[0_16px_60px_rgba(10,25,49,0.22)] border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 select-text font-sans"
          role="dialog"
          aria-label="UCP Bot Assistant"
        >
          {/* Header */}
          <div className="bg-[#0A1931] text-white px-4 py-3.5 flex items-center justify-between border-b-2 border-[#B91C1C] relative select-none">
            <div className="flex items-center gap-3">
              {/* Mascot Logo Avatar */}
              <div className="relative">
                <BotAvatar size="md" className="border-white/20 shadow-sm ring-2 ring-white/10" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#0A1931]" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-white tracking-tight">UCP Bot</h3>
                  <span className="px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 text-[10px] rounded font-medium">
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Official Campus Assistant
                </p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Restart conversation"
                aria-label="Reset Chat"
              >
                <RefreshCw size={15} />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Close chat"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Conversation Feed */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-[#F8FAFC]/60 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {/* Bot Avatar beside bot messages */}
                {msg.sender === 'bot' && (
                  <BotAvatar size="sm" className="mt-1" />
                )}

                <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} max-w-[85%]`}>
                  {/* Message Bubble */}
                  <div
                    className={`rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-[#0A1931] text-white rounded-tr-xs'
                        : 'bg-white text-slate-800 rounded-tl-xs border border-slate-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.03)]'
                    }`}
                  >
                    {msg.sender === 'bot' ? (
                      <TypewriterText
                        text={msg.text}
                        isTyping={!!msg.isTyping}
                        onFinish={() => handleFinishTyping(msg.id)}
                      />
                    ) : (
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    )}

                    {/* Action link if available */}
                    {msg.actionLink && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100">
                        <a
                          href={msg.actionLink.url}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 hover:bg-red-100 text-[#B91C1C] border border-red-200/70 rounded-lg text-xs font-semibold transition-colors"
                        >
                          <span>{msg.actionLink.label}</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Suggestion Chips */}
                  {msg.suggestions && msg.suggestions.length > 0 && !msg.isTyping && (
                    <div className="flex flex-wrap gap-1.5 pt-2 max-w-full">
                      {msg.suggestions.map((sug, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(sug.replace(/[^\w\s&]/gi, '').trim())}
                          className="px-2.5 py-1 bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-700 hover:text-[#0A1931] border border-slate-200 hover:border-slate-300 rounded-full text-[11.5px] font-medium transition-colors shadow-2xs cursor-pointer flex items-center gap-1 text-left"
                        >
                          <span>{sug}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Timestamp */}
                  <span className="text-[10px] text-slate-400 mt-1 px-1">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {/* Thinking / Loading indicator */}
            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <BotAvatar size="sm" className="mt-1" />
                <div className="bg-white border border-slate-200/80 rounded-2xl rounded-tl-xs px-4 py-3 shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0A1931] animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 rounded-full bg-[#0A1931] animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-[#0A1931] animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Shortcuts Bar (Clean, Minimalist) */}
          <div className="px-3 py-1.5 bg-slate-50 border-t border-slate-200/70 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-none select-none">
            <button
              onClick={() => handleSendMessage("What degree programs are offered?")}
              className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 hover:text-[#0A1931] rounded-full whitespace-nowrap hover:bg-slate-100 cursor-pointer transition-colors"
            >
              Programs 🎓
            </button>
            <button
              onClick={() => handleSendMessage("Tell me about ADP Artificial Intelligence")}
              className="px-2.5 py-1 bg-white border border-slate-200 text-[#B91C1C] hover:bg-red-50 rounded-full whitespace-nowrap font-medium cursor-pointer transition-colors"
            >
              ADP AI 🤖
            </button>
            <button
              onClick={() => handleSendMessage("What is the fee structure?")}
              className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 hover:text-[#0A1931] rounded-full whitespace-nowrap hover:bg-slate-100 cursor-pointer transition-colors"
            >
              Fee Structure 💰
            </button>
            <button
              onClick={() => handleSendMessage("How much scholarship can I get?")}
              className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 hover:text-[#0A1931] rounded-full whitespace-nowrap hover:bg-slate-100 cursor-pointer transition-colors"
            >
              Scholarships 🏆
            </button>
            <button
              onClick={() => handleSendMessage("What is the admission eligibility?")}
              className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 hover:text-[#0A1931] rounded-full whitespace-nowrap hover:bg-slate-100 cursor-pointer transition-colors"
            >
              Eligibility 📋
            </button>
          </div>

          {/* Input Bar (ChatGPT-style minimalist clean box) */}
          <div className="p-3 bg-white border-t border-slate-200 select-none">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-300/80 rounded-xl px-3 py-1.5 focus-within:border-[#0A1931] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#0A1931]/10 transition-all">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask UCP Bot about programs, fees..."
                disabled={isLoading}
                className="flex-1 text-[13px] bg-transparent focus:outline-none text-slate-800 placeholder-slate-400 py-1"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isLoading}
                className="w-8 h-8 rounded-lg bg-[#0A1931] hover:bg-[#1E3A8A] disabled:opacity-30 disabled:bg-slate-300 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs disabled:cursor-not-allowed shrink-0"
                aria-label="Send Message"
              >
                <Send size={14} />
              </button>
            </div>
            <div className="mt-1.5 text-center text-[10px] text-slate-400">
              Official University of Central Punjab Assistant • Bahawalpur
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          2. FLOATING BOT LAUNCHER BUTTON (Bottom-Right with Mascot Logo)
          ========================================================================= */}
      <div className="fixed bottom-5 right-5 sm:right-6 z-50 flex items-center">
        {/* Tooltip on First Visit */}
        {hasPromptTooltip && !isOpen && (
          <div className="mr-3 bg-[#0A1931] text-white text-xs px-3 py-2 rounded-xl shadow-xl border border-[#FFC700]/50 font-medium flex items-center gap-2 animate-in fade-in slide-in-from-right-3 duration-200">
            <div>
              <p className="font-semibold text-[#FFC700] text-[11px] leading-tight">UCP Bot Online</p>
              <p className="text-[10px] text-slate-200">Ask about programs & admissions</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setHasPromptTooltip(false);
              }}
              className="text-slate-400 hover:text-white p-0.5 ml-0.5 cursor-pointer"
            >
              <X size={12} />
            </button>
          </div>
        )}

        {/* Mascot Avatar Launcher Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setHasPromptTooltip(false);
          }}
          className={`group relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(10,25,49,0.28)] transition-all duration-200 cursor-pointer focus:outline-none border-2 ${
            isOpen 
              ? 'bg-[#B91C1C] text-white border-white rotate-90 scale-95' 
              : 'bg-white border-[#0A1931] hover:scale-108 active:scale-95 ring-2 ring-[#FFC700]/60'
          }`}
          aria-label="Open UCP Bot Chat"
          title="UCP Bot — Official Campus Assistant"
        >
          {isOpen ? (
            <X size={22} className="text-white" />
          ) : (
            <>
              {/* Mascot Logo Image */}
              <div className="w-full h-full rounded-full overflow-hidden p-0.5 bg-white flex items-center justify-center">
                <img
                  src="/assets/ucp-bot-avatar.jpg"
                  alt="UCP Bot Mascot"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = '/ucp-bot-avatar.jpg';
                    }
                  }}
                />
              </div>

              {/* Green online dot badge */}
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white shadow-xs" />
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default UcpChatbot;
