import React from 'react'
import { Link } from 'react-router-dom'

import './MovieCard.scss'
import Button from '../../button/Button'
import { history } from '../../../App'



const MovieCard = props => {

    const item = props.item;

    return (
        <Link to={`/movie/${item.maPhim}`}>
           <div className="movie-card" style={{backgroundImage:`url(${item.hinhAnh})`}}>
              
               <Button className="small">
                    Xem thêm
                </Button>
            
               
            </div>

            <h3 style={{textAlign:'center'}}>{item.tenPhim}</h3>
        
        </Link>
     
    )
}


export default MovieCard
