import React from 'react'

export default function Pagination({
  paginate,
  postsPerPage,
  currentPage,
  totalPosts}) {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++ ){
      pageNumbers.push(i)
    }
    console.log('pagenumber',pageNumbers)
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number)=>{
        return <li key={number} className='page-item'> 
                  <a onClick={()=>paginate(number)} href="#" className={`page-link ${currentPage === number? 'active-page':''}`}>
                    {number}
                  </a>
                </li>
        })}
      </ul>
    </nav>
  )
}
