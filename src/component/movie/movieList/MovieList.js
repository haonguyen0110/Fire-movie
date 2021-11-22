import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../movieCard/MovieCard'
import "swiper/swiper-bundle.css";
import './MovieList.scss'
export default function MovieList(props) {

    const items = props.arrMovie
    useEffect(() => {
      
    },[])
    
    return (
        <div>
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={30}
                slidesPerView={'auto'}
                
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
          
        </div>
    </div>
    )
}
