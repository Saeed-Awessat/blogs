import React from 'react';
import Blog from './Blog';
import style from './style/blogsContainer.module.css';

const Blogs = ({ blogs, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={style.root}>
      {blogs.map(blog => (
        <div key={blog.id} className={style.blogContainer}>
          <Blog title={blog.title} description={blog.description} numOfLikes={blog.numOfLikes}/>
        </div>
      ))}
    </div>
  );
};

export default Blogs;