import React, { useState, useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import Step from './components/Step';
import CompletionMessage from './components/CompletionMessage';
import WarningModal from './components/WarningModal';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(() => {
    const saved = localStorage.getItem('currentStep');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [completed, setCompleted] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(true);

  useEffect(() => {
    localStorage.setItem('currentStep', currentStep.toString());
    if (currentStep === 3) {
      setCompleted(true);
    }
  }, [currentStep]);

  const steps = [
    {
      title: 'מילוי טופס הצטרפות לחשבונית אונליין מבית "ריווחית"',
      content: (
        <>
          <p>בשלב זה, עליכם למלא את הטופס הבא:</p>
          <div className="iframe-container">
            <iframe src="https://icredit.rivhit.co.il/usercreator/affiliate/index/a564d309-3a3a-42b3-a1dd-b848fe6f3861" className="w-full h-[600px] border-0" title="Rivhit Form"></iframe>
          </div>
          <p><strong>חשוב לזכור:</strong> בסוג המנוי, יש לרשום "חשבוניות בלבד".</p>
          <p>שם המשתמש צריך להיות כתובת המייל שלכם.</p>
        </>
      ),
      confirmMessage: 'האם אתה בטוח שהגשת את הטופס על ידי לחיצה על "הרשמה" וקיבלת אישור שהטופס הוגש?'
    },
    {
      title: 'טופס הגשת דרישה להקמת מספרי ספק מחברת האשראי ישראכרט',
      content: (
        <>
          <p>כעת, עליכם למלא את הטופס הבא כדי לקבל מספר ספק מחברת ישראכרט:</p>
          <div className="iframe-container">
            <iframe src="https://digital.isracard.co.il/wiz/front/m/S5ZGTV7XD6" className="w-full h-[600px] border-0" title="Isracard Form"></iframe>
          </div>
          <p><strong>שימו לב:</strong> אין חובה להעלות מסמכים בשלב זה.</p>
        </>
      ),
      confirmMessage: 'האם הגשת את הטופס על ידי לחיצה על "שליחה"? עכשיו תצטרכו לחכות לשיחה מנציג של חברת ישראכרט. ברגע שתקבלו את המספרים, תחזרו לכאן לבצע את שלב 3.'
    },
    {
      title: 'טופס הגשת מספרי הספק של ישראכרט לחברת הסליקה פלאקארד',
      content: (
        <>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
            <h3 className="font-bold"><AlertTriangle className="inline-block mr-2" /> הוראות חשובות למילוי הטופס:</h3>
            <ul className="list-disc list-inside">
              <li>ברשותכם 2 מספרי ספק, אך בטופס יש מקום להזין רק אחד.</li>
              <li>הזינו את הספק הרגיל במקום המיועד.</li>
              <li>את ספק הוראות הקבע יש לרשום ב"הערות" בעמוד האחרון של הטופס.</li>
              <li><strong>חשוב מאוד:</strong> לחיצה על "מעבר לשלב הבא" בטופס לא מגישה אותו! וודאו שלחצתם על כפתור "שליחה" בסוף התהליך.</li>
            </ul>
          </div>
          <div className="iframe-container">
            <iframe src="https://peleteam.com/cms/slika-3?my_rep=%D7%90%D7%A8%D7%91%D7%95%D7%A7%D7%A1-%20%D7%94%D7%A4%D7%A0%D7%99%D7%94" className="w-full h-[600px] border-0" title="Pelecard Form"></iframe>
          </div>
          <h3 className="text-xl font-bold mt-4 mb-2">סרטון הדרכה למילוי הטופס:</h3>
          <div className="iframe-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LZYTaWc00JY" className="w-full h-[315px] border-0" title="Instruction Video" allowFullScreen></iframe>
          </div>
        </>
      ),
      confirmMessage: 'האם אתה בטוח שהגשת את הטופס על ידי לחיצה על "שליחה" בסוף התהליך?'
    }
  ];

  const handleStepComplete = (stepIndex: number) => {
    if (stepIndex === currentStep) {
      setCurrentStep(stepIndex + 1);
    }
  };

  const resetProgress = () => {
    if (window.confirm('האם אתה בטוח שברצונך להתחיל מחדש? כל ההתקדמות שלך תאופס.')) {
      localStorage.removeItem('currentStep');
      setCurrentStep(0);
      setCompleted(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      {showWarning && (
        <WarningModal onClose={() => setShowWarning(false)} />
      )}
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white py-4 px-6">
          <h1 className="text-3xl font-bold">ברוכים הבאים למדריך הסליקה של ארבוקס</h1>
        </div>
        <div className="p-6">
          <div className="mb-8">
            <p className="text-lg mb-4">לפניכם <strong>3 שלבים פשוטים</strong> לחיבור המערכת שלכם לסליקה וחשבוניות:</p>
            <ol className="list-decimal list-inside">
              <li><span className="text-blue-600 font-semibold">מילוי טופס ראשוני</span></li>
              <li><span className="text-green-600 font-semibold">קבלת מספר ספק מישראכרט</span></li>
              <li><span className="text-orange-600 font-semibold">השלמת התהליך</span></li>
            </ol>
            <p className="mt-4">עקבו אחר ההוראות בכל שלב כדי להשלים את התהליך בהצלחה.</p>
          </div>

          {!completed ? (
            steps.map((step, index) => (
              <Step
                key={index}
                stepNumber={index + 1}
                title={step.title}
                content={step.content}
                isActive={index === currentStep}
                isCompleted={index < currentStep}
                onComplete={() => handleStepComplete(index)}
                confirmMessage={step.confirmMessage}
              />
            ))
          ) : (
            <CompletionMessage />
          )}
        </div>
      </div>
      <button
        onClick={resetProgress}
        className="fixed top-4 left-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center"
      >
        <RefreshCw className="mr-2" />
        התחל מחדש
      </button>
    </div>
  );
};

export default App;