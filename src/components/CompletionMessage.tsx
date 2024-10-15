import React from 'react';
import { CheckCircle } from 'lucide-react';

const CompletionMessage: React.FC = () => {
  return (
    <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 animate__animated animate__fadeIn">
      <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
        <CheckCircle className="mr-2" /> סיימתם בהצלחה!
      </h2>
      <div className="text-green-800">
        <p className="mb-4">כל הכבוד! השלמתם את כל השלבים בתהליך ההתחברות לסליקה.</p>
        <p className="mb-2">הנה סיכום קצר של מה שעשיתם:</p>
        <ol className="list-decimal list-inside mb-4">
          <li>מילאתם טופס הצטרפות לחשבונית אונליין מבית "ריווחית"</li>
          <li>הגשתם בקשה לקבלת מספרי ספק מישראכרט</li>
          <li>העברתם את מספרי הספק לחברת הסליקה פלאקארד</li>
        </ol>
        <p className="font-semibold mb-2">מה הלאה?</p>
        <ul className="list-disc list-inside mb-4">
          <li>איש צוות מארבוקס יקבל את פרטי החיבור שלכם מחשבונית אונליין ומפלאקארד.</li>
          <li>רק לאחר כך תחוברו לסליקה באופן מלא.</li>
          <li>עד אז, מבחינתכם, אתם עדיין לא מחוברים לסליקה.</li>
        </ul>
        <p>אנו מודים לכם על שיתוף הפעולה ומאחלים לכם הצלחה רבה בהמשך הדרך!</p>
      </div>
    </div>
  );
};

export default CompletionMessage;