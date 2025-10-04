import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, DollarSign, Briefcase, Building2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import content from "@/data/content.json"

export function JobsSection() {
  return (
    <section id="jobs" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-3">
          <Briefcase className="h-8 w-8 text-blue-500" />
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">AI Career Opportunities</h2>
            <p className="mt-1 text-pretty text-muted-foreground">
              Discover exciting roles at leading AI companies and research institutions
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.jobs.map((job) => (
            <Card
              key={job.id}
              className="group overflow-hidden transition-all hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={job.image || "/placeholder.svg"}
                  alt={job.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3">
                  <Badge className="bg-green-600 text-white hover:bg-green-700">{job.type}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 text-balance leading-snug">{job.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-500">
                  <Building2 className="h-4 w-4" />
                  {job.company}
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    {job.salary}
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400"
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
