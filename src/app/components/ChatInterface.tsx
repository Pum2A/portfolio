// components/ChatInterface.tsx (Nowy komponent!)
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! How can I help you today?", isUser: false },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    setMessages([...messages, 
      { id: messages.length + 1, text: inputText, isUser: true },
      { id: messages.length + 2, text: "Thanks for your message!", isUser: false }
    ]);
    setInputText("");
  };

  return (
    <div className="max-w-2xl mx-auto bg-sections rounded-2xl p-6 border border-border">
      <div className="h-96 overflow-y-auto mb-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs p-4 rounded-2xl ${
                  message.isUser 
                    ? "bg-accents text-background" 
                    : "bg-background text-text"
                }`}
              >
                {message.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex gap-2">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 px-4 py-3 bg-background rounded-lg border border-border"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="px-6 py-3 bg-accents text-background rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};