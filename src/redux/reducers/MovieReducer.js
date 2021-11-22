import { GET_MOVIE} from "../types/MovieType"
import { SET_MOVIE_DETAIL } from "../types/TheaterType"



const stateDefaut = {
    arrMovie: [],
    movieDetail:{}
  
}

export const MovieReducer = (state = stateDefaut, action) => {
    switch (action.type) {
        case GET_MOVIE: {
            state.arrMovie = action.arrMovie
          
            return { ...state }
        }
       

        case SET_MOVIE_DETAIL:{
            state.movieDetail = action.MovieDetail
            return {...state}
        }
        default: return { ...state }
    }
}