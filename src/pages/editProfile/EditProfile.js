import React, { useEffect } from 'react'
import Banner from '../../component/banner/Banner'
import Footer from '../../component/footer/Footer'
import Navbar from '../../component/navBar/Navbar'
import Button from '../../component/button/Button'

import './EditProfile.scss'
import { useDispatch } from 'react-redux'
import { GROUPID, USER_LOGIN } from '../../util/config'

import { EditProfileAction } from '../../redux/actions/MemberAction'

export default function EditProfile() {

    const dispatch = useDispatch()
    const profile = JSON.parse(localStorage.getItem(USER_LOGIN));
   
    const Submit = (e) => {
        e.preventDefault()
        let taiKhoan = document.querySelector('#taiKhoan').value
        let email = document.querySelector('#email').value
        let hoTen = document.querySelector('#hoTen').value
        let soDT = document.querySelector('#soDT').value
        let matKhau = document.querySelector('#matKhau').value
        let values = {
            taiKhoan: taiKhoan,
            email: email,
            hoTen: hoTen,
            matKhau: matKhau,
            soDt: soDT,
            maNhom: GROUPID,
            maLoaiNguoiDung: profile.maLoaiNguoiDung,


        }
       
        dispatch(EditProfileAction(values))
    }
    
    useEffect(() => {
        document.querySelector('#taiKhoan').value = profile.taiKhoan
        document.querySelector('#email').value = profile.email
        document.querySelector('#hoTen').value = profile.hoTen
        document.querySelector('#soDT').value = profile.soDT
    }, [])
    return (
        <div>
            <Navbar />
            <Banner />

            <div className="container">
                <div style={{ marginBottom: '3rem' }}>
                    <div className="editProfile">
                        <div>
                            <h1>Cập nhật thông tin cá nhân</h1>

                            <form onSubmit={Submit}>
                                <div className="editProfile__item">
                                    <label>Tài khoản</label>
                                    <input name="taiKhoan" id="taiKhoan" disabled={true}></input>
                                    <a onClick={() => {

                                        document.querySelector('#taiKhoan').removeAttribute("disabled")
                                    }}>Cập nhật</a>
                                </div>
                                <div className="editProfile__item">
                                    <label>Mật khẩu</label>
                                    <input name="matKhau" id="matKhau" type="password" disabled={true}></input>
                                    <a onClick={() => {

                                        document.querySelector('#hoTen').removeAttribute("disabled")
                                    }}>Cập nhật</a>
                                </div>

                                <div className="editProfile__item">
                                    <label>Tài khoản</label>
                                    <input name="email" id="email" disabled={true}></input>
                                    <a onClick={() => {

                                        document.querySelector('#email').removeAttribute("disabled")
                                    }}>Cập nhật</a>
                                </div>
                                <div className="editProfile__item">
                                    <label>Họ và tên</label>
                                    <input id="hoTen" disabled={true} ></input>
                                    <a onClick={() => {

                                        document.querySelector('#hoTen').removeAttribute("disabled")
                                    }}>Cập nhật</a>
                                </div>
                                <div className="editProfile__item">
                                    <label>Số điện thoại</label>
                                    <input name="soDt" id="soDT" value={profile.soDT} disabled={true} ></input>
                                    <a onClick={() => {


                                        document.querySelector('#hoTen').removeAttribute("disabled")
                                    }}>Cập nhật</a>
                                </div>
                                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                    <Button type="submit">Xác nhận</Button>
                                </div>
                            </form>


                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
