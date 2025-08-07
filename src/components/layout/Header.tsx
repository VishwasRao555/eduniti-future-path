import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <GraduationCap className="h-8 w-8" />
          EduNiti
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/assessment" className="text-foreground hover:text-primary transition-colors">
            Assessment
          </Link>
          <Link to="/experts" className="text-foreground hover:text-primary transition-colors">
            Expert Guidance
          </Link>
          <Link to="/colleges" className="text-foreground hover:text-primary transition-colors">
            Colleges
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild className="hidden md:inline-flex">
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="hero" size="default" asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};