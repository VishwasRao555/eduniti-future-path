import { GraduationCap, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4">
              <GraduationCap className="h-8 w-8" />
              EduNiti
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering students from all backgrounds to discover their perfect career paths 
              through personalized guidance, expert mentorship, and comprehensive support.
            </p>
            <p className="text-sm text-muted-foreground">
              Supporting UN SDGs 4, 8, and 10 for inclusive, quality education and equal opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/assessment" className="text-muted-foreground hover:text-primary transition-colors">
                  Career Assessment
                </Link>
              </li>
              <li>
                <Link to="/experts" className="text-muted-foreground hover:text-primary transition-colors">
                  Expert Guidance
                </Link>
              </li>
              <li>
                <Link to="/colleges" className="text-muted-foreground hover:text-primary transition-colors">
                  College Finder
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/rural-support" className="text-muted-foreground hover:text-primary transition-colors">
                  Rural Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 EduNiti. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500" /> for students everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};