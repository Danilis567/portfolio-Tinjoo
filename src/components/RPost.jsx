import React from 'react'
import { Link } from 'react-router-dom'

export default function RPost({ title, text, date, category }) {
  return (
    <div className='rounded flex flex-col bg-white shadow w-full gap-3.5 p-4 cursor-pointer'>
      <Link to="/blog/blog_article">
        <h2 className="font-bold text-2xl text-dark">{title}</h2>
      </Link>

      <div className='flex flex-row gap-4'>
        <time className='text-lg text-dark font-normal'>{date}</time>
        |
        <span className='text-lg text-dark font-normal'>{category}</span>
      </div>
      <p className='text-base text-dark font-normal'>{text}</p>
    </div>
  )
}
