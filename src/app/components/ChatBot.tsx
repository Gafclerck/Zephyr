import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { MessageCircle, X, Send, Bot, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  typing?: boolean;
}

const SYSTEM_PROMPT = `Tu es l'assistant intelligent de Zephyr, une agence digitale premium basée à Dakar, Sénégal.

Zephyr propose:
- Développement web (sites vitrine, e-commerce, SaaS) — à partir de 500 000 FCFA
- Applications mobiles iOS & Android — à partir de 2 000 000 FCFA
- Branding & identité visuelle — à partir de 300 000 FCFA
- Marketing digital (SEO, réseaux sociaux, campagnes) — à partir de 150 000 FCFA/mois

Processus: Découverte → Design → Développement → Lancement

Ton style: direct, professionnel, orienté résultats. Réponds en français sauf si on t'adresse en anglais.
Réponses courtes et percutantes (2-4 phrases max). Propose toujours une action concrète.
Si quelqu'un veut démarrer un projet, redirige vers /contact.`;

async function callClaude(messages: Array<{ role: string; content: string }>): Promise<string> {
  const apiKey = (import.meta as Record<string, unknown> & { env: Record<string, string> }).env.VITE_ANTHROPIC_API_KEY;

  if (!apiKey) throw new Error("No API key");

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages,
    }),
  });

  if (!response.ok) throw new Error("API error");
  const data = await response.json();
  return data.content?.[0]?.text ?? "Je n'ai pas pu traiter votre demande.";
}

