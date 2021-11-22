import React from 'react'
import { BaseService } from './BaseServices'

export  class TheaterService extends BaseService {
    constructor() {
        super();
    }
    getMovieTheater=(maPhim)=>{
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
}

export const theaterService = new TheaterService();
