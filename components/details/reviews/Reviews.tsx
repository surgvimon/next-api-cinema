'use client'
import { IMAGE_URL } from '@/services/movies.service';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Reviews = () => {
  const { movie } = useSelector((state:any) => state.movies);
  const [reviews] = useState(movie[4]);

  return (
    <>
      <div className="movie-reviews">
        <div className="div-title">Reviews {reviews.results.length > 0 ? reviews.results.length : ''}</div>
        {reviews.results.length ? (
          reviews.results.map((data:any) => (
            <div className="reviews" key={data.id}>
              <h3>{data.author}</h3>
              <div>{data.content}</div>
            </div>
          ))
        ) : (
          <p>No reviews to show</p>
        )}
      </div>
    </>
  )
}

export default Reviews
