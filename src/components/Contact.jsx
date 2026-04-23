import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const EMAIL = "rajoligirisai.madhav@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }

    const subject = encodeURIComponent(`Hire inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Madhav,\n\n${message}\n\nBest regards,\n${name}\n${email}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email client…",
      description: "Your default mail app will open with the message ready to send.",
    });
  };

  return (
    <section id="contact" className="section-pad bg-gradient-hero mesh-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Get in touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Let's <span className="text-gradient">Build Together</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Have a role or project that needs cloud expertise? Drop a message — I'll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-3 glass-card p-8 rounded-3xl space-y-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@company.com" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} maxLength={2000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about the role / project…" className="mt-1.5" />
            </div>
            <Button type="submit" variant="cta" size="lg" className="w-full">
              <Send className="w-4 h-4" />Send Message
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Submitting opens your default email client with the message pre-filled.
            </p>
          </form>

          <div className="lg:col-span-2 space-y-4">
            <a href={`mailto:${EMAIL}`} className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:shadow-glow transition-all hover:-translate-y-1 block">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center"><Mail className="w-5 h-5 text-primary-foreground" /></div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-semibold truncate">{EMAIL}</div>
              </div>
            </a>
            <a href="tel:+910000000000" className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:shadow-glow transition-all hover:-translate-y-1 block">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center"><Phone className="w-5 h-5 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="font-semibold">+91 — Available on request</div>
              </div>
            </a>
            <a href="https://linkedin.com/in/girisai-madhav" target="_blank" rel="noreferrer" className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:shadow-glow transition-all hover:-translate-y-1 block">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center"><Linkedin className="w-5 h-5 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="font-semibold">girisai-madhav</div>
              </div>
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:shadow-glow transition-all hover:-translate-y-1 block">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center"><Github className="w-5 h-5 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="font-semibold">View Repositories</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
