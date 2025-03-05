import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function ProteinCalculator() {
  const [weight, setWeight] = useState(70);
  const [activityLevel, setActivityLevel] = useState("1.6");
  const [servings, setServings] = useState(4);
  const [isLbs, setIsLbs] = useState(false);

  const activityMultipliers = {
    "1.4": "Sedentary",
    "1.6": "Moderate",
    "1.8": "Active",
    "2.0": "Athlete"
  };

  const handleUnitToggle = () => {
    setIsLbs(!isLbs);
    setWeight(isLbs ? (weight / 2.20462).toFixed(1) : (weight * 2.20462).toFixed(1));
  };

  const proteinPerDay = (isLbs ? weight / 2.20462 : weight) * parseFloat(activityLevel);
  const proteinPerMeal = proteinPerDay / servings;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-lg bg-white">
        <CardContent>
          <h2 className="text-xl font-bold mb-4 text-center">Protein Intake Calculator</h2>
          
          <div className={`mb-4 flex justify-center p-1 rounded-lg transition-all shadow-inner ${isLbs ? 'bg-blue-200' : 'bg-red-200'}`}>
            <button 
              className={`flex-1 py-2 rounded-md text-center font-semibold transition-all ${!isLbs ? 'bg-white shadow-md text-red-500' : 'text-gray-500'}`} 
              onClick={() => !isLbs && handleUnitToggle()}>
              kg
            </button>
            <button 
              className={`flex-1 py-2 rounded-md text-center font-semibold transition-all ${isLbs ? 'bg-white shadow-md text-blue-500' : 'text-gray-500'}`} 
              onClick={() => isLbs && handleUnitToggle()}>
              lbs
            </button>
          </div>
          
          <div className="mb-4">
            <label className="block mb-1 font-bold">Body Weight (<span className={isLbs ? "text-blue-500 font-bold" : "text-red-500 font-bold"}>{isLbs ? "lbs" : "kg"}</span>)</label>
            <Input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
          </div>
          
          <div className="mb-4">
            <label className="block mb-1">Activity Level</label>
            <Select onValueChange={setActivityLevel} defaultValue={activityLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Select activity level" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(activityMultipliers).map(([value, label]) => (
                  <SelectItem key={value} value={value}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <label className="block mb-1">Servings per Day</label>
            <div className="flex justify-between mb-2 px-2 text-sm font-bold text-gray-500">
              {[4, 5, 6, 7, 8].map(num => (
                <span key={num} className={`${num === servings ? 'text-blue-600' : ''}`}>{num}</span>
              ))}
            </div>
            <input 
              type="range" 
              min="4" 
              max="8" 
              value={servings} 
              onChange={(e) => setServings(Number(e.target.value))} 
              className="w-full h-2 rounded-lg appearance-none bg-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
              style={{ accentColor: '#3b82f6' }}
            />
          </div>
          
          <div className="mt-4 p-4 bg-gray-200 rounded-lg text-center">
            <p className="text-lg font-semibold">Protein Intake</p>
            <p><strong>{proteinPerDay.toFixed(1)}</strong> g per day</p>
            <p><strong>{proteinPerMeal.toFixed(1)}</strong> g per meal</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
