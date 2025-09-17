import React from 'react'
import fs from 'fs'
import path from 'path'
import GenericCard from '../components/Card'

export default function Home({data}){
  return (
    <div>
      <section className="py-8">
        <h1 className="text-4xl font-bold mb-2 text-white">AIWorldNet — Global AI & Robotics Hub</h1>
        <p className="text-gray-400 mb-6">News, blogs, jobs, tools and resources for the AI community.</p>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">Blogs</h2>
          <a href="/blogs" className="text-sm text-indigo-300">View All →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {{data['blogs'].slice(0,4).map((item)=> (
            <div key={{item.id}}><GenericCard item={{...item}} /></div>
          ))}}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">Community</h2>
          <a href="/community" className="text-sm text-indigo-300">View All →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {{data['community'].slice(0,4).map((item)=> (
            <div key={{item.id}}><GenericCard item={{...item}} /></div>
          ))}}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">Jobs</h2>
          <a href="/jobs" className="text-sm text-indigo-300">View All →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {{data['jobs'].slice(0,4).map((item)=> (
            <div key={{item.id}}><GenericCard item={{...item}} /></div>
          ))}}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">News</h2>
          <a href="/news" className="text-sm text-indigo-300">View All →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {{data['news'].slice(0,4).map((item)=> (
            <div key={{item.id}}><GenericCard item={{...item}} /></div>
          ))}}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">Partnerships</h2>
          <a href="/partnerships" className="text-sm text-indigo-300">View All →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {{data['partnerships'].slice(0,4).map((item)=> (
            <div key={{item.id}}><GenericCard item={{...item}} /></div>
          ))}}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">Podcasts</h2>
          <a href="/podcasts" className="text-sm text-indigo-300">View All →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {{data['podcasts'].slice(0,4).map((item)=> (
            <div key={{item.id}}><GenericCard item={{...item}} /></div>
          ))}}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">Products</h2>
          <a href="/products" className="text-sm text-indigo-300">View All →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {{data['products'].slice(0,4).map((item)=> (
            <div key={{item.id}}><GenericCard item={{...item}} /></div>
          ))}}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">Resources</h2>
          <a href="/resources" className="text-sm text-indigo-300">View All →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {{data['resources'].slice(0,4).map((item)=> (
            <div key={{item.id}}><GenericCard item={{...item}} /></div>
          ))}}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">Robotics</h2>
          <a href="/robotics" className="text-sm text-indigo-300">View All →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {{data['robotics'].slice(0,4).map((item)=> (
            <div key={{item.id}}><GenericCard item={{...item}} /></div>
          ))}}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">Startups</h2>
          <a href="/startups" className="text-sm text-indigo-300">View All →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {{data['startups'].slice(0,4).map((item)=> (
            <div key={{item.id}}><GenericCard item={{...item}} /></div>
          ))}}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">Tools</h2>
          <a href="/tools" className="text-sm text-indigo-300">View All →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {{data['tools'].slice(0,4).map((item)=> (
            <div key={{item.id}}><GenericCard item={{...item}} /></div>
          ))}}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">Vision</h2>
          <a href="/vision" className="text-sm text-indigo-300">View All →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {{data['vision'].slice(0,4).map((item)=> (
            <div key={{item.id}}><GenericCard item={{...item}} /></div>
          ))}}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">Websites</h2>
          <a href="/websites" className="text-sm text-indigo-300">View All →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {{data['websites'].slice(0,4).map((item)=> (
            <div key={{item.id}}><GenericCard item={{...item}} /></div>
          ))}}
        </div>
      </section>

    </div>
  )
}

export async function getStaticProps(){
  const contentDir = path.join(process.cwd(),'content');
  const data = {};
  data['blogs'] = JSON.parse(fs.readFileSync(path.join(contentDir,'blogs.json')));
  data['community'] = JSON.parse(fs.readFileSync(path.join(contentDir,'community.json')));
  data['jobs'] = JSON.parse(fs.readFileSync(path.join(contentDir,'jobs.json')));
  data['news'] = JSON.parse(fs.readFileSync(path.join(contentDir,'news.json')));
  data['partnerships'] = JSON.parse(fs.readFileSync(path.join(contentDir,'partnerships.json')));
  data['podcasts'] = JSON.parse(fs.readFileSync(path.join(contentDir,'podcasts.json')));
  data['products'] = JSON.parse(fs.readFileSync(path.join(contentDir,'products.json')));
  data['resources'] = JSON.parse(fs.readFileSync(path.join(contentDir,'resources.json')));
  data['robotics'] = JSON.parse(fs.readFileSync(path.join(contentDir,'robotics.json')));
  data['startups'] = JSON.parse(fs.readFileSync(path.join(contentDir,'startups.json')));
  data['tools'] = JSON.parse(fs.readFileSync(path.join(contentDir,'tools.json')));
  data['vision'] = JSON.parse(fs.readFileSync(path.join(contentDir,'vision.json')));
  data['websites'] = JSON.parse(fs.readFileSync(path.join(contentDir,'websites.json')));

  return { props: { data } }
}
