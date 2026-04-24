import { Linkedin, Github, Heart, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-6 bg-background">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-center">
      <div className="text-center md:text-left">
        <div className="font-display font-bold text-lg">
          Rajoli Girisai <span className="text-gradient">Madhav</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          AWS DevOps Engineer • Delivering reliable, scalable, and automated cloud systems.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3">
        <a href="https://linkedin.com/in/rajoli-girisai-madhav" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:shadow-glow hover:-translate-y-1 transition-all">
          <Linkedin className="w-4 h-4 text-primary" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:shadow-glow hover:-translate-y-1 transition-all">
          <Github className="w-4 h-4 text-primary" />
        </a>
        <a href="mailto:rajoligirisai.madhav@gmail.com" aria-label="Email" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:shadow-glow hover:-translate-y-1 transition-all">
          <Mail className="w-4 h-4 text-primary" />
        </a>
        <a href="tel:+919121775542" aria-label="Phone" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:shadow-glow hover:-translate-y-1 transition-all">
          <Phone className="w-4 h-4 text-primary" />
        </a>
      </div>

      <p className="text-xs text-muted-foreground flex items-center justify-center md:justify-end gap-1.5">
        Built with <Heart className="w-3.5 h-3.5 text-accent fill-accent" /> on AWS
      </p>
    </div>

    <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-border text-center text-xs text-muted-foreground">
      © 2026 Rajoli Girisai Madhav. All rights reserved.
    </div>
  </footer>
);

export default Footer;
