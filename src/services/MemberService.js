import React, { Component } from 'react'
import { BaseService } from './BaseServices'

export class MemberService extends BaseService {
    constructor() {
        super();
    }

    signUp = (signUpDetail) => {
        return this.post(`api/QuanLyNguoiDung/DangKy`, signUpDetail)
    }


    signIn = (signInDetail) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`, signInDetail)
    }

    getProfile = (taiKhoan)=>{
        return this.post(`api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`,taiKhoan)
    }

    editProfile = (thongTinNguoiDung) => {
        return this.post(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,thongTinNguoiDung)
    }
}

export const memberService = new MemberService();
