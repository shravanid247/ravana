import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TimelineEventProps {
  event: {
    year: string
    title: string
    description: string
    modernLesson: string
  }
  isLeft: boolean
}

export default function TimelineEvent({ event, isLeft }: TimelineEventProps) {
  return (
    <div className={`relative ${isLeft ? "md:mr-[50%] pr-4 md:pr-12" : "md:ml-[50%] pl-4 md:pl-12"}`}>
      {/* Timeline dot */}
      <div className="absolute top-0 -left-[9px] md:-left-[11px] h-4 w-4 rounded-full bg-orange-600 border-4 border-amber-100"></div>

      <Card className="border-amber-300 shadow-md bg-gradient-to-br from-amber-50 to-amber-100">
        <CardHeader className="pb-2 border-b border-amber-200">
          <CardDescription className="text-orange-600 font-medium">{event.year}</CardDescription>
          <CardTitle className="text-orange-900 font-serif">{event.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-orange-800 mb-4">{event.description}</p>
          <div className="bg-amber-50 p-3 border-l-2 border-orange-500 rounded">
            <p className="text-sm font-medium text-orange-900">Modern Lesson:</p>
            <p className="text-sm text-orange-800 italic">{event.modernLesson}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
