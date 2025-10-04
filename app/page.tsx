import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { JobsSection } from "@/components/jobs-section"
import { ProductsSection } from "@/components/products-section"
import { StartupsSection } from "@/components/startups-section"
import { ResourcesSection } from "@/components/resources-section"
import { BlogsSection } from "@/components/blogs-section"
import { PodcastsSection } from "@/components/podcasts-section"
import { CommunitySection } from "@/components/community-section"
import { RoboticsSection } from "@/components/robotics-section"
import { WebsitesSection } from "@/components/websites-section"
import { PartnershipsSection } from "@/components/partnerships-section"
import { VisionSection } from "@/components/vision-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <NewsSection />
        <JobsSection />
        <ProductsSection />
        <StartupsSection />
        <ResourcesSection />
        <BlogsSection />
        <PodcastsSection />
        <CommunitySection />
        <RoboticsSection />
        <WebsitesSection />
        <PartnershipsSection />
        <VisionSection />
      </main>
      <Footer />
    </div>
  )
}
