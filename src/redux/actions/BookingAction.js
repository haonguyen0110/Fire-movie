import { BookingDetail } from "../../model/BookingDetail";
import { bookingService } from "../../services/BookingService";
import { BOOKINGCOMPLETED, SET_DETAIL_BOOKING } from "../types/BookingType";





export const getDetailBookingAction = (maLichChieu) => {
    return async dispatch => {
        try {
            const result = await bookingService.getTicketDetail(maLichChieu);

            if (result.status === 200) {
                dispatch({
                    type: SET_DETAIL_BOOKING,
                    detailBooking: result.data.content
                })
               
            }


        } catch (error) {
            console.log('error', error.response?.data);
            console.log('error', error)
        }
    }
}


export const BookingAction = (bookingDetail = new BookingDetail()) => {
   
    return async dispatch => {
        try {
           

            const result = await bookingService.booking(bookingDetail);

            await dispatch(getDetailBookingAction(bookingDetail.maLichChieu))
            await dispatch({ type: BOOKINGCOMPLETED})
            alert('Chúc mừng bạn đã đặt vé thành công')
            
        } catch (error) {
     
            console.log('error', error)
        }
    }
}