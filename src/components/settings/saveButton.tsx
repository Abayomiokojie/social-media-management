// components/Settings/SaveButton.tsx
import React from "react";
import { Check, Loader2 } from "lucide-react";

interface SaveButtonProps {
  onClick: () => void;
  isLoading: boolean;
  isSaved: boolean;
  className?: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({
  onClick,
  isLoading,
  isSaved,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading || isSaved}
      className={`
        px-6 py-3 rounded-lg font-medium transition-all duration-300 
        flex items-center gap-2
        ${
          isSaved
            ? "bg-green-600 text-white"
            : "bg-gray-800 text-white hover:bg-gray-900"
        }
        ${isLoading ? "opacity-75 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {isSaved && !isLoading && <Check className="w-4 h-4" />}
      <span>
        {isLoading ? "Saving..." : isSaved ? "Saved!" : "Save Changes"}
      </span>
    </button>
  );
};

export default SaveButton;
