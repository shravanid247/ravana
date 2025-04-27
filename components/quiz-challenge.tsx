"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface QuizChallengeProps {
  onClose: () => void
}

export default function QuizChallenge({ onClose }: QuizChallengeProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      question: "How many heads did Ravana have?",
      options: ["5", "7", "10", "20"],
      correctAnswer: "10",
    },
    {
      question: "Ravana was a devotee of which deity?",
      options: ["Vishnu", "Shiva", "Brahma", "Indra"],
      correctAnswer: "Shiva",
    },
    {
      question: "What musical instrument was Ravana known to play?",
      options: ["Sitar", "Tabla", "Veena", "Flute"],
      correctAnswer: "Veena",
    },
    {
      question: "Who finally defeated Ravana in battle?",
      options: ["Krishna", "Rama", "Hanuman", "Indra"],
      correctAnswer: "Rama",
    },
    {
      question: "What kingdom did Ravana rule?",
      options: ["Ayodhya", "Lanka", "Kishkindha", "Mathura"],
      correctAnswer: "Lanka",
    },
  ]

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResults(false)
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full border-amber-300 shadow-lg bg-gradient-to-br from-amber-50 to-amber-100">
        <CardHeader className="border-b border-amber-200 relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-orange-900 hover:bg-orange-200/50"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-orange-900 font-serif">Ravana Quiz Challenge</CardTitle>
          <CardDescription className="text-orange-800">
            {showResults ? "Your Results" : `Question ${currentQuestion + 1} of ${questions.length}`}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          {showResults ? (
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-orange-900">
                {score} / {questions.length}
              </div>
              <p className="text-orange-800">
                {score === questions.length
                  ? "Perfect! You are a true Ramayana scholar!"
                  : score >= questions.length / 2
                    ? "Well done! You know quite a bit about Ravana."
                    : "Keep learning! Ravana's story has much more to discover."}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-orange-900">{questions[currentQuestion].question}</h3>
              <div className="space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left border-amber-300 text-orange-800 hover:bg-orange-200/50 hover:text-orange-900"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="border-t border-amber-200 flex justify-between">
          {showResults ? (
            <>
              <Button
                variant="outline"
                className="border-amber-300 text-orange-800 hover:bg-orange-200/50"
                onClick={resetQuiz}
              >
                Try Again
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white" onClick={onClose}>
                Finish
              </Button>
            </>
          ) : (
            <Button variant="ghost" className="ml-auto text-orange-800 hover:bg-orange-200/50" onClick={onClose}>
              Cancel
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
