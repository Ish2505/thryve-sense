
import React from 'react';
import { HeartPulse, ArrowDown, Weight, Heart, ActivitySquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToCalculators = () => {
    const calculatorsSection = document.getElementById('calculators');
    if (calculatorsSection) {
      calculatorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-thryve-teal/10 text-thryve-teal text-sm font-medium mb-6 animate-pulse-subtle">
            <HeartPulse className="h-4 w-4 mr-2" />
            Your personal health companion
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Monitor your health metrics with
            <span className="bg-gradient-to-r from-thryve-teal to-thryve-blue bg-clip-text text-transparent"> Thryve</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Calculate your BMI, blood pressure, and sugar levels to get insights about your health status and make informed decisions about your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="health-btn text-lg"
              onClick={scrollToCalculators}
            >
              Check Your Health
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-thryve-teal text-thryve-teal hover:bg-thryve-teal/10 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-16 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 max-w-3xl w-full">
          <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-border shadow-sm text-center">
            <div className="h-12 w-12 bg-thryve-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Weight className="h-6 w-6 text-thryve-teal" />
            </div>
            <h3 className="font-medium text-lg mb-2">BMI Tracking</h3>
            <p className="text-sm text-muted-foreground">Monitor your body mass index to maintain a healthy weight.</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-border shadow-sm text-center">
            <div className="h-12 w-12 bg-thryve-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-thryve-teal" />
            </div>
            <h3 className="font-medium text-lg mb-2">Blood Pressure</h3>
            <p className="text-sm text-muted-foreground">Keep track of your blood pressure levels for heart health.</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-border shadow-sm text-center">
            <div className="h-12 w-12 bg-thryve-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ActivitySquare className="h-6 w-6 text-thryve-teal" />
            </div>
            <h3 className="font-medium text-lg mb-2">Sugar Levels</h3>
            <p className="text-sm text-muted-foreground">Monitor your glucose levels to prevent diabetes risks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
