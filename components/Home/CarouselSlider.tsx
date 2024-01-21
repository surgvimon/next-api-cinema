import { Carousel } from 'antd'
import React from 'react'

export default function CarouselSlider({imgCarousel}:any) {
  
  return (
    <Carousel autoplay>
        {imgCarousel && (
          imgCarousel.map ((img:any) => (
            <div key={img.id}>
              <div style={{backgroundImage: `url(${img.url})`}}  className='carousel-slider'></div>
            </div>
          ))
        )} 
    </Carousel>
  )
}
