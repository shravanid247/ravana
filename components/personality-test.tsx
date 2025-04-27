"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"
import Image from "next/image"

interface PersonalityTestProps {
  onClose: () => void
}

export default function PersonalityTest({ onClose }: PersonalityTestProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [result, setResult] = useState<{
    title: string
    description: string
    trait: string
    icon: string
  } | null>(null)

  const questions = [
    {
      question: "How do you approach learning?",
      options: [
        "I seek to master every detail of a subject",
        "I focus on practical applications",
        "I learn what's necessary for my goals",
        "I enjoy exploring different perspectives",
      ],
    },
    {
      question: "When faced with a challenge, you typically:",
      options: [
        "Analyze all possible solutions methodically",
        "Take charge and make quick decisions",
        "Seek advice from others before deciding",
        "Trust your instincts and adapt as you go",
      ],
    },
    {
      question: "What motivates you most?",
      options: [
        "Recognition of my knowledge and expertise",
        "Power and influence over others",
        "Creating something beautiful or meaningful",
        "Spiritual growth and self-improvement",
      ],
    },
    {
      question: "Your greatest strength is:",
      options: [
        "Intelligence and analytical thinking",
        "Leadership and strategic planning",
        "Creativity and artistic expression",
        "Discipline and focus",
      ],
    },
    {
      question: "What do you value most in relationships?",
      options: ["Intellectual connection", "Loyalty and respect", "Passion and emotional depth", "Spiritual harmony"],
    },
  ]

  const personalityTypes = [
    {
      title: "The Scholar",
      description:
        "Like Ravana's scholarly head, you value knowledge and intellectual pursuits above all. Your analytical mind and thirst for wisdom are your greatest strengths, but beware of intellectual pride.",
      trait: "Knowledge without humility becomes arrogance",
      icon: "BookOpen",
    },
    {
      title: "The Ruler",
      description:
        "You embody Ravana's leadership qualities - decisive, strategic, and commanding. You have natural authority and vision, but must guard against becoming controlling or tyrannical.",
      trait: "Power must serve, not dominate",
      icon: "Crown",
    },
    {
      title: "The Artist",
      description:
        "Like Ravana's artistic side, you possess creative genius and aesthetic sensibility. Your expressive nature brings beauty to the world, but avoid vanity and self-absorption.",
      trait: "Create to express, not to impress",
      icon: "Music",
    },
    {
      title: "The Ascetic",
      description:
        "You reflect Ravana's disciplined, spiritual nature. Your self-control and focus are remarkable, but remember that extreme austerity can lead to imbalance.",
      trait: "Balance is more sustainable than extremes",
      icon: "Mountain",
    },
  ]

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex.toString()]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate result based on most common answer
      const counts = newAnswers.reduce(
        (acc, curr) => {
          acc[curr] = (acc[curr] || 0) + 1
          return acc
        },
        {} as Record<string, number>,
      )

      let maxCount = 0
      let maxAnswer = "0"

      Object.entries(counts).forEach(([answer, count]) => {
        if (count > maxCount) {
          maxCount = count
          maxAnswer = answer
        }
      })

      // Convert to number and ensure it's within bounds
      const resultIndex = Math.min(Number.parseInt(maxAnswer), personalityTypes.length - 1)
      setResult(personalityTypes[resultIndex])
    }
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setResult(null)
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
          <CardTitle className="text-orange-900 font-serif">Which Ravana Trait Are You?</CardTitle>
          <CardDescription className="text-orange-800">
            {result ? "Your Result" : `Question ${currentQuestion + 1} of ${questions.length}`}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          {result ? (
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center border border-orange-300">
                <Image
                  src={`/placeholder.svg?height=40&width=40&text=${result.icon}`}
                  alt={result.title}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-bold text-orange-900 font-serif">{result.title}</h3>
              <p className="text-orange-800 text-sm">{result.description}</p>
              <div className="bg-amber-100 p-3 rounded border border-amber-200 mt-4">
                <p className="text-sm italic text-orange-800">"{result.trait}"</p>
              </div>
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
                    onClick={() => handleAnswer(index)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="border-t border-amber-200 flex justify-between">
          {result ? (
            <>
              <Button
                variant="outline"
                className="border-amber-300 text-orange-800 hover:bg-orange-200/50"
                onClick={resetTest}
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
