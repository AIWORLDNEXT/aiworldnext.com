import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Calendar } from "lucide-react"
import Image from "next/image"
import content from "@/data/content.json"

export function StartupsSection() {
  return (
    <section id="startups" className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">AI Startups to Watch</h2>
          <p className="mt-2 text-pretty text-muted-foreground">Innovative companies shaping the future of AI</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.startups.map((startup) => (
            <Card key={startup.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image src={startup.image || "/placeholder.svg"} alt={startup.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-balance leading-snug">{startup.name}</CardTitle>
                <CardDescription>{startup.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="font-semibold">{startup.funding}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Founded {startup.founded}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {startup.employees} employees
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
