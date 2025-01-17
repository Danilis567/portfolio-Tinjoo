import React, { useState } from 'react'
import PostCard from '../components/PostCard'

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; 

  const posts = [
    { title: "UI Interactions of the week", text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.", date: "12 Feb 2020", category: "Design , Pattern" },
    { title: "UI Design Principles", text: "Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", date: "14 Feb 2020", category: "Design , Pattern" },
    { title: "Building Accessible Websites", text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.", date: "16 Feb 2020", category: "Web Development" },
    { title: "Modern CSS Layouts", text: "Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", date: "18 Feb 2020", category: "Design , Pattern" },
    { title: "JavaScript for Beginners", text: "Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", date: "20 Feb 2020", category: "Programming" },
    { title: "Web Performance Optimization", text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.", date: "22 Feb 2020", category: "Web Development" },
    { title: "Web Performance Optimization", text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.", date: "22 Feb 2020", category: "Web Development" },
    { title: "Web Performance Optimization", text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.", date: "22 Feb 2020", category: "Web Development" },

  ];

  const pageNumbers = Math.ceil(posts.length / postsPerPage);
  const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col gap-10 my-20 mx-auto max-w-[944px] px-4">
      <h2 className="font-bold text-5xl text-dark">Blog</h2>
      
      {currentPosts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          text={post.text}
          date={post.date}
          category={post.category}
        />
      ))}

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
                className={`px-4 py-2 border rounded ${currentPage === index + 1 ? 'text-white bg-primary' : ''}`}
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
  );
}