import CarouselSlider from "@/components/Home/CarouselSlider";
import Paginate from "@/components/Home/Paginate";
import { getMovies, setResponsePageNumber } from "@/hook/movies";
import { IMAGE_URL } from "@/services/movies.service";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardGrid from "./CardGrid ";


export default function HomeContent() {
    const { lists, page, totalPages, movieType } = useSelector((state:any) => state.movies);
    const [currentPage, setCurrentPage] = useState(page);
    const dispatch = useDispatch();

    const HEADER_TYPE:any = {
        now_playing: 'Now Playing',
        popular: 'Popular',
        top_rated: 'Top Rated',
        upcoming: 'Upcoming'
    };
    const randomMovies= Object.freeze(lists).slice().sort(() => Math.random() - Math.random()).slice(0, 4)
    const sliderArr = randomMovies.length && [
        {
            id: 1,
            url: `${IMAGE_URL}/${randomMovies[0].backdrop_path}`
        },
        {
            id: 2,
            url: `${IMAGE_URL}/${randomMovies[1].backdrop_path}`
        },
        {
            id: 3,
            url: `${IMAGE_URL}/${randomMovies[2].backdrop_path}`
        },
        {
            id: 4,
            url: `${IMAGE_URL}/${randomMovies[3].backdrop_path}`
        }
    ];
    const paginate = (type:any) => {
        let pageNumber = currentPage;
        if (type === 'prev' && currentPage >= 1) {
            pageNumber -= 1;
    
        } else {
            pageNumber += 1;
        }
        setCurrentPage(pageNumber);
        setResponsePageNumber(pageNumber, totalPages, dispatch);
        getMovies(movieType, pageNumber, dispatch);
    };
    return (
        <>
        <div className="main-content">
            <CarouselSlider imgCarousel={sliderArr}/>
            
            <div className="grid-movie-title container">
                <div className="movieType">{HEADER_TYPE[movieType]}</div>
                <div className="paginate">
                    <Paginate currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
                </div>
            </div>
            <CardGrid />
        </div>
        </>
    )
}
