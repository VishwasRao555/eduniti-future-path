import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/90" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Empower Your
          <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
            Future Career
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
          Discover your perfect career path with personalized guidance, expert mentorship, 
          and comprehensive support for students from all backgrounds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="xl" variant="secondary" asChild className="min-w-48">
            <Link to="/assessment">
              Start Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="xl" variant="outline" asChild className="min-w-48 bg-white/10 border-white/30 text-white hover:bg-white/20">
            <Link to="/experts">
              Meet Experts
            </Link>
          </Button>
        </div>

        {/* Stats */}
        
      </div>
    </section>;
};