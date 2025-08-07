import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Users, 
  Globe, 
  Award, 
  Heart, 
  Lightbulb,
  BookOpen,
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Inclusivity",
    description: "Making career guidance accessible to every student, regardless of background or location."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Using cutting-edge assessment techniques and AI to provide personalized career insights."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Committed to providing the highest quality guidance and educational resources."
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Building reliable relationships with students, parents, and educational institutions."
  }
];

const stats = [
  {
    icon: Users,
    number: "50,000+",
    label: "Students Guided",
    description: "Helped thousands find their ideal career path"
  },
  {
    icon: Globe,
    number: "500+",
    label: "Rural Schools",
    description: "Reaching underserved communities nationwide"
  },
  {
    icon: Award,
    number: "95%",
    label: "Success Rate",
    description: "Students following our recommendations report high satisfaction"
  },
  {
    icon: TrendingUp,
    number: "85%",
    label: "Career Clarity",
    description: "Students gain clear direction for their future"
  }
];

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Assessment",
    description: "Multi-dimensional evaluation considering academics, interests, personality, and aspirations."
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Connect with industry professionals and experienced career counselors for personalized guidance."
  },
  {
    icon: Globe,
    title: "College Recommendations",
    description: "Curated list of top colleges matching your career path, budget, and preferences."
  },
  {
    icon: Zap,
    title: "Future Skills Focus",
    description: "Identifying and developing skills that will be relevant in tomorrow's job market."
  }
];

const About = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-6">
              About EduNiti
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Empowering Students for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ml-3">
                Future-Ready Careers
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              EduNiti is an inclusive, student-centric career guidance platform that bridges the awareness gap 
              for students post-10th standard. We tackle mis-guidance, social pressure, and limited rural access 
              while supporting UN SDGs 4, 8, and 10.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To democratize access to quality career guidance and ensure every student, 
                  regardless of their background or location, can make informed decisions about 
                  their future. We believe in breaking down barriers and creating equal 
                  opportunities for all.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Personalized Guidance</h4>
                      <p className="text-sm text-muted-foreground">Tailored career paths based on individual strengths and interests</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary/10 p-2 rounded-lg">
                      <Globe className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Rural Accessibility</h4>
                      <p className="text-sm text-muted-foreground">Reaching underserved communities with offline capabilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-success/10 p-2 rounded-lg">
                      <Lightbulb className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Future Skills</h4>
                      <p className="text-sm text-muted-foreground">Preparing students for tomorrow's job market</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-card to-muted/30 border-0 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A world where every student has access to quality career guidance, 
                    enabling them to pursue fulfilling careers that align with their 
                    passions and contribute to society's progress.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-bold text-primary">2030</div>
                      <div className="text-sm text-muted-foreground">Vision Target</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-bold text-secondary">1M+</div>
                      <div className="text-sm text-muted-foreground">Students Reached</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Impact in Numbers
              </h2>
              <p className="text-lg text-muted-foreground">
                Making a real difference in students' lives across India
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at EduNiti
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                How We Help Students
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive support system designed for student success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 border-0 p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Ready to Shape Your Future?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of students who have found their perfect career path with EduNiti. 
                Start your journey today and unlock your potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero">
                  Take Assessment
                </Button>
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;