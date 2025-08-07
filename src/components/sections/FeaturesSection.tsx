import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Video, MapPin, Users, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "Smart Assessment",
    description: "AI-powered psychometric tests that understand your unique strengths, interests, and personality to recommend perfect career paths.",
    action: "Take Assessment",
    link: "/assessment"
  },
  {
    icon: Video,
    title: "Expert Guidance",
    description: "Connect with industry professionals and career counselors through live video sessions for personalized mentorship.",
    action: "Meet Experts",
    link: "/experts"
  },
  {
    icon: MapPin,
    title: "College Finder",
    description: "Discover the best colleges and universities based on your career goals, location preferences, and budget.",
    action: "Find Colleges",
    link: "/colleges"
  },
  {
    icon: Users,
    title: "Peer Community",
    description: "Join a supportive community of students, share experiences, and learn from peers on similar career journeys.",
    action: "Join Community",
    link: "/community"
  },
  {
    icon: Zap,
    title: "Skill Development",
    description: "Access curated learning resources and skill-building programs tailored to your chosen career path.",
    action: "Explore Skills",
    link: "/skills"
  },
  {
    icon: Globe,
    title: "Rural Support",
    description: "Special support for rural students with offline resources, local language content, and mobile accessibility.",
    action: "Learn More",
    link: "/rural-support"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Everything You Need for 
            <span className="block text-primary">Career Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools, guidance, and support 
            you need to make informed career decisions and build a bright future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <Button variant="glow" size="sm" asChild className="w-full">
                  <Link to={feature.link}>
                    {feature.action}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};