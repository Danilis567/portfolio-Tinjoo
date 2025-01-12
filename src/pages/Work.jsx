import React, { useState } from 'react'
import WorksCard from "../components/WorksCard"

export default function Work() {
  const [currentPage, setCurrentPage] = useState(1);
  const worksPerPage = 4;

  const works = [
    { img: "/rec.png", title: "Making a design system from scratch", date: "2020", category: "Design , Pattern", text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." },
    { img: "/rec-2.png", title: "Building a web app with React", date: "2021", category: "Web Development", text: "Velit officia consequat duis enim velit mollit." },
    { img: "/rec-3.png", title: "UI/UX Design Trends", date: "2022", category: "Design", text: "Exercitation veniam consequat sunt nostrud amet." },
    { img: "/rec-4.png", title: "Understanding JavaScript Closures", date: "2023", category: "Programming", text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." },
    { img: "/rec-4.png", title: "Introduction to GraphQL", date: "2020", category: "Backend", text: "Velit officia consequat duis enim velit mollit." },
    { title: "CSS Grid vs Flexbox", date: "2021", category: "Design", text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." },
  ];

  const pageNumbers = Math.ceil(works.length / worksPerPage);
  const currentWorks = works.slice((currentPage - 1) * worksPerPage, currentPage * worksPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='flex flex-col gap-10 my-20 mx-auto max-w-[944px] px-4'>
      <h2 className='font-bold text-5xl text-dark'>Works</h2>

      <div className='flex flex-col gap-8'>
        {currentWorks.map((work, index) => (
          <WorksCard
            key={index}
            img={work.img ?? "src/assets/rec.png"}
            title={work.title}
            text={work.text}
            date={work.date}
            category={work.category}
          />
        ))}
      </div>

      
      <div className='flex justify-center mt-4'>
        <ul className='flex gap-3'>
          {currentPage > 1 && (
            <li>
              <button onClick={() => paginate(currentPage - 1)} className='px-4 py-2 rounded text-white bg-primary'>
                Prev
              </button>
            </li>
          )}
          {[...Array(pageNumbers)].map((_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 border rounded ${currentPage === index + 1 ? 'rounded text-white bg-primary' : ''}`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          {currentPage < pageNumbers && (
            <li>
              <button onClick={() => paginate(currentPage + 1)} className='px-4 py-2 rounded text-white bg-primary'>
                Next
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
