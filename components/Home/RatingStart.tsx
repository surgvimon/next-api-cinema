'use client'
import React, { Fragment, useEffect, useRef, useState } from 'react'

const RatingStart = (props:any) => {
    const { rating, totalStars } = props;
    const ratingRef:any = useRef(null);

    useEffect(() => {
        let percentage;
        if(rating <= 5) {
            percentage = (rating / 5) * 100;
        } else {
            percentage = (rating / 10) * 100;
        }
        const startPercentage = `${Math.floor(percentage)}%`;
        ratingRef.current.style.width = startPercentage;
    }, [rating, totalStars]);
  return (
    <div className='star-rating'>
        <div className="back-stars">
            {[...Array(totalStars)].map((n,i) => 
                <Fragment key={i}>
                    <i className="ri-star-fill" aria-hidden="true"></i>
                </Fragment>
            )}
        </div>  
        <div className="front-stars" ref={ratingRef}>
            {[...Array(totalStars)].map((n,i) => 
                <Fragment key={i}>
                    <i className="ri-star-fill" aria-hidden="true"></i>
                </Fragment>
            )}
        </div>    
    </div>
  )
}

export default RatingStart
