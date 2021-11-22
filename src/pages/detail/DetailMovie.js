import React, { useEffect } from 'react'
import Navbar from '../../component/navBar/Navbar'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from 'react-router';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import { getMovieDetail } from '../../redux/actions/TheaterAction';
import Button from '../../component/button/Button'
import MovieModal from '../../component/modal/Modal';


import './DetailMovie.scss'
import './ReactTab.css'
import '../../component/movie/movieCard/MovieCard.scss'


export default function DetailMovie(props) {
    const dispatch = useDispatch()
    const movieDetail = useSelector(state => state.MovieReducer.movieDetail)
    const { id } = useParams();


    useEffect(() => {


        dispatch(getMovieDetail(id))

    }, [])
    return (
        <div className="detail" style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}>
            <Navbar />
            <div className="container">
                <div className="detail__content">
                    <div className="detail__content__item">

                        <div className="movie-card" style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}>

                            <Button>Xem trailer</Button>
                            <MovieModal movie={movieDetail} />


                        </div>
                    </div>
                    <div className="detail__content__item">
                        <div className="item__content">
                            <h2>{movieDetail.tenPhim}</h2>
                            <h5>Ngày khởi chiếu: <Moment format="DD/MM/YYYY">{movieDetail.ngayKhoiChieu}</Moment></h5>
                            <p>{movieDetail.moTa}</p>

                        </div>
                    </div>

                </div>

                <div className="showTime">
                    <h3>Lịch chiếu phim</h3>
                    <div className="showTime__table">
                        <Tabs>
                            <TabList>
                                {movieDetail.heThongRapChieu?.map((item, i) => {
                                    return <Tab index={i}>
                                        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', }}>
                                            <img src={item.logo} alt="..." width={50} />
                                            <h5 style={{ marginLeft: "1.5rem" }}>{item.tenHeThongRap}</h5>
                                        </div>
                                    </Tab>

                                })}
                            </TabList>



                            {movieDetail.heThongRapChieu?.map((rap, i) => {
                                return rap.cumRapChieu.map((item, i) => {
                                    return <TabPanel>
                                        <div className="panel-content">
                                            <h2>{item.tenCumRap}</h2>
                                            <p>Địa chỉ: {item.diaChi}</p>
                                            <div style={{ display: 'flex', marginTop: '3rem', justifyContent: "center" }}>
                                                {
                                                    item.lichChieuPhim?.slice(0, 10).map((lich, i) => {
                                                        return <div style={{ margin: "0 1.5rem" }} >
                                                            <Button>
                                                                <Link to={`/checkout/${lich.maLichChieu}`}><Moment format="HH:mm">{lich.ngayChieuGioChieu}</Moment> </Link>
                                                                
                                                            </Button>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </TabPanel>
                                })
                            })}
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}
