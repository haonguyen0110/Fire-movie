import React, { useEffect } from 'react'
import NavBar from '../../component/navBar/Navbar'
import Banner from '../../component/banner/Banner'
import { Link, useNavigate } from 'react-router-dom';
import { USER_LOGIN } from '../../util/config'
import { Redirect } from 'react-router-dom';
import Button from '../../component/button/Button'
import Footer from '../../component/footer/Footer'

import './Profile.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '../../redux/actions/MemberAction';
import Moment from 'react-moment';

export default function Profile() {
    let profile = JSON.parse(localStorage.getItem(USER_LOGIN))
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { bookingInformation } = useSelector(state => state.MemberReducer)
    const bookingHistory = bookingInformation.reverse()
    const renderBookingHistory = () => {
        return bookingHistory.map((item, i) => {
            return <div key={i} className="profile__content__history">
                <img src={`${item.hinhAnh}`} width={150} height={200} alt=".." />
                <div>
                    <h5>{item.tenPhim}</h5>
                    <p>Ngày đặt: <Moment format="DD/MM/YYYY HH:mm">{item.ngayDat}</Moment></p>
                    <p>{item.danhSachGhe[0].tenHeThongRap} - {item.danhSachGhe[0].tenCumRap}</p>
                    <p>Danh sách ghế đã đặt: {item.danhSachGhe.map((ghe, i) => {
                        return <span style={{ marginRight: "1rem" }} key={i}>[{ghe.tenGhe}]</span>
                    })} </p>

                    <p>Tổng tiền: {(item.danhSachGhe.length * item.giaVe).toLocaleString()}<sup>đ</sup></p>
                </div>
            </div>

        })

    }
    useEffect(() => {

        dispatch(getProfileAction(profile.taiKhoan))
    }, [])
    return (
        <div>
            <NavBar />
            <Banner />

            <div className="container">
                <div className="profile__content">
                    <div className="profile__content__items">
                        <h1>Thông tin cá nhân</h1>
                        <div >
                            <table style={{ position: 'relative' }} >
                                <tr style={{ height: '50px' }}>
                                    <td >Tài Khoản</td>
                                    <td >{profile.taiKhoan}</td>
                                </tr>
                                <tr style={{ height: '50px' }}>
                                    <td >Họ và tên</td>
                                    <td >{profile.hoTen}</td>
                                </tr>
                                <tr style={{ height: '50px' }}>
                                    <td >Email</td>
                                    <td >{profile.email}</td>
                                </tr>
                                <tr style={{ height: '50px' }}>
                                    <td >Số điện thoại</td>
                                    <td >{profile.soDT}</td>
                                </tr>
                                <tr style={{ height: '100px' }}>
                                    <div style={{ position: 'absolute', bottom: '0', right: '0' }}>
                                        <Link to="/profile/edit" ><Button>Cập nhật</Button></Link>

                                    </div>

                                </tr>

                            </table>

                        </div>
                    </div>



                </div>
                <div className="profile__content">
                    <h1>Lịch sử đặt vé</h1>
                    <div>
                        {renderBookingHistory()}
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
