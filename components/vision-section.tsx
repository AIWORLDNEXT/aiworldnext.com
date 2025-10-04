import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Rocket, Zap } from "lucide-react"
import content from "@/data/content.json"

export function VisionSection() {
  const icons = [Sparkles, Rocket, Zap]

  return (
    <section id="vision" className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{content.vision.title}</h2>
          <p className="mt-2 text-pretty text-lg text-muted-foreground">{content.vision.subtitle}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {content.vision.sections.map((section, index) => {
            const Icon = icons[index]
            return (
              <Card key={section.year} className="border-2 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="mb-2 text-sm font-semibold text-primary">{section.year}</div>
                  <CardTitle className="text-balance text-2xl leading-snug">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.predictions.map((prediction, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs font-semibold text-accent">
                          {idx + 1}
                        </span>
                        <span className="text-muted-foreground">{prediction}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h3 className="text-balance text-2xl font-bold">Join Us in Building the Future</h3>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            The future of AI and robotics is being written today. Stay informed, get involved, and be part of the
            transformation that will define the next era of human progress.
          </p>
        </div>
      </div>
    </section>
  )
}
