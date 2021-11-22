import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Banner from '../../component/banner/Banner'
import { OutlineButton } from '../../component/button/Button'
import Footer from '../../component/footer/Footer'
import MovieList from '../../component/movie/movieList/MovieList'
import Navbar from '../../component/navBar/Navbar'
import { getMovieAction } from '../../redux/actions/MovieAction'

export default function Homepage() {

    const dispatch= useDispatch()
    const { arrMovie } = useSelector(state => state.MovieReducer);
    const arrMovieShowing = arrMovie.filter(movie => movie.dangChieu === true) ;
    const arrMovieComing = arrMovie.filter(movie => movie.sapChieu === true) ;
    
  
    useEffect(() => {
        
        const action = getMovieAction()
        dispatch(action)
        
    },[])
    
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Phim đang chiếu</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">Xem thêm</OutlineButton>
                        </Link>
                    </div>
                    <MovieList arrMovie={arrMovieShowing} />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Phim sắp chiếu</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">Xem thêm</OutlineButton>
                        </Link>
                    </div>
                    <MovieList arrMovie={arrMovieComing}/>
                </div>
                
            </div>
            <Footer />


        </div>
    )
}
