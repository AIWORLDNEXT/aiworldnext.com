import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import content from "@/data/content.json"

export function ProductsSection() {
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Featured AI Products</h2>
          <p className="mt-2 text-pretty text-muted-foreground">Explore cutting-edge AI tools and platforms</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.products.map((product) => (
            <Card key={product.id} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <Badge variant="outline">{product.category}</Badge>
                  <span className="text-sm font-semibold text-primary">{product.price}</span>
                </div>
                <CardTitle className="text-balance leading-snug">{product.name}</CardTitle>
                <CardDescription className="text-xs">{product.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                <Button variant="outline" className="w-full gap-2 bg-transparent" size="sm">
                  Learn More
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
