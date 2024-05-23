import './App.css'
import Posts from './compounents/Posts'
import Pagination from './compounents/Pagination'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const url = 'https://jsonplaceholder.typicode.com/posts'
      const res = await axios.get(url)
      console.log('res', res)
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFristPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFristPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className="container">
      <header className="App-header">
        <h1 className="text-primary">My Blog</h1>
      </header>
      <Posts currentPosts={currentPosts} loading={loading} />
      <Pagination
        paginate={paginate}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        totalPosts={posts.length}
      />
    </div>
  )
}

export default App
