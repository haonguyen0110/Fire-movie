import React, { Component } from 'react'
import { BookingDetail } from '../model/BookingDetail';
import { BaseService } from './BaseServices'

export default class BookingService extends BaseService {
    constructor() {
        super();
    }

    getTicketDetail = (ticketCode) => {
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${ticketCode}`)
    }
    booking = (bookingDetail = new BookingDetail()) => {
        return this.post(`api/QuanLyDatVe/DatVe`,bookingDetail)
    }
}

export const bookingService = new BookingService();