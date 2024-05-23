import React from 'react'

export default function Posts({currentPosts, loading}) {
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <ul className='list-group'>
      {currentPosts.length > 0 &&
      currentPosts.map((post)=>(
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  )
}
