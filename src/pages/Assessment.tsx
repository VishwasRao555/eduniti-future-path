import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const questions = [
  {
    id: 1,
    question: "What is your educational background?",
    options: [
      { value: "government", label: "Government School" },
      { value: "private", label: "Private School" },
      { value: "rural", label: "Rural School" },
      { value: "urban", label: "Urban School" }
    ]
  },
  {
    id: 2,
    question: "Which stream interests you more?",
    options: [
      { value: "mpc", label: "MPC (Maths, Physics, Chemistry)" },
      { value: "bipc", label: "BiPC (Biology, Physics, Chemistry)" },
      { value: "commerce", label: "Commerce" },
      { value: "arts", label: "Arts & Humanities" }
    ]
  },
  {
    id: 3,
    question: "Rank your top interest:",
    options: [
      { value: "computer", label: "Computer Science & Technology" },
      { value: "medicine", label: "Medicine & Healthcare" },
      { value: "engineering", label: "Engineering" },
      { value: "business", label: "Business & Commerce" },
      { value: "law", label: "Law & Legal Studies" },
      { value: "arts", label: "Arts & Creative Fields" }
    ]
  },
  {
    id: 4,
    question: "Which future domain excites you most?",
    options: [
      { value: "coding", label: "Coding & Software Development" },
      { value: "ai", label: "AI & Data Science" },
      { value: "design", label: "Design & User Experience" },
      { value: "healthcare", label: "Healthcare & Medicine" },
      { value: "business", label: "Business & Entrepreneurship" },
      { value: "research", label: "Research & Academia" }
    ]
  },
  {
    id: 5,
    question: "What motivates you most about your future career?",
    options: [
      { value: "impact", label: "Making a positive impact on society" },
      { value: "financial", label: "Financial stability and growth" },
      { value: "creativity", label: "Creative expression and innovation" },
      { value: "knowledge", label: "Continuous learning and knowledge" },
      { value: "leadership", label: "Leadership and team management" },
      { value: "flexibility", label: "Work-life balance and flexibility" }
    ]
  }
];

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getCareerRecommendation = () => {
    // Simple logic for demo - in real app, this would be more sophisticated
    const interests = Object.values(answers);
    if (interests.includes("coding") || interests.includes("computer")) {
      return {
        career: "Software Engineer",
        duration: "4 years",
        cost: "₹2-8 Lakhs",
        skills: ["Programming", "Problem Solving", "System Design"],
        description: "Build innovative software solutions and applications that power the digital world."
      };
    } else if (interests.includes("medicine") || interests.includes("healthcare")) {
      return {
        career: "Medical Doctor",
        duration: "5.5 years",
        cost: "₹10-50 Lakhs",
        skills: ["Medical Knowledge", "Empathy", "Critical Thinking"],
        description: "Heal and care for people, making a direct impact on health and wellbeing."
      };
    } else if (interests.includes("business") || interests.includes("commerce")) {
      return {
        career: "Business Analyst",
        duration: "3-4 years",
        cost: "₹3-12 Lakhs",
        skills: ["Data Analysis", "Communication", "Strategic Thinking"],
        description: "Help organizations make data-driven decisions and optimize their operations."
      };
    } else {
      return {
        career: "Creative Designer",
        duration: "3-4 years",
        cost: "₹2-10 Lakhs",
        skills: ["Creativity", "Design Tools", "Communication"],
        description: "Create visual solutions that communicate ideas and inspire audiences."
      };
    }
  };

  const recommendation = getCareerRecommendation();

  if (isComplete) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Your Perfect Career Path
              </h1>
              <p className="text-xl text-muted-foreground">
                Based on your assessment, here's your personalized recommendation:
              </p>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/30">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-primary mb-2">
                  {recommendation.career}
                </CardTitle>
                <p className="text-lg text-muted-foreground">
                  {recommendation.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-background rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                    <p className="text-2xl font-bold text-primary">{recommendation.duration}</p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Estimated Cost</h3>
                    <p className="text-2xl font-bold text-secondary">{recommendation.cost}</p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Success Rate</h3>
                    <p className="text-2xl font-bold text-success">95%</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4">Key Skills to Develop:</h3>
                  <div className="flex flex-wrap gap-3">
                    {recommendation.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button size="lg" variant="hero" className="flex-1">
                    Get Expert Guidance
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    Find Colleges
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-foreground">Career Assessment</h1>
              <span className="text-sm text-muted-foreground">
                {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[questions[currentQuestion].id] || ""}
                onValueChange={handleAnswer}
                className="space-y-4"
              >
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label 
                      htmlFor={option.value} 
                      className="flex-1 cursor-pointer text-foreground"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button 
              onClick={nextQuestion}
              disabled={!answers[questions[currentQuestion].id]}
              variant="hero"
            >
              {currentQuestion === questions.length - 1 ? "Complete" : "Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Assessment;