import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const chatEndpoint = "https://myself-backend.vercel.app/api/chat";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi, I am Manoj's portfolio assistant. Ask me about his work, skills, or projects.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (!messagesRef.current) return;
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages, isLoading, isOpen]);

  const sendMessage = async (event) => {
    event.preventDefault();

    const message = input.trim();
    if (!message || isLoading) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: message,
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(chatEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = await response.json();
      const reply = data?.reply || "I could not find a response for that.";

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: reply,
        },
      ]);
    } catch (error) {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: `error-${Date.now()}`,
          sender: "bot",
          text: "Error. Try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="portfolio-chatbot"
            data-lenis-prevent
            className="flex h-[28rem] min-h-0 w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-[1.6rem] border border-white/12 bg-[#070914]/95 text-white shadow-[0_24px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.24 }}
          >
            <div className="border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">
                  Manoj AI
                </p>
                <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                  Beta
                </span>
              </div>
              <p className="mt-1 text-sm text-white/56">
                Ask about experience, skills, and projects.
              </p>
            </div>

            <div
              ref={messagesRef}
              data-lenis-prevent
              onWheelCapture={(event) => event.stopPropagation()}
              onTouchMoveCapture={(event) => event.stopPropagation()}
              className="chat-messages-scroll flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.sender === "user"
                      ? "self-end bg-cyan-200 text-slate-950"
                      : "self-start border border-white/10 bg-white/[0.07] text-white/72"
                  }`}
                >
                  {message.text}
                </div>
              ))}

              {isLoading ? (
                <div className="max-w-[82%] self-start rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm text-white/54">
                  Typing...
                </div>
              ) : null}
            </div>

            <form
              className="flex gap-2 border-t border-white/10 p-3"
              onSubmit={sendMessage}
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask Manoj..."
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-200/45"
              />
              <button
                type="submit"
                className="rounded-full bg-cyan-200 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isLoading}
              >
                Send
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        className="h-14 rounded-full border border-cyan-200/30 bg-cyan-200 px-5 text-xs font-bold uppercase tracking-[0.22em] text-slate-950 shadow-[0_12px_45px_rgba(103,232,249,0.24)] transition hover:bg-white"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        aria-expanded={isOpen}
        aria-controls="portfolio-chatbot"
      >
        {isOpen ? "Close" : "Chat"}
      </motion.button>
    </div>
  );
}

export default Chatbot;
