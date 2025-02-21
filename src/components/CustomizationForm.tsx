import React from "react";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";

interface CustomizationFormProps {
  onSubmit?: (data: FormData) => void;
  defaultSituation?: string;
  defaultName?: string;
  defaultDate?: string;
  defaultFormal?: boolean;
  defaultUrgency?: number;
}

interface FormData {
  situation: string;
  name: string;
  date: string;
  formal: boolean;
  urgency: number;
}

const CustomizationForm = ({
  onSubmit = () => {},
  defaultSituation = "work",
  defaultName = "John",
  defaultDate = new Date().toISOString().split("T")[0],
  defaultFormal = false,
  defaultUrgency = 50,
}: CustomizationFormProps) => {
  const [situation, setSituation] = React.useState(defaultSituation);
  const [name, setName] = React.useState(defaultName);
  const [date, setDate] = React.useState(defaultDate);
  const [formal, setFormal] = React.useState(defaultFormal);
  const [urgency, setUrgency] = React.useState(defaultUrgency);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      situation,
      name,
      date,
      formal,
      urgency,
    });
  };

  return (
    <Card className="w-full p-6 bg-white/50 backdrop-blur-sm border border-white/20 rounded-lg shadow-sm">
      <form id="excuse-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="situation">Situation Type</Label>
          <Select value={situation} onValueChange={setSituation}>
            <SelectTrigger>
              <SelectValue placeholder="Select situation type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="work">Work</SelectItem>
              <SelectItem value="social">Social</SelectItem>
              <SelectItem value="family">Family</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="formal">Formal Tone</Label>
          <Switch id="formal" checked={formal} onCheckedChange={setFormal} />
        </div>

        <div className="space-y-2">
          <Label>Urgency Level</Label>
          <Slider
            value={[urgency]}
            onValueChange={(values) => setUrgency(values[0])}
            max={100}
            step={1}
          />
        </div>
      </form>
    </Card>
  );
};

export default CustomizationForm;
