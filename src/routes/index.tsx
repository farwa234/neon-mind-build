import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  Brain,
  Code2,
  Cpu,
  Github,
  ExternalLink,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageSquare,
  Send,
  Sparkles,
  Twitter,
  Workflow,
  X,
  Zap,
} from "lucide-react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
import heroNeural from "@/assets/hero-neural.jpg";
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpg";
import team3 from "@/assets/team3.jpg";
import case1 from "@/assets/case1.jpg";
import case2 from "@/assets/case2.jpg";
import case3 from "@/assets/case3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    desc: "Next-gen enterprise applications built with high-performance frameworks like the MERN stack — engineered for scale, speed, and resilience.",
    tags: ["React", "Node.js", "MongoDB", "Edge"],
  },
  {
    icon: Brain,
    title: "AI & Generative Models",
    desc: "Custom AI chatbots, NLP implementations, and predictive analytics that unlock intelligence hidden inside your data streams.",
    tags: ["LLMs", "NLP", "Vector DB", "RAG"],
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    desc: "Seamless third-party API integrations and smart workflow systems that eliminate manual work across your operations.",
    tags: ["APIs", "Zapier", "n8n", "Webhooks"],
  },
];

const projects = [
  {
    img: case1,
    tag: "E-Commerce · AI",
    title: "AI-Powered Smart E-Commerce Platform",
    desc: "Integrated custom recommendation engine driving a 34% lift in AOV via real-time personalization.",
    stack: ["Next.js", "Pinecone", "Stripe"],
  },
  {
    img: case2,
    tag: "GenAI · SaaS",
    title: "Intelligent AI Email Generator",
    desc: "Data-driven business outreach app that composes hyper-personalized email sequences at enterprise scale.",
    stack: ["OpenAI", "Node", "Postgres"],
  },
  {
    img: case3,
    tag: "Analytics · Automation",
    title: "Automated Business Analytics Dashboard",
    desc: "Live API data visualization unifying Stripe, Google Analytics, and CRM feeds into a single command center.",
    stack: ["Stripe", "GA4", "HubSpot"],
  },
];

