"use client"

import { TrendingUp, Users, Briefcase, Sparkles, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(96, 165, 250, ${particle.opacity})`
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-blue-900 animate-gradient-shift" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-60"
        style={{ mixBlendMode: "screen" }}
      />

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/20" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="text-center">
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 animate-ping-slow">
                <Sparkles className="h-14 w-14 text-blue-400/30" />
              </div>
              <Sparkles className="relative h-14 w-14 text-blue-400 animate-pulse-glow" />
            </div>
          </div>

          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
              Welcome to AIWorldNext
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-pretty text-xl leading-relaxed text-blue-100 sm:text-2xl animate-fade-in-up animation-delay-200">
            Global Hub for AI & Robotics – News, Blogs, Jobs, Tools, and Innovations
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-blue-200/90 sm:text-lg animate-fade-in-up animation-delay-400">
            Discover the latest in artificial intelligence and robotics. Connect with innovators, find opportunities,
            and stay ahead in the AI revolution.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/70 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-blue-400/50 bg-blue-950/50 text-blue-100 backdrop-blur-sm transition-all hover:border-blue-400 hover:bg-blue-900/50 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 transition-transform group-hover:rotate-12" />
                Get Started
              </span>
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 animate-fade-in-up animation-delay-800">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/60 to-blue-950/60 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border border-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 transition-transform group-hover:rotate-6">
                  <TrendingUp className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Latest Updates</h3>
                <p className="text-sm leading-relaxed text-blue-200/90">
                  Stay informed with real-time AI news and breakthroughs
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/60 to-blue-950/60 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 border border-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 transition-transform group-hover:rotate-6">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Global Community</h3>
                <p className="text-sm leading-relaxed text-blue-200/90">
                  Connect with AI professionals and enthusiasts worldwide
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-900/60 to-blue-950/60 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 border border-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 transition-transform group-hover:rotate-6">
                  <Briefcase className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Career Opportunities</h3>
                <p className="text-sm leading-relaxed text-blue-200/90">
                  Explore cutting-edge AI and robotics job openings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
