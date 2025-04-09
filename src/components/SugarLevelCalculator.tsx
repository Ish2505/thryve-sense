
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ActivitySquare } from 'lucide-react';
import ResultIndicator from './ResultIndicator';

const SugarLevelCalculator = () => {
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [measurementType, setMeasurementType] = useState('fasting');
  const [result, setResult] = useState<{
    category: string;
    colorClass: string;
    message: string;
  } | null>(null);

  const calculateSugarLevel = () => {
    if (!glucoseLevel) return;
    
    const level = parseFloat(glucoseLevel);
    let category = '';
    let colorClass = '';
    let message = '';
    
    if (measurementType === 'fasting') {
      // Fasting blood sugar levels
      if (level < 70) {
        category = 'Low';
        colorClass = 'bg-blue-100 text-blue-700';
        message = 'Your fasting blood sugar is low. This might indicate hypoglycemia.';
      } else if (level >= 70 && level <= 99) {
        category = 'Normal';
        colorClass = 'bg-health-good/20 text-health-good';
        message = 'Your fasting blood sugar is normal. Keep up your healthy habits!';
      } else if (level >= 100 && level <= 125) {
        category = 'Prediabetes';
        colorClass = 'bg-health-caution/20 text-health-caution';
        message = 'Your fasting blood sugar indicates prediabetes. Consider lifestyle changes.';
      } else {
        category = 'Diabetes';
        colorClass = 'bg-health-danger/20 text-health-danger';
        message = 'Your fasting blood sugar indicates diabetes. Medical consultation recommended.';
      }
    } else {
      // Post-meal blood sugar levels
      if (level < 140) {
        category = 'Normal';
        colorClass = 'bg-health-good/20 text-health-good';
        message = 'Your post-meal blood sugar is normal. Keep maintaining your healthy lifestyle!';
      } else if (level >= 140 && level <= 199) {
        category = 'Prediabetes';
        colorClass = 'bg-health-caution/20 text-health-caution';
        message = 'Your post-meal blood sugar indicates prediabetes. Consider dietary changes.';
      } else {
        category = 'Diabetes';
        colorClass = 'bg-health-danger/20 text-health-danger';
        message = 'Your post-meal blood sugar indicates diabetes. Medical consultation recommended.';
      }
    }
    
    setResult({ category, colorClass, message });
  };

  return (
    <Card className="health-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-thryve-dark">Sugar Level</CardTitle>
            <CardDescription className="text-muted-foreground mt-1">
              Check your blood glucose status
            </CardDescription>
          </div>
          <div className="h-10 w-10 rounded-full bg-thryve-teal/10 flex items-center justify-center">
            <ActivitySquare className="h-5 w-5 text-thryve-teal" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label className="mb-2 block">Measurement Type</Label>
            <RadioGroup 
              defaultValue="fasting" 
              className="flex flex-col space-y-1"
              value={measurementType}
              onValueChange={setMeasurementType}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fasting" id="fasting" />
                <Label htmlFor="fasting" className="font-normal">Fasting (Before Meal)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="post-meal" id="post-meal" />
                <Label htmlFor="post-meal" className="font-normal">Post-meal (2 Hours After)</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="glucose">Blood Glucose (mg/dL)</Label>
            <div className="flex items-center mt-1.5">
              <ActivitySquare className="mr-2 h-4 w-4 text-muted-foreground" />
              <Input
                id="glucose"
                type="number"
                placeholder="e.g. 95"
                className="health-input"
                value={glucoseLevel}
                onChange={(e) => setGlucoseLevel(e.target.value)}
              />
            </div>
          </div>
          
          <Button 
            className="health-btn w-full mt-6"
            onClick={calculateSugarLevel}
          >
            Check Status
          </Button>
          
          {result && (
            <div className="mt-6 p-4 bg-secondary/50 rounded-lg animate-slide-up">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Your Status</p>
                  <p className="text-lg font-medium text-thryve-dark">{glucoseLevel} mg/dL</p>
                </div>
                <ResultIndicator 
                  status={result.category}
                  colorClass={result.colorClass}
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {result.message}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SugarLevelCalculator;
