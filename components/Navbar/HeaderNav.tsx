'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { clearMovieDetails, getMovies, openSearchPanel, searchQuery, searchResult, setMovieType, setResponsePageNumber } from '@/hook/movies';
import { useDispatch, useSelector } from "react-redux";


export default function HeaderNav() {
  const router = useRouter();
  const patch = usePathname();
  const { lists, page, totalPages } = useSelector((state:any) => state.movies);
  const [current, setCurrent] = useState('now_playing');
  const dispatch = useDispatch();
  let [navClass, setNavClass] = useState(false);

  const HEADER_LIST = [
    {
      id: 1,
      iconClass: 'ri-film-fill',
      name: 'Now Playing',
      type: 'now_playing'
    },
    {
      id: 2,
      iconClass: 'ri-fire-fill',
      name: 'Popular',
      type: 'popular'
    },
    {
      id: 3,
      iconClass: 'ri-star-fill',
      name: 'Top Rated',
      type: 'top_rated'
    },
    {
      id: 4,
      iconClass: 'ri-add-box-fill',
      name: 'Upcoming',
      type: 'upcoming'
    }
  ];
  const toggleMenu = () => {
    navClass = !navClass;
    setNavClass(navClass);
  };

  const openSearch = () => {
    openSearchPanel(true, dispatch);
  };

  const handleMenuClick  = (type: any, name:any) => {
    router.push(`/`)
    setCurrent(type)
    setMovieType(type, dispatch)
    getMovies(type, 1, dispatch)
    setResponsePageNumber(1, totalPages, dispatch);
    clearMovieDetails(dispatch);
  };

  const handleLogoClick  = () => {
    router.push(`/`)
    setCurrent('now_playing')
    setMovieType('now_playing', dispatch)
    getMovies('now_playing', 1, dispatch)
    setResponsePageNumber(1, totalPages, dispatch);
    clearMovieDetails(dispatch);
  };

  useEffect(() => {
    if(lists.length === 0){
      getMovies(current, page, dispatch)
      setResponsePageNumber(page, totalPages, dispatch);
    }
  }, [current, lists]);

  return (
    <header className="site-header">
      <div className="header-bar"></div>
      <div className="header-navbar container">
        <h1 className="band-logo-text float-left" onClick={handleLogoClick}>
          <a href="#"><strong>Fictional</strong> Cinema</a>
        </h1>
        <span onClick={() => openSearch()} className="js-search-trigger site-header__search-trigger"><i className="ri-search-line" aria-hidden="true"></i></span>
        <i className={`site-header__menu-trigger ${navClass ? 'ri-close-circle-fill' : 'ri-menu-line'}`} aria-hidden="true" onClick={() => toggleMenu()}></i>
        <div className={`site-header__menu ${navClass ? 'site-header__menu--active' : ' '} group`}>
          <nav className="main-navigation">
            <ul>
              {HEADER_LIST.map((data) => (
                  <li key={data.id} className={data.type === current ? 'header-nav-item active-item' : 'header-nav-item'} onClick={() =>handleMenuClick(data.type, data.name)}>
                    <a >
                    <span className="header-list-name">
                      <i className={data.iconClass}></i>
                    </span>
                    &nbsp;
                    <span className="header-list-name">{data.name}</span>
                    </a>
                  </li>
              ))}
            </ul>
          </nav>
          <div className="site-header__util">
            {/* 
            <a href="#" className="btn btn--small btn--orange float-left push-right">Login</a>
            <a href="#" className="btn btn--small btn--dark-orange float-left">Sign Up</a>
             */}
            <span className="search-trigger js-search-trigger" onClick={() => openSearch()}><i className="ri-search-line" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>
    </header>
  )
}
