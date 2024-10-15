import React, { useState, useEffect } from 'react';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface StepProps {
  stepNumber: number;
  title: string;
  content: React.ReactNode;
  isActive: boolean;
  isCompleted: boolean;
  onComplete: () => void;
  confirmMessage: string;
}

const Step: React.FC<StepProps> = ({
  stepNumber,
  title,
  content,
  isActive,
  isCompleted,
  onComplete,
  confirmMessage,
}) => {
  const [isExpanded, setIsExpanded] = useState(isActive);

  useEffect(() => {
    setIsExpanded(isActive);
  }, [isActive]);

  const handleComplete = () => {
    if (window.confirm(confirmMessage)) {
      onComplete();
    }
  };

  return (
    <div className={`mb-6 border rounded-lg ${isActive ? 'border-blue-500' : 'border-gray-200'}`}>
      <div
        className={`flex items-center justify-between p-4 cursor-pointer ${
          isCompleted ? 'bg-green-50' : isActive ? 'bg-blue-50' : 'bg-gray-50'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-3 ${
            isCompleted ? 'bg-green-500' : isActive ? 'bg-blue-500' : 'bg-gray-300'
          } text-white font-bold`}>
            {isCompleted ? <CheckCircle /> : stepNumber}
          </span>
          <h3 className={`text-lg font-semibold ${isCompleted ? 'text-green-700' : isActive ? 'text-blue-700' : 'text-gray-700'}`}>
            {title}
          </h3>
        </div>
        {isExpanded ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </div>
      {isExpanded && (
        <div className="p-4 border-t">
          {content}
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleComplete}
              className={`px-4 py-2 rounded font-semibold text-white ${
                isActive
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
              disabled={!isActive}
            >
              אישור השלמת שלב {stepNumber}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step;