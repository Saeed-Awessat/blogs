import React, { useState, useEffect, createContext } from 'react';
import Blogs from './components/blogs/Blogs';
import Pagination from './components/pagination/Pagination';
import Header from './components/header/Header';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppContext = createContext(null);

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(8);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('mockData.json');
      setBlogs(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * blogsPerPage;
  const indexOfFirstPost = indexOfLastPost - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => { console.log(pageNumber); return setCurrentPage(pageNumber)};

  return (
    <AppContext.Provider value={{login, setLogin}}>
      <div className='app'>
        <div className='header'>
          <Header/>
        </div>
        <div className='main'>
          <Blogs blogs={currentBlogs} loading={loading} />
        </div>
        <div className='footer'>
          <Pagination
            blogsPerPage={blogsPerPage}
            totalBlogs={blogs.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
