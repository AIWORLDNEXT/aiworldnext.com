import React from 'react'
import Link from 'next/link'

export default function Navbar(){ return (
  <header className="w-full bg-[#061226] border-b border-gray-800">
    <div className="container flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <Link href="/"><img src="/logo.png" alt="AIWorldNet" className="h-10 w-auto" /></Link>
        <div className="text-white font-semibold text-lg">AIWorldNet</div>
      </div>
      <nav className="hidden md:flex gap-6 text-sm text-gray-300">
        <Link href="/news">News</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/products">Products</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/startups">Startups</Link>
        <Link href="/robotics">Robotics</Link>
        <Link href="/tools">Tools</Link>
      </nav>
    </div>
  </header>
) }