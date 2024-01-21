'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
// import Tabs from './tab/Tabs'
import Overview from './overview/Overview'
import Crew from './crew/Crew'
import Media from './media/Media'
import Reviews from './reviews/Reviews'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieDetails } from '@/hook/movies'
import { IMAGE_URL } from '@/services/movies.service'
import LoadingComponent from '../LoadingComponent'
import RatingStart from '../Home/RatingStart'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd';

const Details = () => {
  const [details, setDetails]:any = useState([]);
  const { movie } = useSelector((state:any) => state.movies);
  const { loading , error} = useSelector((state:any) => state.async);
  const { id } = useParams();
  const dispatch = useDispatch();

  const onChange = (key: string) => {
    console.log(key);
  };
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Overview',
      children: <Overview/>,
    },
    {
      key: '2',
      label: 'Crew',
      children: <Crew/>,
    },
    {
      key: '3',
      label: 'Media',
      children: <Media/>,
    },
    {
      key: '4',
      label: 'Reviews',
      children: <Reviews/>,
    },
  ];

  useEffect(() => {
    if(movie.length === 0) {
      setMovieDetails(id, dispatch);
    }
    setDetails(movie[0])
    console.log(movie[0]?.id + "_" + id)
  }, [id, dispatch, movie])
  return (
    <>
      {details && (
          <div className="movie-container">
            <div className="movie-bg" style={{ backgroundImage: `url(${IMAGE_URL}${details.backdrop_path})` }}></div>
            <div className="movie-overlay"></div>
            <div className="movie-details">
              <div className="movie-image">
              <img src={`${IMAGE_URL}${details.poster_path}`} alt="" />
              </div>
              <div className="movie-body">
                <div className="movie-overview">
                  <div className="title">
                    {details.title} <span>{details.release_date}</span>         
                  </div>
                  <div className="movie-genres">
                    <u className="genres">
                      {details.genres?.map((genre:any) => (
                        <li key={genre.id}>{genre.name}</li>
                      ))}
                    </u>
                  </div>
                  <div className="rating">
                    <RatingStart rating={details.vote_average} totalStars={10}/>
                    &nbsp;
                    <span>{details.vote_average}</span><p>({details.vote_count}) reviews</p>
                  </div>
                  <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="custom-tab" />
                  {/* <Tabs>
                    <div label="Overview">
                      <Overview/>
                    </div>
                    <div label="Crew">
                      <Crew/>
                    </div>
                    <div label="Media">
                      <Media/>
                    </div>
                    <div label="Reviews">
                      <Reviews/>
                    </div>
                  </Tabs> */}
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default Details
