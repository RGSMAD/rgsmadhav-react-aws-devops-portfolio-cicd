import { Linkedin, Github, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-6 bg-background">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <div className="font-display font-bold text-lg">
          Rajoli Girisai <span className="text-gradient">Madhav</span>
        </div>
        <p className="text-sm text-muted-foreground">AWS DevOps Engineer · Building the cloud, one commit at a time.</p>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://linkedin.com/in/girisai-madhav" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:shadow-glow hover:-translate-y-1 transition-all">
          <Linkedin className="w-4 h-4 text-primary" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:shadow-glow hover:-translate-y-1 transition-all">
          <Github className="w-4 h-4 text-primary" />
        </a>
      </div>
      <p className="text-xs text-muted-foreground flex items-center gap-1.5">
        Built with <Heart className="w-3.5 h-3.5 text-accent fill-accent" /> on AWS
      </p>
    </div>
  </footer>
);

export default Footer;
