"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

// Animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Questions data (42 questions)
const questions = [
  "How would you describe your immunity level?",
  "Is any family member suffering from a chronic or incurable disease?",
  "Has anyone in your home been experiencing long-term depression?",
  "Do you suffer from sleep disturbances or insomnia?",
  "Are there frequent stomach-related health issues in your family?",
  "Is anyone in the house diagnosed with thyroid problems?",
  "Do you find it difficult to forget painful or traumatic memories?",
  "Is your ongoing medication showing little or no effect?",
  "Does anyone suffer from breathing or respiratory issues (e.g., asthma, allergies)?",
  "Do you often feel mentally restless or anxious at home without any clear reason? (Optional)",
  "Do you feel emotionally heavy, angry, or irritated more often since shifting to this house? (Optional)",
  "Have you faced major career setbacks since moving into your current home?",
  "Do you feel that you're not getting the desired growth in your career?",
  "How often do you face conflicts with seniors or superiors at work?",
  "Do you feel a lack of new opportunities in life or career?",
  "Have you experienced any major financial or professional loss after shifting here?",
  "Do you feel unable to meet your personal/professional targets?",
  "Are you currently facing cash flow problems or financial instability?",
  "Do you feel money is being spent unnecessarily or without control?",
  "Have your debts increased after moving to this house or after renovation?",
  "Do you feel your savings are constantly getting drained?",
  "Is any of your payment stuck or delayed significantly?",
  "Have you experienced any major accidents or theft since moving here?",
  "Are you entangled in long-standing court cases or legal matters?",
  "Do you feel insecure or uncertain about your future?",
  "Do you feel confused while making major life decisions?",
  "Do you feel your hard work doesn't bring desired results?",
  "Does your work often get stuck or fail at the last moment?",
  "Do you feel your efforts go unrecognized in personal or professional life?",
  "Are you experiencing relationship issues within or outside the family?",
  "Are there any concerns related to your children? (Optional)",
  "Do you experience frequent arguments among family members?",
  "Are you facing difficulty in conceiving or going through a difficult pregnancy? (Optional)",
  "How would you describe your relationship with your spouse/partner? (Optional)",
  "Do you feel disconnected from spiritual practices or inner peace after moving here? (Optional)",
  "Do you sense heaviness, dullness, or lack of freshness in the house atmosphere? (Optional)",
  "Do guests or friends avoid visiting or seem uncomfortable staying at your place? (Optional)",
  "Do plants in your home struggle to survive or stay healthy for long? (Optional)",
  "Do pets (if any) show signs of discomfort or frequent illness in the house? (Optional)",
  "Do you feel your home gets cluttered easily or stays disorganized despite efforts? (Optional)",
  "Does your home feel unusually dark or lack natural sunlight during the day? (Optional)",
  "Do you avoid spending time in certain areas/rooms of your house without any clear reason? (Optional)"
];

// Options for each question
const options = ["Yes", "No", "Not Applicable"];

// Helper: which questions are optional (by index)
const optionalIndices = questions
  .map((q, i) => q.toLowerCase().includes("optional") ? i : -1)
  .filter(i => i !== -1);

// Helper: scoring map
const answerToPoint = (answer: string) => {
  // Accept synonyms for future extensibility
  if (["no", "rarely", "sometimes", "occasionally"].includes(answer.toLowerCase())) return 0;
  if (["yes", "frequently"].includes(answer.toLowerCase())) return 1;
  return null; // Not Applicable or skipped
};

