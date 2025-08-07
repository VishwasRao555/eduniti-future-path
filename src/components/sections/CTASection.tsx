import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto text-white">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Shape Your
            <span className="block text-accent">Future Career?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Join thousands of students who have already discovered their dream careers. 
            Start your personalized journey today - it's completely free!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="xl" variant="secondary" asChild className="min-w-64 shadow-xl">
              <Link to="/assessment">
                Start Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild className="min-w-64 bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-xl">
              <Link to="/signup">
                Create Account
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold mb-2">100%</p>
              <p className="text-white/80">Free Forever</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">24/7</p>
              <p className="text-white/80">Support Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">10k+</p>
              <p className="text-white/80">Success Stories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};