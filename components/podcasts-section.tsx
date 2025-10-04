import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mic, Play } from "lucide-react"
import Image from "next/image"
import content from "@/data/content.json"

export function PodcastsSection() {
  return (
    <section id="podcasts" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">AI Podcasts</h2>
          <p className="mt-2 text-pretty text-muted-foreground">
            Listen to expert conversations about AI and technology
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.podcasts.map((podcast) => (
            <Card key={podcast.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image src={podcast.image || "/placeholder.svg"} alt={podcast.title} fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
                  <Button size="icon" className="h-16 w-16 rounded-full">
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
              </div>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Mic className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{podcast.episodes} episodes</span>
                </div>
                <CardTitle className="text-balance leading-snug">{podcast.title}</CardTitle>
                <CardDescription>Hosted by {podcast.host}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{podcast.description}</p>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Play className="h-4 w-4" />
                  Listen Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
