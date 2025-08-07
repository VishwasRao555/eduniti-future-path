import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Users, Star, GraduationCap, DollarSign, ExternalLink } from "lucide-react";

const collegeData = {
  "computer": [
    {
      name: "Indian Institute of Technology (IIT) Bombay",
      location: "Mumbai, Maharashtra",
      image: "/api/placeholder/400/250",
      rating: 4.8,
      fees: "₹2-3 Lakhs/year",
      students: "10,000+",
      specialization: "Computer Science & Engineering",
      description: "Premier institute for technology and engineering education with world-class faculty.",
      highlights: ["Top placements", "Research excellence", "Global recognition"]
    },
    {
      name: "Indian Institute of Science (IISc)",
      location: "Bangalore, Karnataka", 
      image: "/api/placeholder/400/250",
      rating: 4.9,
      fees: "₹50,000/year",
      students: "3,000+",
      specialization: "Computer Science",
      description: "Leading research institute with cutting-edge technology programs.",
      highlights: ["Research focused", "PhD programs", "Industry collaboration"]
    },
    {
      name: "Indian Statistical Institute (ISI)",
      location: "Kolkata, West Bengal",
      image: "/api/placeholder/400/250", 
      rating: 4.7,
      fees: "₹15,000/year",
      students: "2,500+",
      specialization: "Computer Science & Statistics",
      description: "Renowned for statistical computing and data science programs.",
      highlights: ["Data science focus", "Statistical expertise", "Research opportunities"]
    },
    {
      name: "Birla Institute of Technology and Science (BITS)",
      location: "Pilani, Rajasthan",
      image: "/api/placeholder/400/250",
      rating: 4.6,
      fees: "₹4-5 Lakhs/year", 
      students: "15,000+",
      specialization: "Computer Science",
      description: "Private institute known for innovative curriculum and industry connections.",
      highlights: ["Industry partnerships", "Flexible curriculum", "Innovation focus"]
    }
  ],
  "medicine": [
    {
      name: "All India Institute of Medical Sciences (AIIMS)",
      location: "New Delhi",
      image: "/api/placeholder/400/250",
      rating: 4.9,
      fees: "₹1,000/year",
      students: "2,000+", 
      specialization: "Medicine & Surgery",
      description: "India's premier medical institute with excellent healthcare training.",
      highlights: ["Top medical college", "Research excellence", "Government support"]
    },
    {
      name: "Christian Medical College (CMC)",
      location: "Vellore, Tamil Nadu",
      image: "/api/placeholder/400/250",
      rating: 4.8,
      fees: "₹50,000/year",
      students: "1,500+",
      specialization: "Medicine",
      description: "Leading private medical college with strong clinical training.",
      highlights: ["Clinical excellence", "Community service", "Medical research"]
    },
    {
      name: "King George's Medical University",
      location: "Lucknow, Uttar Pradesh", 
      image: "/api/placeholder/400/250",
      rating: 4.5,
      fees: "₹25,000/year",
      students: "2,500+",
      specialization: "Medical Sciences",
      description: "Government medical university with comprehensive medical programs.",
      highlights: ["Government backing", "Affordable fees", "Quality education"]
    },
    {
      name: "Jawaharlal Institute of Postgraduate Medical Education",
      location: "Puducherry",
      image: "/api/placeholder/400/250",
      rating: 4.6,
      fees: "₹15,000/year",
      students: "1,000+",
      specialization: "Medical Education",
      description: "Premier institute for postgraduate medical education and research.",
      highlights: ["PG focus", "Research programs", "Clinical training"]
    }
  ],
  "engineering": [
    {
      name: "Indian Institute of Technology (IIT) Delhi",
      location: "New Delhi",
      image: "/api/placeholder/400/250",
      rating: 4.8,
      fees: "₹2-3 Lakhs/year",
      students: "8,000+",
      specialization: "Engineering & Technology", 
      description: "Leading engineering institute with diverse engineering programs.",
      highlights: ["Multiple disciplines", "Research focus", "Industry connections"]
    },
    {
      name: "Indian Institute of Technology (IIT) Kanpur",
      location: "Kanpur, Uttar Pradesh",
      image: "/api/placeholder/400/250",
      rating: 4.7,
      fees: "₹2-3 Lakhs/year",
      students: "5,000+",
      specialization: "Engineering",
      description: "Renowned for aerospace and mechanical engineering programs.",
      highlights: ["Aerospace excellence", "Research culture", "Alumni network"]
    },
    {
      name: "National Institute of Technology (NIT) Trichy",
      location: "Tiruchirappalli, Tamil Nadu",
      image: "/api/placeholder/400/250",
      rating: 4.5,
      fees: "₹1-2 Lakhs/year",
      students: "10,000+",
      specialization: "Engineering & Technology",
      description: "Top NIT with excellent engineering programs and placements.",
      highlights: ["Good placements", "Affordable fees", "Quality education"]
    },
    {
      name: "Delhi Technological University (DTU)",
      location: "Delhi",
      image: "/api/placeholder/400/250",
      rating: 4.4,
      fees: "₹1.5 Lakhs/year",
      students: "7,000+",
      specialization: "Engineering",
      description: "State university with strong engineering and technology programs.",
      highlights: ["Industry exposure", "Delhi location", "Good infrastructure"]
    }
  ],
  "business": [
    {
      name: "Indian Institute of Management (IIM) Ahmedabad",
      location: "Ahmedabad, Gujarat",
      image: "/api/placeholder/400/250",
      rating: 4.9,
      fees: "₹25 Lakhs (2-year MBA)",
      students: "400+",
      specialization: "Management",
      description: "Premier business school with excellent MBA programs.",
      highlights: ["Top MBA program", "Industry connections", "Global recognition"]
    },
    {
      name: "Indian Institute of Management (IIM) Bangalore",
      location: "Bangalore, Karnataka",
      image: "/api/placeholder/400/250",
      rating: 4.8,
      fees: "₹24 Lakhs (2-year MBA)",
      students: "480+",
      specialization: "Management Studies",
      description: "Leading management institute with strong industry partnerships.",
      highlights: ["Bangalore advantage", "Tech focus", "Strong alumni"]
    },
    {
      name: "Faculty of Management Studies (FMS), University of Delhi",
      location: "Delhi",
      image: "/api/placeholder/400/250",
      rating: 4.6,
      fees: "₹20,000 (2-year MBA)",
      students: "200+",
      specialization: "Management",
      description: "Affordable excellence in management education with high ROI.",
      highlights: ["Affordable fees", "High ROI", "Delhi University"]
    },
    {
      name: "Xavier Labour Relations Institute (XLRI)",
      location: "Jamshedpur, Jharkhand",
      image: "/api/placeholder/400/250",
      rating: 4.7,
      fees: "₹25 Lakhs (2-year MBA)",
      students: "350+",
      specialization: "Management & HR",
      description: "Premier private B-school known for HR and general management.",
      highlights: ["HR excellence", "Jesuit values", "Strong network"]
    }
  ],
  "law": [
    {
      name: "National Law School of India University",
      location: "Bangalore, Karnataka",
      image: "/api/placeholder/400/250",
      rating: 4.8,
      fees: "₹2-3 Lakhs/year",
      students: "800+",
      specialization: "Law",
      description: "Premier law university with excellent legal education programs.",
      highlights: ["Top law school", "Moot court excellence", "Judge alumni"]
    },
    {
      name: "Gujarat National Law University",
      location: "Gandhinagar, Gujarat",
      image: "/api/placeholder/400/250",
      rating: 4.6,
      fees: "₹1.5-2 Lakhs/year",
      students: "1,000+",
      specialization: "Legal Studies",
      description: "Leading law university with comprehensive legal programs.",
      highlights: ["Research focus", "Moot courts", "Legal aid clinic"]
    },
    {
      name: "Rajiv Gandhi School of Intellectual Property Law",
      location: "Kharagpur, West Bengal",
      image: "/api/placeholder/400/250",
      rating: 4.5,
      fees: "₹1-1.5 Lakhs/year",
      students: "500+",
      specialization: "Intellectual Property Law",
      description: "Specialized law school focusing on IP and technology law.",
      highlights: ["IP specialization", "Tech law focus", "Industry relevant"]
    },
    {
      name: "The Tamil Nadu Dr. Ambedkar Law University",
      location: "Chennai, Tamil Nadu",
      image: "/api/placeholder/400/250",
      rating: 4.3,
      fees: "₹50,000-1 Lakh/year",
      students: "3,000+",
      specialization: "Law",
      description: "State law university with diverse legal education programs.",
      highlights: ["Affordable education", "Multiple campuses", "Government support"]
    }
  ],
  "arts": [
    {
      name: "Jawaharlal Nehru University (JNU)",
      location: "New Delhi",
      image: "/api/placeholder/400/250",
      rating: 4.6,
      fees: "₹5,000-20,000/year",
      students: "8,000+",
      specialization: "Liberal Arts & Social Sciences",
      description: "Premier central university for humanities and social sciences.",
      highlights: ["Research excellence", "Affordable fees", "Political awareness"]
    },
    {
      name: "Banaras Hindu University",
      location: "Varanasi, Uttar Pradesh",
      image: "/api/placeholder/400/250",
      rating: 4.4,
      fees: "₹10,000-30,000/year",
      students: "30,000+",
      specialization: "Arts & Humanities",
      description: "Large central university with comprehensive arts programs.",
      highlights: ["Cultural heritage", "Diverse programs", "Large campus"]
    },
    {
      name: "University of Delhi",
      location: "Delhi",
      image: "/api/placeholder/400/250",
      rating: 4.5,
      fees: "₹10,000-50,000/year",
      students: "130,000+",
      specialization: "Arts & Sciences",
      description: "Prestigious central university with excellent arts colleges.",
      highlights: ["Multiple colleges", "Delhi advantage", "Quality education"]
    },
    {
      name: "Jadavpur University",
      location: "Kolkata, West Bengal",
      image: "/api/placeholder/400/250",
      rating: 4.3,
      fees: "₹2,000-15,000/year",
      students: "12,000+",
      specialization: "Arts & Engineering",
      description: "State university known for both arts and technical programs.",
      highlights: ["Cultural richness", "Affordable fees", "Academic freedom"]
    }
  ]
};

