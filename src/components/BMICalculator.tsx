
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Weight, Ruler, ActivitySquare } from 'lucide-react';
import ResultIndicator from './ResultIndicator';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

  const calculateBMI = () => {
    if (!height || !weight) return;
    
    let bmiValue: number;
    
    if (unit === 'metric') {
      // Metric: weight (kg) / height^2 (m)
      const heightInMeters = parseFloat(height) / 100;
      bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    } else {
      // Imperial: 703 * weight (lbs) / height^2 (inches)
      bmiValue = 703 * parseFloat(weight) / (parseFloat(height) * parseFloat(height));
    }
    
    setBmi(parseFloat(bmiValue.toFixed(1)));
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'bg-health-caution/20 text-health-caution' };
    if (bmi < 25) return { category: 'Normal Weight', color: 'bg-health-good/20 text-health-good' };
    if (bmi < 30) return { category: 'Overweight', color: 'bg-health-caution/20 text-health-caution' };
    return { category: 'Obese', color: 'bg-health-danger/20 text-health-danger' };
  };

  return (
    <Card className="health-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-thryve-dark">BMI Calculator</CardTitle>
            <CardDescription className="text-muted-foreground mt-1">
              Measure your Body Mass Index
            </CardDescription>
          </div>
          <div className="h-10 w-10 rounded-full bg-thryve-teal/10 flex items-center justify-center">
            <Weight className="h-5 w-5 text-thryve-teal" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="metric" className="w-full" onValueChange={(value) => setUnit(value as 'metric' | 'imperial')}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="metric">Metric</TabsTrigger>
            <TabsTrigger value="imperial">Imperial</TabsTrigger>
          </TabsList>
          
          <TabsContent value="metric" className="space-y-4">
            <div>
              <Label htmlFor="height-cm">Height (cm)</Label>
              <div className="flex items-center mt-1.5">
                <Ruler className="mr-2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="height-cm"
                  type="number"
                  placeholder="e.g. 175"
                  className="health-input"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="weight-kg">Weight (kg)</Label>
              <div className="flex items-center mt-1.5">
                <Weight className="mr-2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="weight-kg"
                  type="number"
                  placeholder="e.g. 70"
                  className="health-input"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="imperial" className="space-y-4">
            <div>
              <Label htmlFor="height-in">Height (inches)</Label>
              <div className="flex items-center mt-1.5">
                <Ruler className="mr-2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="height-in"
                  type="number"
                  placeholder="e.g. 69"
                  className="health-input"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="weight-lb">Weight (lbs)</Label>
              <div className="flex items-center mt-1.5">
                <Weight className="mr-2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="weight-lb"
                  type="number"
                  placeholder="e.g. 150"
                  className="health-input"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>
          </TabsContent>
          
          <Button 
            className="health-btn w-full mt-6"
            onClick={calculateBMI}
          >
            Calculate BMI
          </Button>
          
          {bmi !== null && (
            <div className="mt-6 p-4 bg-secondary/50 rounded-lg animate-slide-up">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Your BMI</p>
                  <p className="text-3xl font-bold text-thryve-dark">{bmi}</p>
                </div>
                <ResultIndicator 
                  status={getBMICategory(bmi).category}
                  colorClass={getBMICategory(bmi).color}
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {bmi < 18.5 && "You're underweight. Consider consulting with a healthcare provider for nutrition advice."}
                {bmi >= 18.5 && bmi < 25 && "You have a healthy weight. Keep maintaining your balanced lifestyle!"}
                {bmi >= 25 && bmi < 30 && "You're overweight. Consider improving your diet and exercise routine."}
                {bmi >= 30 && "You're in the obese range. It's recommended to consult with a healthcare provider."}
              </p>
            </div>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BMICalculator;
