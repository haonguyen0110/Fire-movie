import { history } from "../../App"


import { movieService } from "../../services/MovieService"
import { GET_MOVIE } from "../types/MovieType"




export const getMovieAction = (tenPhim = '') => {


    return async (dispatch) => {
  
      try {
  
        const result = await movieService.getMovie(tenPhim)
        const arrMovieSlice = result.data.content.slice(0, 30)
  
        dispatch({
          type: GET_MOVIE,
          arrMovie: arrMovieSlice
                
              })
      } catch (errors) {
        console.log(errors.response?.data)
        
      }
    }
  }
  