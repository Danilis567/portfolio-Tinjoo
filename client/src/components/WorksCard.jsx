import React from 'react'
import { Link } from 'react-router-dom'

export default function WorksCard({ img, title, text, date, category }) {
    return (
        <div className='flex flex-col md:flex-row gap-4 items-center pb-4 border-b'>
            <img src={img} className='rounded-md w-full md:w-auto object-cover' />
            <div className='flex flex-col gap-2'>
                <Link to="/blog/blog_article">
                    <h3 className='text-3xl font-bold text-dark'> {title} </h3>
                </Link>

                <div className='flex items-center gap-4'>
                    <p className='badge text-center'> {date} </p>
                    <span className='text-light text-xl'> {category} </span>
                </div>
                <p className='text-base text-dark font-normal'> {text} </p>
            </div>
        </div>
    )
}
