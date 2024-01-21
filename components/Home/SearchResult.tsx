'use client'
import { openSearchPanel, searchQuery, searchResult } from '@/hook/movies';
import { Fragment, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import LazyImage from './LazyImage';
import RatingStart from './RatingStart';
import { IMAGE_URL } from '@/services/movies.service';
import Link from 'next/link';
import { Spin } from 'antd';

export default function SearchResult() {
    const { isOverlayOpen,searchResultValue, searchQueryValue } = useSelector((state:any) => state.movies);
    
    const [movieData, setMovieData] = useState([]);
    const [previousValue, setPreviousvalue] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const searchTerm = useRef(null);

    const closeSearch = () => {
        setMovieData([]);
        searchQuery('', dispatch);
        setPreviousvalue('');
        openSearchPanel(false, dispatch);
    };

    const formatMovieTitle = (title:any) => {
        const titleStr = title.toLowerCase();
        return titleStr.replace(/ /g, '-');
    };

    const onTypingLogic = (e:any) => {
        const searchValue = e.target.value;
        if(searchValue !== previousValue) {
            setLoading(true);
            setTimeout(() => {
                getResults(searchValue);
            }, 1000)
        }
        setPreviousvalue(searchValue);
    };

    const getResults = (search:any) => {
        searchQuery(search, dispatch);
        searchResult(search, dispatch);
        setLoading(false);
    }

    useEffect(()=> {
        setMovieData(searchResultValue);
        // if (searchTerm.current) {
        //     searchTerm.current.focus();
        // }
        // let elementReference = document.querySelector('.search-term');
        // if (elementReference instanceof HTMLElement) {
        //     elementReference.focus();
        // }    
    }, [searchResultValue]);

    return (
        <div className={`search-overlay ${isOverlayOpen ? 'search-overlay--active' : ' '}`}>
            <div className="search-overlay__top">
                <div className="container">
                    <i className="ri-search-line search-overlay__icon" aria-hidden="true"></i>
                    <input type="text" value={previousValue} className="search-term" placeholder="What are you looking for?" id="search-term" onChange={onTypingLogic} ref={searchTerm} />
                    <i className="ri-close-circle-fill search-overlay__close" aria-hidden="true" onClick={() => closeSearch()}></i>
                </div>
            </div>
            <div className="container">
                <div id="search-overlay__results">
                    <div className="searchKeyword">
                        <div className="grid-search-title">
                            <span className="grid-text1">Your search keyword : </span> <span className="grid-text2">{searchQueryValue.query}</span>
                        </div>
                    </div>
                    <div className="grid">
                        {loading 
                            ? (<Spin size="large" />)
                            :(movieData?.map((data:any) => (
                                <Fragment key={data.id}>
                                    {data.poster_path && (
                                    <LazyImage className="grid-cell" src={`${IMAGE_URL}${data.poster_path}`} alt="placeholder">
                                        <div className="grid-read-more">
                                        <button className="grid-cell-button">
                                            <Link href={`/${data.id}/${formatMovieTitle(data.title)}/details`}>Read More</Link>
                                        </button>
                                        </div>
                                        <div className="grid-detail">
                                        <span className="grid-detail-title">{data.title}</span>
                                        <div className="grid-detail-rating">
                                            <RatingStart rating={data.vote_average} totalStars={10} />
                                            &nbsp;&nbsp;
                                            <div className="grid-vote-average">{data.vote_average}</div>
                                        </div>
                                        </div>
                                    </LazyImage>
                                    )}
                                </Fragment>
                            )))
                        }
                    </div>
                </div>
            </div>
        </div>  
    )
}
