import React from 'react'

export default function BlogArticle() {
  return (
    <div className='mx-auto max-w-[944px] flex  flex-col gap-8 p-2 my-20'>
      <div className=' flex flex-col gap-9'>
        <h1 className='text-4xl font-bold text-dark'>Designing Dashboards with usability in mind</h1>
        <div className='flex flex-row gap-4 items-center'>
          <span className='badge_article'> 2025 </span>
          <p className='text-xl text-dark font-normal ' >Dashboard, User Experience Design</p>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <p className="blog-body-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <img src="/assets/blog-rec-1.png" />
        <h2 className='headling-1'>Heading 1</h2>
        <h3 className='headling-2'>Heading 2</h3>
        <p className="blog-body-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <img className='img' src="/assets/blog-rec-3.png" />
        <img className='img' src="/assets/blog-rec-2.png" />
      </div>



    </div>
  )
}
