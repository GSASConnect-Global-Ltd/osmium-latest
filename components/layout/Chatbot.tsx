"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, MessageCircle, ArrowDownCircleIcon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  sender: "user" | "ai";
  text: string;
};

export default function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatIcon, setShowChatIcon] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (window.scrollY > 0) setShowChatIcon(true);
    else {
      setShowChatIcon(false);
      setIsChatOpen(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev: Message[]) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      if (data.reply) {
        const aiMessage: Message = { sender: "ai", text: data.reply };
        setMessages((prev: Message[]) => [...prev, aiMessage]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {showChatIcon && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <button
              onClick={toggleChat}
              className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-green-400 hover:opacity-90 text-white shadow-lg transition"
            >
              {isChatOpen ? (
                <ArrowDownCircleIcon className="w-6 h-6" />
              ) : (
                <MessageCircle className="w-6 h-6" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-4 z-50 w-[95%] md:w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-gray-100 bg-gradient-to-r from-green-100 to-blue-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-green-600" />
                <h2 className="font-semibold text-gray-800">Ask our AI anything</h2>
              </div>
              <button
                onClick={toggleChat}
                className="p-1 rounded-full hover:bg-gray-200 transition"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 flex-1 overflow-y-auto text-gray-700 space-y-3 bg-gradient-to-b from-white to-green-50">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Sparkles className="w-6 h-6 text-green-500 mb-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Ask our AI anything
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    You can ask about your projects, reports, or software features.
                  </p>

                  {/* Example Suggestions */}
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {[
                      "What can I ask you to do?",
                      "Which one of my projects is performing best?",
                      "What projects should I be concerned about right now?",
                    ].map((q, i) => (
                      <button
                        key={i}
                        onClick={() => setInput(q)}
                        className="text-sm bg-green-100 hover:bg-green-200 text-gray-800 px-3 py-1.5 rounded-full transition"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-3 py-2 rounded-xl max-w-[75%] text-sm ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-blue-500 to-green-400 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
              {loading && (
                <p className="text-sm text-gray-500 italic">AI is thinking...</p>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="flex items-center border-t border-gray-200 bg-white px-3 py-2">
              <input
                type="text"
                placeholder="Ask me anything about your projects..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 bg-transparent outline-none px-3 py-2 text-sm text-gray-700 placeholder-gray-400"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="p-2 bg-gradient-to-r from-blue-500 to-green-400 hover:opacity-90 rounded-full text-white transition disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8l16-4-7 16-2-7-7-5z"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
