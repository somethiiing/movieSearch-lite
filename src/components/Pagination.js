import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

const Pagination = (props) => {
  const { pageCount, onPageChange, current } = props;

  return (
    <div id='react-paginate'>
      <ReactPaginate
        forcePage={current}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        onPageChange={onPageChange}
      />
    </div>
  )
}

export { Pagination };