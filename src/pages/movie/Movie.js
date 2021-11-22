import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../../component/banner/Banner'
import MovieCard from '../../component/movie/movieCard/MovieCard';
import Navbar from '../../component/navBar/Navbar'
import { getMovieAction } from '../../redux/actions/MovieAction';
import './Movie.scss'
export default function Movie() {
    const dispatch = useDispatch()
    const { arrMovie } = useSelector(state => state.MovieReducer);


    useEffect(() => {

        const action = getMovieAction()
        dispatch(action)

    }, [])
    return (
        <div>
            <Navbar />
            <Banner />

            <div className=" container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Tổng hợp tất cả phim</h2>
                    </div>
                    <div className="movie">
                        {arrMovie.map((item, i) => {
                            return <div className="movie__item"><MovieCard key={i} item={item} /></div>
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}
