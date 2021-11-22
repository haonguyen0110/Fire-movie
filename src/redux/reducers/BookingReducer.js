import { BOOKING, BOOKINGCOMPLETED, SET_DETAIL_BOOKING } from "../types/BookingType"


const stateDefault = {
    detailBooking: {},
    choosingSeat: [],
    completedList: [],
 
}

export const BookingReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DETAIL_BOOKING: {
            state.detailBooking= action.detailBooking
            return { ...state }
        }
        case BOOKING: {

            let updateList = [...state.choosingSeat]
            let index = updateList.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe)
            if (index != -1) {
                updateList.splice(index, 1);
            } else {
                updateList.push(action.gheDuocChon)
            }
         
            return { ...state, choosingSeat: updateList,completedList:updateList}
        }

        
        case BOOKINGCOMPLETED: {
           
            state.choosingSeat = [];
            return { ...state }
        }
        default: return { ...state }
    }
}