const team = [
  { img: team1, name: "Arjun Mehta", role: "Lead Web Architect" },
  { img: team2, name: "Nadia Reyes", role: "Head of AI & Data Science" },
  { img: team3, name: "Kai Nakamura", role: "Frontend & UI/UX Specialist" },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <CaseStudies />
      <Team />
      <Contact />
      <Footer />
      <CortexBot />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "services", label: "Services" },
    { href: "work", label: "Case Studies" },
    { href: "team", label: "Labs" },
    { href: "contact", label: "Contact" },
  ];
  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-border/40 backdrop-blur-xl bg-background/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" onClick={handleClick("top")} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg neon-border grid place-items-center bg-surface">
            <Cpu className="w-4 h-4 text-primary" />
          </div>
          <span className="font-bold tracking-tight">
            Cortex<span className="text-primary">Web</span>Labs
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={`#${l.href}`} onClick={handleClick(l.href)} className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={handleClick("contact")}
            className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:neon-glow transition-all"
          >
            Book Audit <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden w-10 h-10 grid place-items-center rounded-md border border-border text-foreground hover:border-primary/60 hover:text-primary transition-all"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={`#${l.href}`}
              onClick={handleClick(l.href)}
              className="py-3 text-sm text-muted-foreground hover:text-primary border-b border-border/30 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleClick("contact")}
            className="mt-3 inline-flex sm:hidden items-center justify-center gap-2 h-10 px-4 rounded-md text-sm font-medium bg-primary text-primary-foreground"
          >
            Book Audit <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neon-border text-xs font-mono text-primary mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              SYSTEMS ONLINE · v2.7
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              We Build{" "}
              <span className="text-primary text-glow">Intelligent Systems</span>{" "}
              that Drive Business Scale.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Cortex Web Labs combines high-performance Web Development with advanced AI Automation
              to future-proof your digital landscape.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}
                className="group inline-flex items-center gap-2 h-12 px-6 rounded-md bg-primary text-primary-foreground font-medium neon-glow hover:brightness-110 transition-all"
              >
                Book a Free Technical Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#work"
                onClick={(e) => { e.preventDefault(); scrollToId("work"); }}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-md border border-border text-foreground hover:border-primary/60 hover:text-primary transition-all"
              >
                View Case Studies
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["120+", "Systems Shipped"],
                ["$40M", "Revenue Impact"],
                ["24/7", "Uptime SLA"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-2xl font-bold text-primary">{k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden neon-border">
              <img
                src={heroNeural}
                alt="Neural network visualization"
                width={1280}
                height={1024}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-1 rounded bg-background/70 backdrop-blur border border-primary/30 text-primary">
                  ● NEURAL_MESH.LIVE
                </span>
                <span className="text-muted-foreground">latency: 12ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="// SERVICES MATRIX"
          title="A stack engineered for the intelligent web."
          subtitle="Three interconnected capabilities. One unified system for growth."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group glass-card rounded-2xl p-8 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_-20px_oklch(0.78_0.19_232/0.4)]"
            >
              <div className="w-12 h-12 rounded-xl neon-border bg-background grid place-items-center mb-6 group-hover:neon-glow transition-all">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="// FIELD DEPLOYMENTS"
          title="Case studies from the lab floor."
          subtitle="Real systems shipped for real businesses — measurably compounding."
        />
        <div className="mt-16 space-y-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`grid lg:grid-cols-2 gap-8 items-center glass-card rounded-2xl p-6 md:p-8 ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative rounded-xl overflow-hidden neon-border">
                <img
                  src={p.img}
                  alt={p.title}
                  width={960}
                  height={640}
                  loading="lazy"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div>
                <div className="text-xs font-mono text-primary tracking-wider mb-3">{p.tag}</div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:neon-glow transition-all">
                    <ExternalLink className="w-3.5 h-3.5" /> View Live Demo
                  </button>
                  <button className="inline-flex items-center gap-2 h-10 px-4 rounded-md border border-border text-sm hover:border-primary/60 hover:text-primary transition-all">
                    <Github className="w-3.5 h-3.5" /> View GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="// INSIDE THE LABS"
          title="The operators behind the systems."
          subtitle="Three co-founders. One shared obsession with elegant engineering."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="group glass-card rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-primary/50">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-4 left-4 text-xs font-mono text-primary px-2 py-1 rounded bg-background/70 backdrop-blur border border-primary/30">
                  ONLINE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-primary mt-1">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [bottleneck, setBottleneck] = useState("Website load time / Performance");
  const options = [
    "Website load time / Performance",
    "Manual data entry / Operations",
    "Customer Support load",
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="// INITIATE HANDSHAKE"
          title="Book your free technical audit."
          subtitle="Tell us where you're stuck. We'll return with a live systems diagnosis within 48 hours."
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mt-12 glass-card rounded-2xl p-6 md:p-10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Name">
              <input
                required
                maxLength={100}
                placeholder="Ada Lovelace"
                className="w-full h-11 px-4 rounded-md bg-input/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </Field>
            <Field label="Business Email">
              <input
                required
                type="email"
                maxLength={255}
                placeholder="you@company.com"
                className="w-full h-11 px-4 rounded-md bg-input/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </Field>
          </div>
          <Field label="What is your business bottleneck?">
            <div className="grid sm:grid-cols-3 gap-3">
              {options.map((o) => {
                const active = bottleneck === o;
                return (
                  <button
                    type="button"
                    key={o}
                    onClick={() => setBottleneck(o)}
                    className={`text-left p-4 rounded-md border text-sm transition-all ${
                      active
                        ? "border-primary bg-primary/10 text-foreground neon-glow"
                        : "border-border bg-input/30 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full mb-3 border ${
                        active ? "bg-primary border-primary" : "border-muted-foreground"
                      }`}
                    />
                    {o}
                  </button>
                );
              })}
            </div>
          </Field>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium neon-glow hover:brightness-110 transition-all"
          >
            <Zap className="w-4 h-4" /> Request Audit
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-mono text-primary tracking-wider mb-4">{eyebrow}</div>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 mt-16 py-12 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg neon-border grid place-items-center bg-surface">
              <Cpu className="w-4 h-4 text-primary" />
            </div>
            <span className="font-bold">
              Cortex<span className="text-primary">Web</span>Labs
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Elite web development & AI automation for teams building the next decade.
          </p>
        </div>
        <div>
          <div className="text-xs font-mono uppercase text-muted-foreground mb-3">Contact</div>
          <a
            href="mailto:info@cortexweblabs.com"
            className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" /> info@cortexweblabs.com
          </a>
          <div className="flex gap-3 mt-5">
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-10 h-10 rounded-md border border-border grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/60 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <div className="text-2xl font-bold tracking-tight text-primary text-glow">
            Think. Code. Connect.
          </div>
          <div className="mt-3 text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} Cortex Web Labs — All systems reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

type ChatMsg = {
  role: "bot" | "user";
  text: string;
  cta?: { label: string; targetId: string };
};

const GREETING_RE = /\b(hi|hello|hey|yo|howdy|hola|greetings|sup|good\s+(morning|afternoon|evening))\b/i;

function getBotReply(input: string): ChatMsg {
  const text = input.trim();
  if (GREETING_RE.test(text)) {
    return {
      role: "bot",
      text: "Hey there 👋 Welcome to Cortex Web Labs. I can walk you through our services, case studies, or fast-track you to a free technical audit — where should we start?",
      cta: { label: "Book a Free Technical Audit", targetId: "contact" },
    };
  }
  const lower = text.toLowerCase();
  if (lower.includes("price") || lower.includes("cost") || lower.includes("quote")) {
    return {
      role: "bot",
      text: "Pricing scales with system complexity. The fastest path is a free audit — we'll return a scoped estimate within 48 hours.",
      cta: { label: "Request Audit", targetId: "contact" },
    };
  }
  if (lower.includes("service") || lower.includes("what do you do")) {
    return {
      role: "bot",
      text: "We ship three interconnected capabilities: Full-Stack Web Development, AI & Generative Models, and Intelligent Automation. Want the deep dive?",
      cta: { label: "See Services", targetId: "services" },
    };
  }
  if (lower.includes("case") || lower.includes("portfolio") || lower.includes("work") || lower.includes("example")) {
    return {
      role: "bot",
      text: "Sure — here are a few live deployments from the lab floor.",
      cta: { label: "View Case Studies", targetId: "work" },
    };
  }
  if (lower.includes("team") || lower.includes("who")) {
    return {
      role: "bot",
      text: "Three co-founders run the labs: architecture, AI, and interface. Meet the operators below.",
      cta: { label: "Meet the Team", targetId: "team" },
    };
  }
  if (lower.includes("contact") || lower.includes("email") || lower.includes("talk")) {
    return {
      role: "bot",
      text: "Fastest handshake: drop your details in the audit form and we'll respond within 48 hours.",
      cta: { label: "Open Contact Form", targetId: "contact" },
    };
  }
  return {
    role: "bot",
    text: "Noted — a strategist will follow up shortly. In the meantime, the fastest way to get a scoped answer is the free technical audit.",
    cta: { label: "Book a Free Technical Audit", targetId: "contact" },
  };
}

function CortexBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: "bot", text: "Hi, I'm Cortex — your AI concierge. How can we scale your systems today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = input.trim();
    if (!value || typing) return;
    setMessages((prev) => [...prev, { role: "user", text: value }]);
    setInput("");
    setTyping(true);
    timerRef.current = setTimeout(() => {
      setMessages((prev) => [...prev, getBotReply(value)]);
      setTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-[320px] sm:w-[360px] rounded-2xl glass-card overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 h-12 border-b border-border/60 bg-background/60">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-primary/20 border border-primary/40 grid place-items-center">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">Cortex AI Bot</div>
                <div className="text-[10px] text-primary font-mono">● online</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div ref={scrollRef} className="p-4 space-y-3 h-64 overflow-y-auto">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm ${
                  m.role === "bot"
                    ? "text-foreground"
                    : "text-primary-foreground bg-primary rounded-lg px-3 py-2 ml-auto max-w-[80%] w-fit"
                }`}
              >
                {m.role === "bot" ? (
                  <div className="flex gap-2">
                    <MessageSquare className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <span>{m.text}</span>
                      {m.cta && (
                        <button
                          type="button"
                          onClick={() => {
                            setOpen(false);
                            scrollToId(m.cta!.targetId);
                          }}
                          className="inline-flex items-center gap-2 h-8 px-3 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:neon-glow transition-all"
                        >
                          {m.cta.label} <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  m.text
                )}
              </div>
            ))}
            {typing && (
              <div className="text-sm text-foreground">
                <div className="flex gap-2 items-center">
                  <MessageSquare className="w-4 h-4 text-primary shrink-0" />
                  <div className="flex gap-1 items-end h-4" aria-label="Cortex is typing">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 p-3 border-t border-border/60 bg-background/60"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our systems…"
              maxLength={300}
              className="flex-1 h-9 px-3 rounded-md bg-input/50 border border-border text-sm focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              disabled={typing || !input.trim()}
              className="w-9 h-9 rounded-md bg-primary text-primary-foreground grid place-items-center hover:neon-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="group flex items-center gap-2 h-12 pl-3 pr-4 rounded-full bg-primary text-primary-foreground font-medium neon-glow hover:brightness-110 transition-all"
      >
        <div className="w-7 h-7 rounded-full bg-background/20 grid place-items-center">
          <Bot className="w-4 h-4" />
        </div>
        Cortex AI Bot
      </button>
    </div>
  );
}
