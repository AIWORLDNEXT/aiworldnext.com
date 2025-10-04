import Link from "next/link"
import { Github, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Content",
      links: [
        { name: "News", href: "#news" },
        { name: "Jobs", href: "#jobs" },
        { name: "Products", href: "#products" },
        { name: "Startups", href: "#startups" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Learning", href: "#resources" },
        { name: "Blogs", href: "#blogs" },
        { name: "Podcasts", href: "#podcasts" },
        { name: "Websites", href: "#websites" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Forums", href: "#community" },
        { name: "Robotics", href: "#robotics" },
        { name: "Partnerships", href: "#partnerships" },
        { name: "Vision", href: "#vision" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
      ],
    },
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-mono text-xl font-bold text-primary-foreground">AI</span>
              </div>
              <span className="text-xl font-bold tracking-tight">AIWorldNext</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your comprehensive hub for AI and Robotics news, resources, and community.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AIWorldNext. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