export function VastuQuestionnaire() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  // Handle option selection
  const selectOption = (option: string) => {
    setAnswers({...answers, [currentStep]: option});
  };
  
  // Move to next question
  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowUserForm(true);
    }
  };
  
  // Move to previous question
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Reset the questionnaire
  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
    setShowWelcome(true);
    setShowUserForm(false);
    setUserInfo({ name: '', email: '', phone: '' });
    setEmailStatus('idle');
  };
  
  // Calculate completion percentage
  const completionPercentage = Math.floor((Object.keys(answers).length / questions.length) * 100);

  // Vastu grading logic (NEW)
  function getVastuGradeAndMessage() {
    // Only count answered, non-skipped, non-optional questions
    const answeredEntries = Object.entries(answers).filter(([idx, ans]) => {
      const i = Number(idx);
      // If optional and skipped, ignore
      if (optionalIndices.includes(i) && (!ans || ans === "Not Applicable")) return false;
      // If not answered at all or skipped with "Not Applicable", ignore
      if (!ans || ans === "Not Applicable") return false;
      return true;
    });
    const totalAnswered = answeredEntries.length;
    const userScore = answeredEntries.reduce((acc, [_, ans]) => acc + (answerToPoint(ans) === 1 ? 1 : 0), 0);
    const scorePercent = totalAnswered === 0 ? 0 : Math.round((userScore / totalAnswered) * 100);

    // Grade mapping
    let grade = "D";
    let interpretation = (
      <>
        <div className="text-3xl mb-2">🚨 Vastu Score: D – Immediate Attention Needed</div>
        <div>Your space is critically misaligned with Vastu principles, which may be directly causing repeated problems — like loss, conflict, health issues, or stagnation.<br/><br/>
        But don't worry — we specialize in 100% non-demolition remedies to correct even deep-rooted imbalances.<br/><br/>
        🌿 Your life can shift for the better with the right guidance.<br/>
        Let us help you transform your home into a space of support and success.<br/><br/>
        📲 Reply here or message us at <b>9910558589</b> to book your urgent consultation.</div>
      </>
    );
    if (scorePercent >= 90) {
      grade = "A+";
      interpretation = (
        <>
          <div className="text-3xl mb-2">🌟 Vastu Score: A+</div>
          <div>Your home is aligned with strong Vastu energies! That's a wonderful sign for health, harmony, and growth. 🌼<br/><br/>
          Still, energy maintenance is key — just like health checkups.<br/>
          ✨ You may consider a brief consultation to fine-tune and amplify positivity even more.<br/><br/>
          📍We offer non-demolition Vastu solutions for long-term harmony.<br/>
          📲 Reply here or WhatsApp <b>9910558589</b> to explore your options.</div>
        </>
      );
    } else if (scorePercent >= 80) {
      grade = "A";
      interpretation = (
        <>
          <div className="text-3xl mb-2">🔷 Vastu Score: A</div>
          <div>Your home has good energy, but a few zones may need balancing. These small imbalances can affect emotional well-being, clarity, or career momentum.<br/><br/>
          🌿 A personalized Vastu consultation can help remove subtle blocks and support faster progress — without any structural changes.<br/><br/>
          📲 Let's take it to the next level. WhatsApp us at <b>9910558589</b> to book your session.</div>
        </>
      );
    } else if (scorePercent >= 60) {
      grade = "B";
      interpretation = (
        <>
          <div className="text-3xl mb-2">🟠 Vastu Score: B</div>
          <div>There are noticeable imbalances in your space that could be silently impacting areas like health, relationships, or finances.<br/><br/>
          But don't worry — timely correction with non-demolition remedies can bring things back on track. ✨<br/><br/>
          🔍 A detailed consultation will uncover the root cause and provide you with easy, effective Vastu solutions.<br/><br/>
          📲 WhatsApp us at <b>9910558589</b> to schedule your consultation and start your healing journey.</div>
        </>
      );
    } else if (scorePercent >= 40) {
      grade = "C";
      interpretation = (
        <>
          <div className="text-3xl mb-2">🔴 Vastu Score: C</div>
          <div>Your home is showing major Vastu imbalances that might be directly linked to ongoing challenges in life — be it physical, emotional, or financial.<br/><br/>
          But here's the good news: We can fix it — without demolition.<br/>
          🌿 Our remedies are simple yet powerful, rooted in authentic Vastu.<br/><br/>
          This is the right time to act before things spiral further.<br/><br/>
          📲 Message us on <b>9910558589</b> to get started with your personalized consultation.</div>
        </>
      );
    }
    return {
      grade,
      scorePercent,
      userScore,
      totalAnswered,
      interpretation
    };
  }

  // Send email with results
  async function sendResultsEmail(grade: string, scorePercent: number) {
    setEmailStatus('loading');
    try {
      const res = await fetch('/api/questionnaire-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...userInfo,
          answers,
          grade,
          scorePercent,
        }),
      });
      if (res.ok) {
        setEmailStatus('success');
      } else {
        setEmailStatus('error');
      }
    } catch {
      setEmailStatus('error');
    }
  }

  // Welcome screen content
  if (showWelcome) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] w-full animate-fade-in">
        <h1 className="text-5xl font-extrabold text-center mt-6 mb-4 text-gray-800 tracking-tight drop-shadow-lg" style={{letterSpacing: 1}}>
          Is Your Home Vastu Friendly?
        </h1>
        <div className="w-full max-w-2xl flex flex-col items-center mb-">
          <div className="relative w-full mb-0">
            <img
              src="https://images.unsplash.com/photo-1631556373338-52e31188effc?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Vastu Banner"
              className="rounded-xl shadow-2xl object-cover border-4 border-yellow-400 w-full mb-10"
              style={{height: 320}}
            />
            <div className="absolute inset-0 rounded-xl" style={{boxShadow: '0 0 60px 10px rgba(255, 215, 0, 0.15)'}}></div>
          </div>
          <div className="w-full rounded-2xl overflow-hidden mt-0 shadow-2xl border-4 border-yellow-400">
            <div className="bg-gradient-to-b from-[#7a2323] via-[#a85d1a] to-yellow-900 p-12 text-white text-center relative">
              <h2 className="text-3xl font-bold mb-6 drop-shadow-lg">Welcome To The Vaastu Sanjivanii Questionnaire!</h2>
              <div className="text-left max-w-lg mx-auto mb-8 text-lg">
                <p className="font-bold mb-2 text-yellow-200">Please Note:</p>
                <ul className="list-disc pl-6">
                  <li className="mb-2">The following questions are with reference to your existing house.</li>
                  <li>Answer YES if one or more persons are facing these problems.</li>
                </ul>
              </div>
              <Button
                className="bg-[#7a2323] border-2 border-yellow-400 hover:bg-yellow-400 hover:text-[#7a2323] text-white px-10 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-200"
                onClick={() => setShowWelcome(false)}
              >
                Next
              </Button>
              <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{boxShadow: '0 0 80px 10px rgba(255, 215, 0, 0.10)'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // User info form before result
  if (showUserForm) {
    return (
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#7a2323]">Enter Your Details</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setShowUserForm(false);
            setIsCompleted(true);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={userInfo.name}
              onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              value={userInfo.email}
              onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              className="w-full border rounded px-3 py-2"
              value={userInfo.phone}
              onChange={e => setUserInfo({ ...userInfo, phone: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full bg-[#7a2323] text-white">See My Result</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Progress bar */}
      <div className="w-full bg-gray-200 h-2">
        <div 
          className="bg-[#7a2323] h-full transition-all duration-300 ease-in-out"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>
      
      <div className="p-6">
        {!isCompleted ? (
          <motion.div
            key={currentStep}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col"
          >
            {/* Question counter - modified to not show total */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-500">Question {currentStep + 1}</span>
              <span className="text-sm font-semibold text-[#7a2323]">{completionPercentage}% Complete</span>
            </div>
            
            {/* Question */}
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {questions[currentStep]}
            </h3>
            
            {/* Options */}
            <div className="grid gap-4 mb-8">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => selectOption(option)}
                  className={`p-4 border rounded-lg text-left transition-all
                  ${answers[currentStep] === option 
                    ? 'border-[#7a2323] bg-[#7a2323]/10 text-[#7a2323]' 
                    : 'border-gray-300 hover:border-[#7a2323]/50'}`}
                >
                  {option}
                </button>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="px-6"
              >
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!answers[currentStep]}
                className="bg-[#7a2323] hover:bg-[#5a1a1a] text-white px-6"
              >
                {currentStep === questions.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center py-10"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {/* Vastu Grade and Message */}
            <div className="mb-8">
              {(() => {
                const { grade, scorePercent, userScore, totalAnswered, interpretation } = getVastuGradeAndMessage();
                // Send email only once when result is shown
                if (emailStatus === 'idle') {
                  sendResultsEmail(grade, scorePercent);
                }
                return (
                  <div>
                    <div className="mb-2 font-semibold text-lg">✅ You answered {totalAnswered} questions.</div>
                    <div className="mb-2">Your score: {userScore}/{totalAnswered} = {scorePercent}%</div>
                    <div className="mb-4 font-bold">Grade: {grade}</div>
                    {interpretation}
                  </div>
                );
              })()}
            </div>
            {emailStatus === 'loading' && <div className="text-yellow-600 mb-4">Sending your result to our team...</div>}
            {emailStatus === 'success' && <div className="text-green-600 mb-4">Your result has been sent to our team. We will contact you soon!</div>}
            {emailStatus === 'error' && <div className="text-red-600 mb-4">Failed to send your result. Please try again later.</div>}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={handleReset}
                variant="outline"
                className="px-6"
              >
                Take Again
              </Button>
              <Button
                className="bg-[#7a2323] hover:bg-[#5a1a1a] text-white px-6"
                onClick={() => window.open('https://wa.me/919910558589', '_blank')}
              >
                Get Personalized Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 