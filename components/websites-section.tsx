import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, ExternalLink } from "lucide-react"
import content from "@/data/content.json"

export function WebsitesSection() {
  return (
    <section id="websites" className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Essential AI Websites</h2>
          <p className="mt-2 text-pretty text-muted-foreground">Must-visit platforms for AI practitioners</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.websites.map((website) => (
            <Card key={website.id} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Globe className="h-6 w-6" />
                </div>
                <CardTitle className="text-balance leading-snug">{website.name}</CardTitle>
                <CardDescription className="font-mono text-xs">{website.url}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline">{website.category}</Badge>
                  <p className="text-sm text-muted-foreground">{website.description}</p>
                  <Button variant="outline" className="mt-4 w-full gap-2 bg-transparent" size="sm">
                    Visit
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
