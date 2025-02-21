import React from "react";
import ExcuseGenerator from "./ExcuseGenerator";

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [generatedExcuse, setGeneratedExcuse] = React.useState("");

  const handleGenerate = async (formData: any) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const excuse = `Sorry, I won't be able to make it to the ${formData.situation} event on ${formData.date}. ${formData.formal ? "I regrettably must inform you that" : "Unfortunately,"} I have an unexpected ${formData.urgency > 75 ? "emergency" : "situation"} that requires my immediate attention.`;

    setGeneratedExcuse(excuse);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-purple-100 to-pink-200 py-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Excuse Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Generate perfect, context-aware excuses for any situation with our
            intelligent excuse generator.
          </p>
        </div>

        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />

          {/* Main content */}
          <div className="relative z-10">
            <ExcuseGenerator
              onGenerate={handleGenerate}
              isLoading={isLoading}
              generatedExcuse={generatedExcuse}
            />
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>Use responsibly • AI-powered excuses • Quick and convincing</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
