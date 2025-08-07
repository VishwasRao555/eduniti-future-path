import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Video, Clock, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Experts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-8">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">Coming Soon</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Expert Guidance – 
            <span className="block text-primary mt-2">Coming Soon!</span>
          </h1>

          {/* Hero Description */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Star className="h-6 w-6 text-warning fill-current" />
            <p className="text-xl text-muted-foreground">
              One-on-One Expert Career Guidance is on the Way!
            </p>
            <Star className="h-6 w-6 text-warning fill-current" />
          </div>

          {/* Main Content Card */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Video className="h-10 w-10 text-white" />
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At EduNiti, we believe in providing every student with the best possible support for a bright future. 
                Our upcoming Expert Guidance feature will connect you directly with top industry professionals and 
                experienced career counselors through live video sessions. Ask your questions, get real-world advice, 
                and receive personalized mentoring—no matter where you are!
              </p>

              {/* Development Status */}
              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-foreground">
                    This feature is currently under development
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  We're working hard to bring you meaningful guidance from experts. Stay tuned—the Expert Guidance 
                  page will be available soon after the next phase of EduNiti's rollout.
                </p>
              </div>

              {/* Features Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Live Video Sessions</h4>
                  <p className="text-sm text-muted-foreground">
                    Face-to-face guidance with industry experts
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Personalized Mentoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Tailored advice for your career path
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Flexible Scheduling</h4>
                  <p className="text-sm text-muted-foreground">
                    Book sessions that fit your schedule
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8">
                Thank you for your interest! Your future, guided by experts, is just around the corner.
              </p>

              {/* Action Button */}
              <Button variant="hero" size="lg" asChild>
                <Link to="/" className="inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Dashboard
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Additional CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              In the meantime, explore our other features to get started on your career journey!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/assessment">Take Assessment</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/colleges">Find Colleges</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Experts;