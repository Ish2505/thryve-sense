
import React from 'react';
import { HeartPulse } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 mt-10">
      <div className="container px-4 mx-auto">
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="h-8 w-8 bg-gradient-to-br from-thryve-teal to-thryve-blue rounded-xl flex items-center justify-center shadow-sm">
                <HeartPulse className="h-5 w-5 text-white" />
              </div>
              <h2 className="ml-2 text-xl font-bold bg-gradient-to-r from-thryve-dark to-thryve-teal bg-clip-text text-transparent">
                thryve
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row md:space-x-12 text-center md:text-left mb-6 md:mb-0">
              <div>
                <h3 className="font-medium mb-2 text-thryve-dark">Resources</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-thryve-teal transition-colors">Health Blog</a></li>
                  <li><a href="#" className="hover:text-thryve-teal transition-colors">BMI Chart</a></li>
                  <li><a href="#" className="hover:text-thryve-teal transition-colors">Blood Pressure Guide</a></li>
                </ul>
              </div>
              
              <div className="mt-6 md:mt-0">
                <h3 className="font-medium mb-2 text-thryve-dark">Company</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-thryve-teal transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-thryve-teal transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-thryve-teal transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Thryve Health. All rights reserved.</p>
            <p className="mt-1">Disclaimer: This tool is for informational purposes only and not a substitute for professional medical advice.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
