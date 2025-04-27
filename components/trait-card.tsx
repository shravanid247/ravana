import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Crown,
  Heart,
  Shield,
  Music,
  CastleIcon as ChessKnight,
  Mountain,
  Lightbulb,
  HeartHandshake,
  Infinity,
} from "lucide-react"

interface TraitProps {
  trait: {
    id: number
    title: string
    positive: string
    negative: string
    lesson: string
    icon: string
  }
}

export default function TraitCard({ trait }: TraitProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className="h-6 w-6" />
      case "Crown":
        return <Crown className="h-6 w-6" />
      case "Heart":
        return <Heart className="h-6 w-6" />
      case "Shield":
        return <Shield className="h-6 w-6" />
      case "Music":
        return <Music className="h-6 w-6" />
      case "ChessKnight":
        return <ChessKnight className="h-6 w-6" />
      case "Mountain":
        return <Mountain className="h-6 w-6" />
      case "Lightbulb":
        return <Lightbulb className="h-6 w-6" />
      case "HeartHandshake":
        return <HeartHandshake className="h-6 w-6" />
      case "Infinity":
        return <Infinity className="h-6 w-6" />
      default:
        return <BookOpen className="h-6 w-6" />
    }
  }

  return (
    <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-lg border-amber-300 bg-gradient-to-br from-amber-50 to-amber-100">
      <CardHeader className="pb-2 border-b border-amber-200">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold text-orange-900 font-serif">{trait.title}</CardTitle>
          <div className="bg-orange-100 p-2 rounded-full text-orange-600 border border-orange-200">
            {getIcon(trait.icon)}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-4">
        <div className="space-y-2 mb-4">
          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200">
            {trait.positive}
          </Badge>
          <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200">
            {trait.negative}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="bg-amber-100/50 rounded-b-lg border-t border-amber-200 pt-4">
        <p className="text-sm text-orange-800 italic">"{trait.lesson}"</p>
      </CardFooter>
    </Card>
  )
}
