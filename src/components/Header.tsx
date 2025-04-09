
import React from 'react';
import { HeartPulse } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-4 mb-6">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-gradient-to-br from-thryve-teal to-thryve-blue rounded-xl flex items-center justify-center shadow-sm animate-pulse-subtle">
              <HeartPulse className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-thryve-dark to-thryve-teal bg-clip-text text-transparent">
              thryve
            </h1>
          </div>
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <a href="#" className="text-sm font-medium text-foreground hover:text-thryve-teal transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-foreground hover:text-thryve-teal transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="health-btn text-sm py-2 px-4">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
