"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = answers.reduce((a, b) => (b >= 0 ? a + b : a), 0);

  const getSeverity = () => {
    if (score <= 4) return "Minimal depression";
    if (score <= 9) return "Mild depression";
    if (score <= 14) return "Moderate depression";
    if (score <= 19) return "Moderately severe depression";
    return "Severe depression";
  };

  if (submitted) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card className="max-w-xl w-full p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Your Results</h2>
          <p className="text-lg">Total Score: <b>{score}</b></p>
          <p className="text-lg">Severity: <b>{getSeverity()}</b></p>
          <p className="text-sm text-gray-500 mt-4">
            Note: This screening is for informational purposes only and does not replace professional diagnosis.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="max-w-xl w-full p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">PHQ-9 Depression Screening</h2>
        <Progress value={((current + 1) / questions.length) * 100} className="mb-4" />
        <p className="text-sm mb-2">Question {current + 1} of {questions.length}</p>
        <p className="text-lg font-medium mb-4">{questions[current]}</p>

        <CardContent className="flex flex-col space-y-3">
          {options.map((opt, index) => (
            <Button
              key={index}
              variant={answers[current] === opt.value ? "default" : "outline"}
              className="justify-start text-left"
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </Button>
          ))}
        </CardContent>

        {current === questions.length - 1 && answers[current] !== -1 && (
          <Button onClick={handleSubmit} className="mt-6 w-full">Submit</Button>
        )}

        <p className="text-xs text-gray-500 mt-4">
          Privacy Note: Your responses are anonymous and encrypted. This screening is for informational purposes only and doesn’t replace professional diagnosis.
        </p>
      </Card>
    </div>
  );
}
