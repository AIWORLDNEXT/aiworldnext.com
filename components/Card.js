import React from 'react'

function safeDate(d){
  try{ if(!d) return 'N/A'; const dt=new Date(d); if(isNaN(dt)) return 'N/A'; return dt.toLocaleDateString(); }catch(e){return 'N/A'; }
}

export function NewsCard({item}){
  const img = item.image && item.image.length ? item.image : 'https://source.unsplash.com/800x600/?artificial-intelligence,robotics';
  return (
    <article className="bg-gradient-to-b from-[#0b1220] to-[#071026] rounded-xl overflow-hidden shadow-lg border border-gray-800">
      <div className="relative">
        <img src={img} alt={item.title} className="w-full h-44 object-cover brightness-75"/>
        <div className="absolute left-4 bottom-4 text-white">
          {(item.tags||[]).map((t,idx)=>(<span key={idx} className="text-xs bg-black/40 px-2 py-1 rounded mr-2">{t}</span>))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{item.description || item.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div>📅 {safeDate(item.date || item.date_posted)}</div>
          <div>📰 {item.source || item.author || 'Unknown'}</div>
        </div>
      </div>
    </article>
  )
}

export function BlogCard({item}){
  const img = item.image && item.image.length ? item.image : 'https://source.unsplash.com/800x600/?coding,ai';
  return (
    <article className="bg-[#081426] rounded-xl overflow-hidden shadow border border-gray-800">
      <img src={img} alt={item.title} className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold mb-1">{item.title}</h3>
        <div className="text-xs text-gray-400 mb-2">By {item.author || 'Team'} · {safeDate(item.date)}</div>
        <p className="text-sm text-gray-300 mb-3">{item.excerpt || item.description}</p>
        <a href={item.link || '#'} className="text-sm text-indigo-300">Read →</a>
      </div>
    </article>
  )
}

export function JobCard({item}){
  const img = item.image && item.image.length ? item.image : 'https://source.unsplash.com/800x600/?office,team';
  return (
    <article className="bg-[#081426] rounded-xl overflow-hidden shadow border border-gray-800">
      <div className="p-4 flex gap-3">
        <img src={img} alt={item.title} className="w-20 h-20 object-cover rounded-lg"/>
        <div className="flex-1">
          <h3 className="font-semibold">{item.title}</h3>
          <div className="text-sm text-gray-400">{item.company} · {item.location}</div>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-xs text-gray-400">Posted: {safeDate(item.date_posted)}</div>
            <a href={item.apply_link} className="px-3 py-1 bg-indigo-600 rounded text-white text-sm">Apply</a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function GenericCard({item}){
  const img = item.image && item.image.length ? item.image : 'https://source.unsplash.com/800x600/?ai,technology';
  return (
    <article className="bg-[#081426] rounded-xl overflow-hidden shadow border border-gray-800">
      <img src={img} alt={item.title || item.name} className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold mb-1">{item.title || item.name}</h3>
        <p className="text-sm text-gray-300 mb-2">{item.description || item.excerpt || ''}</p>
        <div className="text-xs text-gray-400">{item.company || item.type || item.category || ''}</div>
        <a href={item.link || '#'} className="text-sm text-indigo-300 mt-2 inline-block">View →</a>
      </div>
    </article>
  )
}
