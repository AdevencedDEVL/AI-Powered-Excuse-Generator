import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import CustomizationForm from "./CustomizationForm";
import ExcuseOutput from "./ExcuseOutput";

interface ExcuseGeneratorProps {
  onGenerate?: (formData: FormData) => void;
  isLoading?: boolean;
  generatedExcuse?: string;
}

interface FormData {
  situation: string;
  name: string;
  date: string;
  formal: boolean;
  urgency: number;
}

const ExcuseGenerator = ({
  onGenerate = () => {},
  isLoading = false,
  generatedExcuse = "",
}: ExcuseGeneratorProps) => {
  const handleFormSubmit = (data: FormData) => {
    onGenerate(data);
  };

  const handleCopy = () => {
    if (generatedExcuse) {
      navigator.clipboard.writeText(generatedExcuse);
    }
  };

  const handleEmail = () => {
    if (generatedExcuse) {
      window.location.href = `mailto:?body=${encodeURIComponent(generatedExcuse)}`;
    }
  };

  const handleVoice = () => {
    // Placeholder for voice conversion functionality
    console.log("Voice conversion clicked");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-xl">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Excuse Generator
            </h2>
            <p className="text-gray-500 mt-2">
              Generate the perfect excuse for any situation
            </p>
          </div>

          <CustomizationForm onSubmit={handleFormSubmit} />

          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto"
              disabled={isLoading}
              form="excuse-form"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Excuse
            </Button>
          </div>

          <ExcuseOutput
            excuse={generatedExcuse}
            isLoading={isLoading}
            onCopy={handleCopy}
            onEmail={handleEmail}
            onVoice={handleVoice}
          />
        </div>
      </Card>
    </div>
  );
};

export default ExcuseGenerator;
