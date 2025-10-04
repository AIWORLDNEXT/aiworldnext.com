import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Handshake, Calendar } from "lucide-react"
import content from "@/data/content.json"

export function PartnershipsSection() {
  return (
    <section id="partnerships" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Strategic Partnerships</h2>
          <p className="mt-2 text-pretty text-muted-foreground">Major collaborations shaping the AI landscape</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.partnerships.map((partnership) => (
            <Card key={partnership.id} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Handshake className="h-6 w-6" />
                </div>
                <CardTitle className="text-balance leading-snug">
                  {partnership.partner1} × {partnership.partner2}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">{partnership.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Announced {partnership.announced}</span>
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    {partnership.focus}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
