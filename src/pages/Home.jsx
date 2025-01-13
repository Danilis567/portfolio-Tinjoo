import React, { useState } from 'react'
import RPost from "../components/RPost"
import { Link } from 'react-router-dom'
import WorksCard from '../components/WorksCard'

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  const posts = [
    { title: "Making a design system from scratch", category: "Design, Pattern", date: "12 Feb 2020", text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." },
    { title: "Building a web app with React", category: "Web Development", date: "15 Mar 2020", text: "Exercitation veniam consequat sunt nostrud amet." },
    { title: "UI/UX Design Trends 2020", category: "Design", date: "20 Apr 2020", text: "Velit officia consequat duis enim velit mollit." },
    { title: "Understanding JavaScript Closures", category: "Programming", date: "5 May 2020", text: "Exercitation veniam consequat sunt nostrud amet." },
    { title: "Introduction to GraphQL", category: "Backend", date: "10 Jun 2020", text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." },
    { title: "CSS Grid vs Flexbox", category: "Design", date: "25 Jul 2020", text: "Velit officia consequat duis enim velit mollit." },
  ];

  const pageNumbers = Math.ceil(posts.length / postsPerPage);
  const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='my-20 flex-col flex gap-12'>

      <section id='hero' className='px-2 lg:px-0 mx-auto max-w-[944px] flex flex-col-reverse md:flex-row md:items-center gap-24'>
        <div className='flex flex-col md:items-start gap-11'>
          <h2 className='font-bold text-5xl text-dark md:leading-snug text-center md:text-start'>
            Hi, I am John, <br />
            Creative Technologist
          </h2>
          <p className='text-dark text-base font-normal text-center md:text-start'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <button className='custom-btn w-full mx-auto md:w-auto md:mx-0'>
            Download Resume
          </button>
        </div>
        <img src="/assets/profil.png" />
      </section>

      <section id='Recent_posts' className='py-6' style={{ background: "#EDF7FA" }}>
        <div className='mx-auto max-w-[944px] flex flex-col gap-6 px-2 lg:px-0'>
          <div className='flex flex-row items-center justify-between'>
            <h4 className='text-dark font-normal text-xl'>Recent posts</h4>
            <Link to="blog">
              <span className='text-secondary font-normal text-end text-base cursor-pointer'>View all</span>
            </Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {currentPosts.map((post, index) => (
              <RPost key={index} category={post.category} date={post.date} text={post.text} title={post.title} />
            ))}
          </div>

          <div className='flex justify-center mt-4'>
            <ul className='flex gap-3'>
              {currentPage > 1 && (
                <li>
                  <button onClick={() => paginate(currentPage - 1)} className='px-4 py-2  rounded text-white bg-primary'>
                    Prev
                  </button>
                </li>
              )}
              {[...Array(pageNumbers)].map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 border  rounded ${currentPage === index + 1 ? 'rounded  text-white bg-primary' : ''}`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              {currentPage < pageNumbers && (
                <li>
                  <button onClick={() => paginate(currentPage + 1)} className='px-4 py-2  rounded text-white bg-primary'>
                    Next
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-[944px]' id='fetureWorks'>
        <div className='flex flex-col gap-8'>
          <h3 className='text-dark font-normal text-2xl'>Featured works</h3>
          <div className='flex flex-col gap-8 px-2 lg:px-0'>
            <WorksCard img={"/assets/rec.png"} title={"Making a design system from scratch"} text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."} date={"2020"} category={"Design, Pattern"} />
            <WorksCard img={"/assets/rec-2.png"} title={"Making a design system from scratch"} text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."} date={"2020"} category={"Design, Pattern"} />
            <WorksCard img={"/assets/rec-3.png"} title={"Making a design system from scratch"} text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."} date={"2020"} category={"Design, Pattern"} />
            <WorksCard img={"/assets/rec-5.png"} title={"Making a design system from scratch"} text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."} date={"2020"} category={"Design, Pattern"} />
          </div>
        </div>
      </section>

    </div>
  )
}
