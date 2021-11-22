import { theaterService } from "../../services/TheaterService"
import { SET_MOVIE_DETAIL } from "../types/TheaterType"

export const getMovieDetail = (id)=>{
    return async dispatch=>{
        try{
            const result= await theaterService.getMovieTheater(id)
           
            dispatch({
                type:SET_MOVIE_DETAIL,
                MovieDetail:result.data.content
            })
        }catch(errors){
            console.log('error',errors.reponse?.data)
        }
    }
}