function getFallbackResponse(input: string): { text: string; quickReplies?: string[] } {
  const l = input.toLowerCase();

  if (l.includes("website") || l.includes("site") || l.includes("web"))
    return {
      text: "Nos sites web démarrent à 500 000 FCFA. Délai : 2 à 6 semaines selon la complexité. On livre responsive, rapide, optimisé SEO.",
      quickReplies: ["Voir le portfolio", "Demander un devis", "Voir les services"],
    };

  if (l.includes("mobile") || l.includes("app") || l.includes("ios") || l.includes("android"))
    return {
      text: "Applications iOS & Android à partir de 2 000 000 FCFA. On utilise React Native pour couvrir les deux plateformes en un seul code.",
      quickReplies: ["Démarrer un projet", "Voir le portfolio"],
    };

  if (l.includes("brand") || l.includes("logo") || l.includes("design") || l.includes("identit"))
    return {
      text: "Notre pack Branding complet démarre à 300 000 FCFA : logo, charte graphique, guidelines, kit réseaux sociaux. Délai : 2-3 semaines.",
      quickReplies: ["Voir le portfolio", "Démarrer un projet"],
    };

  if (l.includes("marketing") || l.includes("seo") || l.includes("social") || l.includes("pub"))
    return {
      text: "Marketing digital à partir de 150 000 FCFA/mois : SEO, gestion réseaux sociaux, campagnes Google & Meta. Minimum 3 mois.",
      quickReplies: ["En savoir plus", "Démarrer"],
    };

  if (l.includes("prix") || l.includes("tarif") || l.includes("cout") || l.includes("price") || l.includes("budget"))
    return {
      text: "Sites web: dès 500K FCFA · Apps mobile: dès 2M FCFA · Branding: dès 300K FCFA · Marketing: dès 150K FCFA/mois. Tout est personnalisable.",
      quickReplies: ["Demander un devis", "Voir les services"],
    };

  if (l.includes("contact") || l.includes("devis") || l.includes("quote") || l.includes("démarrer") || l.includes("projet"))
    return {
      text: "Parfait. Je vous transfère vers notre formulaire de contact. Vous aurez une réponse sous 24h.",
      quickReplies: ["Aller au formulaire"],
    };

  if (l.includes("portfolio") || l.includes("work") || l.includes("projet") || l.includes("réalisation"))
    return {
      text: "Découvrez nos réalisations : e-commerce, SaaS, apps mobiles, rebranding. Plus de 150 projets livrés.",
      quickReplies: ["Voir le portfolio"],
    };

  return {
    text: "Je suis là pour vous aider. Que cherchez-vous à créer ?",
    quickReplies: ["Site web", "Application mobile", "Branding", "Marketing digital", "Tarifs"],
  };
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [useAI, setUseAI] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Conversation history for Claude API
  const conversationHistory = useRef<Array<{ role: string; content: string }>>([]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => addBotMessage(
        "Bonjour ! Je suis l'assistant Zephyr. Comment puis-je vous aider aujourd'hui ?",
        ["Site web", "Application mobile", "Branding", "Marketing", "Tarifs"]
      ), 400);
    }
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  const addBotMessage = (text: string, quickReplies?: string[]) => {
    const typingId = "typing-" + Date.now();
    setMessages((p) => [...p, { id: typingId, text: "", sender: "bot", typing: true }]);
    setTimeout(() => {
      setMessages((p) => p
        .filter((m) => m.id !== typingId)
        .concat({ id: Date.now().toString(), text, sender: "bot", ...(quickReplies ? { quickReplies } : {}) } as Message & { quickReplies?: string[] })
      );
    }, 700);
  };

  const handleNavigation = (text: string) => {
    const l = text.toLowerCase();
    if (l.includes("formulaire") || l.includes("contact")) { navigate("/contact"); setIsOpen(false); }
    else if (l.includes("portfolio") || l.includes("réalisation")) { navigate("/portfolio"); setIsOpen(false); }
    else if (l.includes("service")) { navigate("/services"); setIsOpen(false); }
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    setMessages((p) => [...p, { id: Date.now().toString(), text, sender: "user" }]);
    setInput("");
    setLoading(true);
    conversationHistory.current.push({ role: "user", content: text });

    handleNavigation(text);

    try {
      if (!useAI) throw new Error("fallback");
      const reply = await callClaude(conversationHistory.current);
      conversationHistory.current.push({ role: "assistant", content: reply });
      setMessages((p) => [...p, { id: Date.now().toString(), text: reply, sender: "bot" }]);
    } catch {
      if (useAI && !text.toLowerCase().includes("fallback")) setUseAI(false);
      const { text: fallbackText, quickReplies } = getFallbackResponse(text);
      conversationHistory.current.push({ role: "assistant", content: fallbackText });
      addBotMessage(fallbackText, quickReplies);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="chat-btn"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#1A3AFF] text-white flex items-center justify-center shadow-lg shadow-[#1A3AFF]/30 hover:bg-[#0D2FE0] transition-colors"
            aria-label="Ouvrir le chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-4rem)] flex flex-col bg-background border border-[#1A3AFF]/20 shadow-2xl shadow-black/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#1A3AFF]/15 bg-[#1A3AFF]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-['Orbitron'] text-sm tracking-wide">Zephyr AI</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/70 text-xs">En ligne</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors p-1"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => { setIsOpen(false); setMessages([]); conversationHistory.current = []; }}
                  className="text-white/70 hover:text-white transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[82%] px-4 py-3 text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#1A3AFF] text-white"
                          : "bg-muted text-foreground border border-[#1A3AFF]/10"
                      }`}
                    >
                      {msg.typing ? (
                        <div className="flex gap-1 items-center py-0.5">
                          {[0, 0.15, 0.3].map((delay, i) => (
                            <motion.span
                              key={i}
                              className="w-1.5 h-1.5 rounded-full bg-[#1A3AFF]"
                              animate={{ y: [0, -6, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay }}
                            />
                          ))}
                        </div>
                      ) : (
                        <>
                          <p className="whitespace-pre-line">{msg.text}</p>
                          {(msg as Message & { quickReplies?: string[] }).quickReplies && (
                            <div className="flex flex-wrap gap-1.5 mt-3">
                              {((msg as Message & { quickReplies?: string[] }).quickReplies ?? []).map((reply) => (
                                <button
                                  key={reply}
                                  onClick={() => sendMessage(reply)}
                                  className="px-2.5 py-1 text-xs border border-[#1A3AFF]/30 text-[#1A3AFF] hover:bg-[#1A3AFF] hover:text-white transition-colors"
                                >
                                  {reply}
                                </button>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-[#1A3AFF]/15">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage(input)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 px-3 py-2 text-sm bg-muted border border-[#1A3AFF]/15 text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#1A3AFF]/40 transition-colors"
                  disabled={loading}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={loading || !input.trim()}
                  className="w-10 h-10 flex items-center justify-center bg-[#1A3AFF] text-white hover:bg-[#0D2FE0] disabled:opacity-40 transition-colors shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-muted-foreground/50 text-[10px] mt-2 text-center">
                {useAI ? "✦ Propulsé par Claude AI" : "Assistant Zephyr"}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
