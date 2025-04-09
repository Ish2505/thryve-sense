
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ActivitySquare, Heart } from 'lucide-react';
import ResultIndicator from './ResultIndicator';

const BloodPressureCalculator = () => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [result, setResult] = useState<{
    category: string;
    colorClass: string;
    message: string;
  } | null>(null);

  const calculateBloodPressure = () => {
    if (!systolic || !diastolic) return;
    
    const sys = parseInt(systolic);
    const dia = parseInt(diastolic);
    
    let category = '';
    let colorClass = '';
    let message = '';
    
    if (sys < 90 || dia < 60) {
      category = 'Low';
      colorClass = 'bg-blue-100 text-blue-700';
      message = 'Your blood pressure is low. This could cause dizziness or fainting.';
    } else if (sys < 120 && dia < 80) {
      category = 'Normal';
      colorClass = 'bg-health-good/20 text-health-good';
      message = 'Your blood pressure is normal. Keep maintaining your healthy lifestyle!';
    } else if ((sys >= 120 && sys <= 129) && dia < 80) {
      category = 'Elevated';
      colorClass = 'bg-health-caution/20 text-health-caution';
      message = 'Your blood pressure is slightly elevated. Consider lifestyle changes.';
    } else if ((sys >= 130 && sys <= 139) || (dia >= 80 && dia <= 89)) {
      category = 'Stage 1 Hypertension';
      colorClass = 'bg-health-warning/20 text-health-warning';
      message = 'You have Stage 1 Hypertension. Consult with a doctor about lifestyle changes.';
    } else if (sys >= 140 || dia >= 90) {
      category = 'Stage 2 Hypertension';
      colorClass = 'bg-health-danger/20 text-health-danger';
      message = 'You have Stage 2 Hypertension. Medical consultation is recommended.';
    } else if (sys > 180 || dia > 120) {
      category = 'Crisis';
      colorClass = 'bg-health-danger/20 text-health-danger';
      message = 'Hypertensive crisis! Seek emergency medical attention immediately.';
    }
    
    setResult({ category, colorClass, message });
  };

  return (
    <Card className="health-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-thryve-dark">Blood Pressure</CardTitle>
            <CardDescription className="text-muted-foreground mt-1">
              Check your blood pressure status
            </CardDescription>
          </div>
          <div className="h-10 w-10 rounded-full bg-thryve-teal/10 flex items-center justify-center">
            <Heart className="h-5 w-5 text-thryve-teal" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="systolic">Systolic (mmHg)</Label>
            <div className="flex items-center mt-1.5">
              <ActivitySquare className="mr-2 h-4 w-4 text-muted-foreground" />
              <Input
                id="systolic"
                type="number"
                placeholder="e.g. 120"
                className="health-input"
                value={systolic}
                onChange={(e) => setSystolic(e.target.value)}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Top number - pressure when heart beats</p>
          </div>
          
          <div>
            <Label htmlFor="diastolic">Diastolic (mmHg)</Label>
            <div className="flex items-center mt-1.5">
              <ActivitySquare className="mr-2 h-4 w-4 text-muted-foreground" />
              <Input
                id="diastolic"
                type="number"
                placeholder="e.g. 80"
                className="health-input"
                value={diastolic}
                onChange={(e) => setDiastolic(e.target.value)}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Bottom number - pressure between beats</p>
          </div>
          
          <Button 
            className="health-btn w-full mt-6"
            onClick={calculateBloodPressure}
          >
            Check Status
          </Button>
          
          {result && (
            <div className="mt-6 p-4 bg-secondary/50 rounded-lg animate-slide-up">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Your Status</p>
                  <p className="text-lg font-medium text-thryve-dark">{systolic}/{diastolic} mmHg</p>
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

export default BloodPressureCalculator;
