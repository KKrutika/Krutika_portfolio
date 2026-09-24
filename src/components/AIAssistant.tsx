import { useEffect, useRef, useState } from "react";
import { Bot, Send, X, Sparkles } from "lucide-react";

const initialMessage = {
  role: "assistant",
  content:
    "Hi! 👋 I'm Krutika's project assistant. I can help you explore her work or get your project started. What are you looking to build?",
};

export default function AIAssistant({ isOpen, onClose }) {
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (messageText = input) => {
    const text = messageText.trim();

    if (!text || loading) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Request failed");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch (error) {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="ai-overlay">
      <div className="ai-assistant">
        <div className="ai-header">
          <div className="ai-header-info">
            <div className="ai-avatar">
              <Bot size={20} />
            </div>

            <div>
              <h3>Project Assistant</h3>
              <span>
                <span className="ai-status-dot" />
                Online
              </span>
            </div>
          </div>

          <button
            className="ai-close"
            onClick={onClose}
            aria-label="Close AI assistant"
          >
            <X size={20} />
          </button>
        </div>

        <div className="ai-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`ai-message ${
                message.role === "user" ? "user-message" : "bot-message"
              }`}
            >
              {message.content}
            </div>
          ))}

          {loading && (
            <div className="ai-message bot-message ai-typing">
              <span />
              <span />
              <span />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {messages.length === 1 && (
          <div className="ai-suggestions">
            <button onClick={() => sendMessage("I want to start a project")}>
              <Sparkles size={15} />
              Start a project
            </button>

            <button
              onClick={() => sendMessage("I want to know about Krutika's work")}
            >
              Explore work
            </button>
          </div>
        )}

        <form
          className="ai-input-area"
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
          }}
        >
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Tell me about your project..."
            disabled={loading}
          />

          <button
            type="submit"
            disabled={!input.trim() || loading}
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}