const CollegeCard = ({ college }: { college: any }) => (
  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
    <div className="relative overflow-hidden rounded-t-lg">
      <img 
        src={college.image} 
        alt={college.name}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{college.rating}</span>
        </div>
      </div>
    </div>
    
    <CardHeader className="pb-3">
      <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
        {college.name}
      </CardTitle>
      <div className="flex items-center gap-2 text-muted-foreground">
        <MapPin className="h-4 w-4" />
        <span className="text-sm">{college.location}</span>
      </div>
    </CardHeader>
    
    <CardContent className="space-y-4">
      <p className="text-sm text-muted-foreground line-clamp-2">
        {college.description}
      </p>
      
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-success" />
          <span>{college.fees}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <span>{college.students}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <Badge variant="secondary" className="text-xs">
          {college.specialization}
        </Badge>
        <div className="flex flex-wrap gap-1">
          {college.highlights.slice(0, 2).map((highlight: string, idx: number) => (
            <Badge key={idx} variant="outline" className="text-xs">
              {highlight}
            </Badge>
          ))}
        </div>
      </div>
      
      <Button variant="outline" size="sm" className="w-full group">
        <span>Learn More</span>
        <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
      </Button>
    </CardContent>
  </Card>
);

const Colleges = () => {
  const [activeTab, setActiveTab] = useState("computer");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <GraduationCap className="h-4 w-4" />
              Top Colleges by Domain
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Find Your Perfect College
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore top colleges in your field of interest. Each college is carefully selected based on 
              academic excellence, placement records, and student satisfaction.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="computer" className="text-xs sm:text-sm">Computer Science</TabsTrigger>
              <TabsTrigger value="medicine" className="text-xs sm:text-sm">Medicine</TabsTrigger>
              <TabsTrigger value="engineering" className="text-xs sm:text-sm">Engineering</TabsTrigger>
              <TabsTrigger value="business" className="text-xs sm:text-sm">Business</TabsTrigger>
              <TabsTrigger value="law" className="text-xs sm:text-sm">Law</TabsTrigger>
              <TabsTrigger value="arts" className="text-xs sm:text-sm">Arts</TabsTrigger>
            </TabsList>

            {Object.entries(collegeData).map(([domain, colleges]) => (
              <TabsContent key={domain} value={domain}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {colleges.slice(0, 10).map((college, index) => (
                    <CollegeCard key={index} college={college} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-0 p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Need Personalized Guidance?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Take our assessment to get personalized college recommendations based on your interests, 
                academic background, and career goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero">
                  Take Assessment
                </Button>
                <Button size="lg" variant="outline">
                  Talk to Expert
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Colleges;