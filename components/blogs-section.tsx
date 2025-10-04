import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, BookOpen, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import content from "@/data/content.json"

export function BlogsSection() {
  return (
    <section id="blogs" className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-blue-500" />
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Featured Blogs</h2>
            <p className="mt-1 text-pretty text-muted-foreground">
              In-depth articles from AI experts and thought leaders
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.blogs.map((blog) => (
            <Card
              key={blog.id}
              className="group overflow-hidden transition-all hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3">
                  <Badge className="bg-purple-600 text-white hover:bg-purple-700">{blog.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 text-balance leading-snug">{blog.title}</CardTitle>
                <CardDescription className="line-clamp-2">{blog.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {blog.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {blog.date}
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
