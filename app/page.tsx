"use client"

import type React from "react"

import Image from "next/image"
import { ArrowRight, Brain, Film, GamepadIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TraitCard from "@/components/trait-card"
import TimelineEvent from "@/components/timeline-event"
import QuizChallenge from "@/components/quiz-challenge"
import PersonalityTest from "@/components/personality-test"
import { useState } from "react"

export default function HomePage() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [showPersonalityTest, setShowPersonalityTest] = useState(false)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const traits = [
    {
      id: 1,
      title: "The Scholar",
      positive: "Unmatched Knowledge",
      negative: "Intellectual Pride",
      lesson: "Knowledge without humility becomes arrogance",
      icon: "BookOpen",
    },
    {
      id: 2,
      title: "The Ruler",
      positive: "Visionary Leadership",
      negative: "Tyrannical Control",
      lesson: "Power must serve, not dominate",
      icon: "Crown",
    },
    {
      id: 3,
      title: "The Devotee",
      positive: "Spiritual Discipline",
      negative: "Ritualism Without Ethics",
      lesson: "Devotion without compassion is empty",
      icon: "Heart",
    },
    {
      id: 4,
      title: "The Warrior",
      positive: "Courage & Skill",
      negative: "Aggression & Conquest",
      lesson: "Strength should protect, not threaten",
      icon: "Shield",
    },
    {
      id: 5,
      title: "The Artist",
      positive: "Creative Genius",
      negative: "Vanity & Self-absorption",
      lesson: "Create to express, not to impress",
      icon: "Music",
    },
    {
      id: 6,
      title: "The Strategist",
      positive: "Brilliant Planning",
      negative: "Manipulation & Deceit",
      lesson: "Strategy without ethics leads to downfall",
      icon: "ChessKnight",
    },
    {
      id: 7,
      title: "The Ascetic",
      positive: "Self-discipline",
      negative: "Extreme Austerity",
      lesson: "Balance is more sustainable than extremes",
      icon: "Mountain",
    },
    {
      id: 8,
      title: "The Innovator",
      positive: "Technological Mastery",
      negative: "Misuse of Innovation",
      lesson: "Technology should elevate humanity, not control it",
      icon: "Lightbulb",
    },
    {
      id: 9,
      title: "The Lover",
      positive: "Passionate Devotion",
      negative: "Possessive Desire",
      lesson: "Love respects boundaries; attachment violates them",
      icon: "HeartHandshake",
    },
    {
      id: 10,
      title: "The Immortal Seeker",
      positive: "Ambition & Drive",
      negative: "Fear of Mortality",
      lesson: "Legacy comes from impact, not endless life",
      icon: "Infinity",
    },
  ]

  const timelineEvents = [
    {
      year: "Ancient Era",
      title: "Birth of Ravana",
      description: "Born to sage Vishrava and rakshasi Kaikesi, with divine and demonic heritage",
      modernLesson: "Our diverse origins shape but don't define our potential",
    },
    {
      year: "Early Life",
      title: "Penance to Lord Brahma",
      description: "Performed intense meditation for thousands of years to gain power",
      modernLesson: "Consistent effort and focus can achieve seemingly impossible goals",
    },
    {
      year: "Rise to Power",
      title: "Conquest of Lanka",
      description: "Defeated his half-brother Kubera and established his golden kingdom",
      modernLesson: "Success built on others' downfall creates lasting enmity",
    },
    {
      year: "Golden Era",
      title: "Lanka's Prosperity",
      description: "Created an advanced civilization with remarkable technology and wealth",
      modernLesson: "Visionary leadership can transform societies",
    },
    {
      year: "Turning Point",
      title: "Abduction of Sita",
      description: "Kidnapped Lord Rama's wife, setting in motion his eventual downfall",
      modernLesson: "One ethical failure can undo a lifetime of achievements",
    },
    {
      year: "Final Chapter",
      title: "Battle with Rama",
      description: "Fought valiantly but was ultimately defeated by Rama",
      modernLesson: "Even the mightiest must face consequences for their actions",
    },
    {
      year: "Legacy",
      title: "Ravana's Last Wisdom",
      description: "On his deathbed, shared wisdom with Lakshmana about life and leadership",
      modernLesson: "Wisdom often comes too late; learn from others' mistakes",
    },
  ]

  const galleryImages = [
    { id: 1, title: "Ravana with Ten Heads" },
    { id: 2, title: "Ravana Lifting Mount Kailash" },
    { id: 3, title: "Ravana Playing the Veena" },
    { id: 4, title: "Ravana's Golden Lanka" },
    { id: 5, title: "Battle with Rama" },
    { id: 6, title: "Ravana's Wisdom" },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-900 via-red-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background texture"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-8 bg-[url('/placeholder.svg?height=32&width=1920')] bg-repeat-x"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-[url('/placeholder.svg?height=32&width=1920')] bg-repeat-x transform rotate-180"></div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-4">
          <div className="w-24 h-24 mb-4">
            <Image
              src="/placeholder.svg?height=96&width=96"
              alt="Decorative Om symbol"
              width={96}
              height={96}
              className="opacity-80"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter font-serif">Ravana Reloaded</h1>
          <p className="text-xl md:text-2xl text-amber-200 max-w-[800px] font-serif">
            10 Heads, 100 Lessons: Ancient Wisdom for Modern Times
          </p>
          <div className="w-full max-w-3xl h-[300px] md:h-[400px] relative mt-8">
            <Image
              src="/ravana.png?height=800&width=1200"
              alt="Ravana silhouette against modern cityscape"
              fill
              className="object-contain"
            />
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white border border-amber-500"
              onClick={() => scrollToSection("traits")}
            >
              Explore The 10 Heads <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-100 hover:bg-amber-800/30"
              onClick={() => scrollToSection("timeline")}
            >
              Learn His Story
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-amber-50 to-amber-100 border-b border-amber-200">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4 text-orange-900 font-serif">Who Was Ravana?</h2>
              <p className="text-orange-800 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Ravana, the ten-headed king of Lanka from the Hindu epic Ramayana, is often portrayed simply as a
                villain. Yet, he was also a scholar, musician, warrior, and ruler of unparalleled abilities. His complex
                character offers profound insights into human potential and pitfalls.
              </p>
              <p className="text-orange-800 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-4">
                Beyond the mythology, Ravana represents the eternal human struggle between knowledge and wisdom, power
                and responsibility, ambition and ethics. His story remains startlingly relevant in our modern world.
              </p>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden border-4 border-amber-300 shadow-lg">
              <Image
                src="/ravana2.png?height=800&width=800"
                alt="Artistic representation of Ravana"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10 Traits Section */}
      <section
        id="traits"
        className="w-full py-12 md:py-24 bg-gradient-to-b from-amber-100 to-orange-50 border-b border-amber-200"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="w-16 h-16 mb-2">
              <Image src="/10h.png?height=64&width=64" alt="Decorative element" width={64} height={64} />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-900 font-serif">
              The 10 Heads of Wisdom
            </h2>
            <p className="text-orange-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px]">
              Each head of Ravana represents a different aspect of his character - both his extraordinary strengths and
              fatal flaws.
            </p>
          </div>

          <Tabs defaultValue="grid" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-amber-200">
                <TabsTrigger value="grid" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                  Grid View
                </TabsTrigger>
                <TabsTrigger
                  value="carousel"
                  className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                >
                  Carousel
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="grid" className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {traits.map((trait) => (
                  <TraitCard key={trait.id} trait={trait} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="carousel" className="w-full">
              <div className="flex overflow-x-auto pb-4 space-x-4 snap-x">
                {traits.map((trait) => (
                  <div key={trait.id} className="min-w-[300px] snap-center">
                    <TraitCard trait={trait} />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Myth Meets Modern Section */}
      <section
        id="timeline"
        className="w-full py-12 md:py-24 bg-gradient-to-b from-orange-50 to-amber-50 border-b border-amber-200"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="w-16 h-16 mb-2">
              <Image src="/r.png?height=64&width=64" alt="Decorative element" width={64} height={64} />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-900 font-serif">
              Myth Meets Modern
            </h2>
            <p className="text-orange-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px]">
              Ravana's journey through time offers timeless lessons for today's world.
            </p>
          </div>

          <div className="relative border-l-2 border-orange-600 ml-4 md:ml-[50%] space-y-12 py-8">
            {timelineEvents.map((event, index) => (
              <TimelineEvent key={index} event={event} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section
        id="media"
        className="w-full py-12 md:py-24 bg-gradient-to-b from-red-900 via-red-800 to-orange-900 text-white border-y border-amber-700"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="w-16 h-16 mb-2">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Decorative element"
                width={64}
                height={64}
                className="opacity-80"
              />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
              Experience The Story
            </h2>
            <p className="text-amber-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px]">
              Dive deeper into Ravana's world through multimedia experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-orange-900 border-amber-700 shadow-lg overflow-hidden">
              <CardHeader className="border-b border-amber-700/50">
                <CardTitle className="text-amber-100 font-serif">Featured Presentation</CardTitle>
                <CardDescription className="text-amber-300">Watch the full story of Ravana</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-video bg-black/30 rounded-md flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors border border-amber-700/50">
                  <Film className="h-16 w-16 text-amber-500" />
                  {/* Replace with actual video embed */}
                </div>
              </CardContent>
              <CardFooter className="bg-orange-950/30">
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-200 hover:bg-amber-800/30"
                  onClick={() => window.open("https://youtu.be/MFnnxsvgY5M?si=ooz-u5axK_ZU4MUP", "_blank")}
                >
                  Watch Now
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-orange-900 border-amber-700 shadow-lg overflow-hidden">
              <CardHeader className="border-b border-amber-700/50">
                <CardTitle className="text-amber-100 font-serif">Interactive Gallery</CardTitle>
                <CardDescription className="text-amber-300">Explore artistic interpretations</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-2">
                  {galleryImages.map((img) => (
                    <div
                      key={img.id}
                      className="aspect-square bg-black/30 rounded-md border border-amber-700/50 overflow-hidden hover:border-amber-500 transition-all cursor-pointer flex items-center justify-center"
                      onClick={() => window.alert(`Viewing: ${img.title}`)}
                    >
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=${img.id}`}
                        alt={img.title}
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-orange-950/30">
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-200 hover:bg-amber-800/30"
                  onClick={() => scrollToSection("gallery-full")}
                >
                  View Full Gallery
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section
        id="interactive"
        className="w-full py-12 md:py-24 bg-gradient-to-b from-amber-50 to-orange-50 border-b border-amber-200"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="w-16 h-16 mb-2">
              <Image src="/placeholder.svg?height=64&width=64" alt="Decorative element" width={64} height={64} />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-900 font-serif">
              Test Your Knowledge
            </h2>
            <p className="text-orange-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px]">
              Engage with Ravana's story through interactive experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-amber-300 shadow-md bg-gradient-to-br from-amber-50 to-amber-100">
              <CardHeader>
                <CardTitle className="text-orange-900 font-serif">Ravana Quiz Challenge</CardTitle>
                <CardDescription className="text-orange-800">
                  Test how well you know the ten-headed king
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-6">
                <Brain className="h-16 w-16 text-orange-600" />
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  onClick={() => setShowQuiz(true)}
                >
                  Start Quiz
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-300 shadow-md bg-gradient-to-br from-amber-50 to-amber-100">
              <CardHeader>
                <CardTitle className="text-orange-900 font-serif">Which Ravana Trait Are You?</CardTitle>
                <CardDescription className="text-orange-800">
                  Discover which of the 10 heads matches your personality
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-6">
                <GamepadIcon className="h-16 w-16 text-orange-600" />
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  onClick={() => setShowPersonalityTest(true)}
                >
                  Take The Test
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Quiz Modal */}
        {showQuiz && <QuizChallenge onClose={() => setShowQuiz(false)} />}

        {/* Personality Test Modal */}
        {showPersonalityTest && <PersonalityTest onClose={() => setShowPersonalityTest(false)} />}
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-orange-900 to-red-900 text-white border-t border-amber-700">
        <div className="container px-4 md:px-6 text-center">
          <div className="w-16 h-16 mx-auto mb-6">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Decorative element"
              width={64}
              height={64}
              className="opacity-80"
            />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 font-serif">
            Continue The Journey
          </h2>
          <p className="text-amber-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px] mx-auto mb-8">
            Subscribe to receive more insights from ancient wisdom applied to modern challenges.
          </p>

          {subscribed ? (
            <div className="bg-amber-800/30 border border-amber-600 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-amber-100">Thank you for subscribing! We'll send you wisdom from the ancient texts.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md bg-amber-800/30 border border-amber-600 text-white w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white whitespace-nowrap border border-amber-500"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-orange-950 text-amber-200 border-t border-amber-800">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 font-serif">Ravana Reloaded</h3>
              <p className="text-sm text-amber-300">
                Exploring the wisdom and lessons from one of mythology's most complex characters.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-serif">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("traits")}
                    className="text-sm hover:text-amber-100 transition-colors"
                  >
                    The 10 Heads
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("timeline")}
                    className="text-sm hover:text-amber-100 transition-colors"
                  >
                    Timeline
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("media")}
                    className="text-sm hover:text-amber-100 transition-colors"
                  >
                    Media Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("interactive")}
                    className="text-sm hover:text-amber-100 transition-colors"
                  >
                    Interactive
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-serif">Connect</h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => window.alert("Twitter link clicked")}
                  className="text-amber-300 hover:text-amber-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </button>
                <button
                  onClick={() => window.alert("Instagram link clicked")}
                  className="text-amber-300 hover:text-amber-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </button>
                <button
                  onClick={() => window.alert("YouTube link clicked")}
                  className="text-amber-300 hover:text-amber-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-amber-800/50 text-center">
            <p className="text-xs">&copy; {new Date().getFullYear()} Ravana Reloaded. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
