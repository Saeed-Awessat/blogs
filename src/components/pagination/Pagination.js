   
import React from 'react';
import style from './style/pagination.module.css';
import { Button } from 'react-bootstrap';


const Pagination = ({ blogsPerPage, totalBlogs, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className={style.root}>
        <div><Button variant='success' onClick={()=>paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</Button></div>
        <div><Button variant='success' onClick={()=>paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length}>Next</Button></div>
      </div>
    </nav>
  );
};

export default Pagination;