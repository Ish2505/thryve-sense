
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BMICalculator from '@/components/BMICalculator';
import BloodPressureCalculator from '@/components/BloodPressureCalculator';
import SugarLevelCalculator from '@/components/SugarLevelCalculator';
import Footer from '@/components/Footer';
import { Weight, Heart, ActivitySquare } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main>
        <Hero />
        
        <section id="calculators" className="py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Health Calculators</h2>
              <p className="text-muted-foreground">Use our calculators to check your health metrics and get personalized insights</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-8">
                <BMICalculator />
                <BloodPressureCalculator />
                <SugarLevelCalculator />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white/50">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Monitor Your Health?</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Regular health monitoring helps you make informed decisions about your lifestyle 
                and catch potential issues before they become serious problems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border border-border rounded-xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                  <div className="h-12 w-12 mx-auto bg-thryve-teal/10 rounded-full flex items-center justify-center mb-4">
                    <Weight className="h-6 w-6 text-thryve-teal" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Maintain Healthy Weight</h3>
                  <p className="text-muted-foreground">Tracking your BMI helps you maintain a weight that's appropriate for your height.</p>
                </div>
                
                <div className="p-6 border border-border rounded-xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                  <div className="h-12 w-12 mx-auto bg-thryve-teal/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-thryve-teal" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Prevent Heart Disease</h3>
                  <p className="text-muted-foreground">Monitoring blood pressure is crucial for heart health and preventing cardiovascular issues.</p>
                </div>
                
                <div className="p-6 border border-border rounded-xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                  <div className="h-12 w-12 mx-auto bg-thryve-teal/10 rounded-full flex items-center justify-center mb-4">
                    <ActivitySquare className="h-6 w-6 text-thryve-teal" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Manage Diabetes Risk</h3>
                  <p className="text-muted-foreground">Regular blood sugar monitoring helps detect prediabetes and manage diabetes effectively.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
