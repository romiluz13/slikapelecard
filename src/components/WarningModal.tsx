import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface WarningModalProps {
  onClose: () => void;
}

const WarningModal: React.FC<WarningModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-red-600 flex items-center">
            <AlertTriangle className="mr-2" />
            אזהרה חשובה
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X />
          </button>
        </div>
        <p className="text-gray-700 mb-4">
          שימו לב: מעבר לשלב הבא או לחיצה על "אישור השלמת שלב" <strong>אינם מגישים את הטופס באופן אוטומטי</strong>.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>חובה ללחוץ על כפתור "שליחה" או "הגשה" בסוף כל טופס</strong> כדי להשלים את התהליך בהצלחה.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          הבנתי
        </button>
      </div>
    </div>
  );
};

export default WarningModal;