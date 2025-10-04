import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, GraduationCap, ExternalLink } from "lucide-react"
import content from "@/data/content.json"

export function ResourcesSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "Course":
        return <GraduationCap className="h-5 w-5" />
      case "Library":
        return <Code className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  return (
    <section id="resources" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Learning Resources</h2>
          <p className="mt-2 text-pretty text-muted-foreground">Curated resources to advance your AI knowledge</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.resources.map((resource) => (
            <Card key={resource.id} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {getIcon(resource.type)}
                  </div>
                  {resource.free && (
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      Free
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-balance leading-snug">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Type</span>
                    <Badge variant="outline">{resource.type}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Level</span>
                    <span className="font-medium">{resource.level}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Provider</span>
                    <span className="font-medium">{resource.provider}</span>
                  </div>
                  <Button variant="outline" className="mt-4 w-full gap-2 bg-transparent" size="sm">
                    Access
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
