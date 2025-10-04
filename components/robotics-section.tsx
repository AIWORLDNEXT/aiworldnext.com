import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot } from "lucide-react"
import Image from "next/image"
import content from "@/data/content.json"

export function RoboticsSection() {
  return (
    <section id="robotics" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Robotics Innovations</h2>
          <p className="mt-2 text-pretty text-muted-foreground">Latest breakthroughs in robotics and automation</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.robotics.map((item) => (
            <Card key={item.id} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="secondary" className="gap-1">
                    <Bot className="h-3 w-3" />
                    {item.category}
                  </Badge>
                  <span className="text-sm font-semibold text-primary">{item.company}</span>
                </div>
                <CardTitle className="text-balance leading-snug">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
