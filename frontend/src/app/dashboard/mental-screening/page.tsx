'use client';

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const questions = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling/staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself — or that you are a failure",
  "Trouble concentrating on things, such as reading or watching TV",
  "Moving or speaking so slowly that others noticed (or opposite: restless)",
  "Thoughts that you would be better off dead or of hurting yourself",
];

const options = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

export default function PHQ9Screening() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[current] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handleSubmit = () => setSubmitted(true);

  const handleRestart = () => {
    setAnswers(Array(questions.length).fill(-1));
    setCurrent(0);
    setSubmitted(false);
  };

  const score = answers.reduce((a, b) => (b >= 0 ? a + b : a), 0);
  const answeredCount = answers.filter(a => a >= 0).length;

  const getSeverity = () => {
    if (score <= 4) return "Minimal depression";
    if (score <= 9) return "Mild depression";
    if (score <= 14) return "Moderate depression";
    if (score <= 19) return "Moderately severe depression";
    return "Severe depression";
  };

  if (submitted) {
    return (
      <div className="flex justify-center items-start md:items-center min-h-screen bg-[#a3d2ff] p-6">
        <Card className="max-w-4xl w-full p-6 shadow-xl flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">Your Results</h2>
            <p className="text-lg mb-2">
              Total Score: <b>{score}</b>
            </p>
            <p className="text-lg mb-2">
              Severity: <b className="text-green-600">{getSeverity()}</b>
            </p>
            <p className="text-lg mb-4">
              Questions Answered: <b>{answeredCount}</b> / {questions.length}
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Note: This screening is for informational purposes only and does not replace professional diagnosis.
            </p>
            <Button onClick={handleRestart} className="bg-blue-500 text-white hover:bg-blue-600 mt-4">
              Continue
            </Button>
          </div>

          <div className="flex-1 bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Question Summary</h3>
            {questions.map((q, idx) => (
              <div key={idx} className="mb-2">
                <p className="font-medium">{idx + 1}. {q}</p>
                <p className="ml-4 text-green-600 font-semibold">
                  Your answer: {answers[idx] >= 0 ? options.find(o => o.value === answers[idx])?.label : "Not answered"}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-start md:items-center min-h-screen bg-[#a3d2ff] p-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-6">
        {/* Question Card */}
        <Card className="flex-1 p-6 shadow-xl bg-white rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">PHQ-9 Screening</h2>
          <Progress value={((current + 1) / questions.length) * 100} className="mb-4" />
          <p className="text-sm mb-2">Question {current + 1} of {questions.length}</p>
          <p className="text-lg font-medium mb-4">{questions[current]}</p>

          <CardContent className="flex flex-col space-y-3">
            {options.map((opt) => (
              <Button
                key={opt.value}
                variant={answers[current] === opt.value ? "default" : "outline"}
                className={`justify-start text-left ${answers[current] === opt.value ? "text-green-600 font-bold" : ""}`}
                onClick={() => handleSelect(opt.value)}
              >
                {opt.label}
              </Button>
            ))}
          </CardContent>

          <div className="mt-4 flex justify-between items-center">
            {current < questions.length - 1 && answers[current] !== -1 && (
              <Button onClick={handleNext} className="bg-blue-500 text-white hover:bg-blue-600">
                Next
              </Button>
            )}
            {current === questions.length - 1 && answers[current] !== -1 && (
              <Button onClick={handleSubmit} className="bg-blue-500 text-white hover:bg-blue-600 w-full">
                Submit
              </Button>
            )}
          </div>
        </Card>

        {/* Info / Decorative Panel */}
        <div className="flex-1 hidden md:flex flex-col justify-center bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Mental Health Insights</h3>
          <p className="text-gray-700 mb-2">
            Your responses are confidential. PHQ-9 helps you understand your mood and mental well-being.
          </p>
          <p className="text-gray-700 mb-2">
            Track your symptoms over time to see trends and improvements.
          </p>
          <p className="text-gray-700">
            If you feel distressed or have suicidal thoughts, please contact a professional counselor immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
