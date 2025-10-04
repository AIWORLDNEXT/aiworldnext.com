import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, ExternalLink } from "lucide-react"
import content from "@/data/content.json"

export function CommunitySection() {
  return (
    <section id="community" className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">AI Communities</h2>
          <p className="mt-2 text-pretty text-muted-foreground">
            Connect with AI enthusiasts and professionals worldwide
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.community.map((community) => (
            <Card key={community.id} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-3xl">
                  {community.icon}
                </div>
                <CardTitle className="text-balance leading-snug">{community.name}</CardTitle>
                <CardDescription>{community.platform}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="font-semibold">{community.members}</span>
                    <span className="text-muted-foreground">members</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{community.description}</p>
                  <Button variant="outline" className="mt-4 w-full gap-2 bg-transparent" size="sm">
                    Join
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
