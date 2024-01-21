'use client'
import MainLayout from "@/components/Layout/MainLayout";
import LoadingComponent from "@/components/LoadingComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import HomeContent from "@/components/Home/HomeContent";
import SearchResult from "@/components/Home/SearchResult";
import { loadMoreMovies } from "@/hook/movies";


export default function Home() {
  const { loading } = useSelector((state:any) => state.async);
  const { page, totalPages, getSearchResult, movieType, isOverlayOpen } = useSelector((state:any) => state.movies);
  const dispatch = useDispatch();
  const mainRef = useRef<HTMLInputElement>(null);;
  const bottomLineRef = useRef<HTMLInputElement>(null);;
  const [currentPage, setCurrentPage] = useState(page);

  const fetchData = () => {
    let pageNumber = currentPage;
    if (page < totalPages) {
      pageNumber += 1;
      setCurrentPage(pageNumber);
      loadMoreMovies(movieType, pageNumber, dispatch);
    }
  };

  const handleScroll = () => {
    const containerHeight:any = mainRef.current?.getBoundingClientRect().height;
    const { top: bottomLineTop }:any = bottomLineRef.current?.getBoundingClientRect();
    if (bottomLineTop <= containerHeight) {
      fetchData();
    }
    // console.log(bottomLineTop +"<=" +containerHeight)
  };

  // useEffect(() => {
  //   loadMoreMovies('now_playing', currentPage, dispatch)
    // console.log(isOverlayOpen)
  // });
  return (
    <>
    {loading ? <LoadingComponent /> : (
      <MainLayout>
        <main className="main" ref={mainRef} onScroll={handleScroll}>
          {/* {getSearchResult && getSearchResult.length === 0 ? <HomeContent /> : <SearchResult />} */}
          <SearchResult />
          <HomeContent />
          <div ref={bottomLineRef}></div>
        </main>
      </MainLayout>
    )}
    </>
  )
}
