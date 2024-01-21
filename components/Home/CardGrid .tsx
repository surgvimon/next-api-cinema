'use client'
import React, { useEffect, useState } from 'react'
import LazyImage from './LazyImage'
import { IMAGE_URL } from '../../services/movies.service';
import RatingStart from './RatingStart';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const CardGrid  = () => {
    const { lists } = useSelector((state:any) => state.movies);
    const [moviesData, setMoviesData] = useState([]);
    useEffect(()=> {
        setMoviesData(lists);
    }, [lists]);

    const formatMovieTitle = (title:any) => {
        const titleStr = title.toLowerCase();
        return titleStr.replace(/ /g, '-');
    };
  return (
    <>
    <div className="grid">
        { moviesData.map((data:any) =>(
        <div key={data.id}>
            <LazyImage className="grid-cell" src={`${IMAGE_URL}${data.poster_path}`} alt="placeholder">
                <div className="grid-read-more">
                    <button className='grid-cell-button'>
                        <Link href={`/${data.id}/${formatMovieTitle(data.title)}/details`}>Read More</Link>
                    </button>
                </div>
                <div className="grid-detail">
                    <span className="grid-detail-title">{data.title}</span>
                    <div className="grid-detail-rating">
                        <RatingStart rating={data.vote_average} totalStars={10}/>
                        &nbsp;&nbsp;
                        <div className="grid-vote-average">{data.vote_average}</div>
                    </div>
                </div>
            </LazyImage>
        </div>
        ))}
    </div>
    </>
  )
}

export default CardGrid 
