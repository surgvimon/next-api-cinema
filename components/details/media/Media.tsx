'use client'
import { IMAGE_URL } from '@/services/movies.service';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Media = () => {
  const { movie } = useSelector((state:any) => state.movies);
  const [media] = useState(movie[2]);
  const [videos] = useState(movie[3]);

  return (
    <>
      <div className="media">
        <div>
          <div className="media-title">Watch Trailer</div>
          <div className="media-videos">
            {videos.results.map((data:any) => (
              <div className="video" key={data.key}>
                <iframe
                  title="Avengers"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                  src={`https://www.youtube.com/embed/${data.key}`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="media-title">Photos ({media.posters.length})</div>
          <div className="media-images">
            {media.posters.map((data:any, i:any) => (
              <div
                key={i}
                className="image-cell"
                style={{
                  backgroundImage: `url(${IMAGE_URL}${data.file_path})`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Media
