'use client'
import React, { useState, useEffect } from 'react';
import { Radio } from 'antd';


export default function Paginate(props:any) {
    const { currentPage, totalPages, paginate } = props;
    const [page, setPage] = useState('');
    const [totalPageNumber, setTotalPageNumber] = useState('');
  
    useEffect(() => {
      setPage(currentPage);
      setTotalPageNumber(totalPages);
    }, [currentPage, totalPages]);
  
  return (
    <>
      <span className="pageCount">
        {page} - {totalPageNumber}
      </span>
      <Radio.Group buttonStyle="solid" onChange={(e) => paginate(e.target.value)}>
        <Radio.Button value="prev">Prev</Radio.Button>
        <Radio.Button value="next">Next</Radio.Button>
      </Radio.Group>
    </>
  )
}
