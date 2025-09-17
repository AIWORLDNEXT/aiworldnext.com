import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { NewsCard, BlogCard, JobCard } from '@/components/Card'
import fs from 'fs'
import path from 'path'

export async function getStaticProps(){
  const filePath = path.join(process.cwd(),'content','startups.json')
  const data = JSON.parse(fs.readFileSync(filePath,'utf-8'))
  return { props: { data } }
}

export default function Page({data}){
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 capitalize">{'startups'}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(item=>(
            'startups'==='news'?<NewsCard key={item.id} item={item}/>:
            'startups'==='blogs'?<BlogCard key={item.id} item={item}/>:
            'startups'==='jobs'?<JobCard key={item.id} item={item}/>:
            <NewsCard key={item.id} item={item}/>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
