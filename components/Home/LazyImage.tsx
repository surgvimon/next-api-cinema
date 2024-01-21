'use client'
import React, { useEffect, useRef, useState } from 'react'
// import PropTypes from 'prop-types';

const LazyImage = (props:any) => {
    const { src, alt, children, className } = props;
    const [imageSrc, setImageSrc] = useState('../lazy_loader.gif');
    // const [imageRef, setImageRef] = useState();
  
    const imageRef = useRef<HTMLDivElement >(null);
    
    useEffect(() => {
        setImageSrc(src);
    }, [src, imageSrc, imageRef]);
    
    return (
        <>
        <div className={className} ref={imageRef} style={{ backgroundImage: `url(${imageSrc})` }}>
            {children}
        </div>
        </>
    )
}

// LazyImage.propTypes = {
//     src: PropTypes.string,
//     alt: PropTypes.string,
//     children: PropTypes.any,
//     className: PropTypes.any
// };
  
export default LazyImage
