import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Loader2, Copy, Mail, Volume2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ExcuseOutputProps {
  excuse?: string;
  isLoading?: boolean;
  onCopy?: () => void;
  onEmail?: () => void;
  onVoice?: () => void;
}

const ExcuseOutput = ({
  excuse = "Your generated excuse will appear here...",
  isLoading = false,
  onCopy = () => console.log("Copy clicked"),
  onEmail = () => console.log("Email clicked"),
  onVoice = () => console.log("Voice clicked"),
}: ExcuseOutputProps) => {
  return (
    <Card className="w-full p-6 bg-white/50 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg">
      <div className="space-y-4">
        {isLoading ? (
          <div className="flex items-center justify-center h-32">
            <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
          </div>
        ) : (
          <div className="min-h-[8rem] text-lg text-gray-700">{excuse}</div>
        )}

        <div className="flex justify-end space-x-2 pt-4 border-t">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={onCopy}
                  disabled={isLoading}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy to clipboard</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={onEmail}
                  disabled={isLoading}
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Send as email</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={onVoice}
                  disabled={isLoading}
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Convert to voice</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </Card>
  );
};

export default ExcuseOutput;
