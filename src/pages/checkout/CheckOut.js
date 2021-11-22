import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import _ from 'lodash'
import { BookingAction, getDetailBookingAction } from '../../redux/actions/BookingAction';
import { BOOKING } from '../../redux/types/BookingType';
import Button from '../../component/button/Button'
import './CheckOut.scss'
import { BookingDetail } from '../../model/BookingDetail';

export default function CheckOut() {

    const { userLogin } = useSelector(state => state.MemberReducer)
    const { detailBooking, choosingSeat } = useSelector(state => state.BookingReducer)
    const { thongTinPhim, danhSachGhe } = detailBooking
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    console.log(detailBooking)
    console.log(choosingSeat)
    const renderGhe = () => {
        return detailBooking.danhSachGhe?.map((ghe, index) => {
            let gheVip = ghe.loaiGhe === "Vip" ? 'vip' : '';
            let gheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            let gheDangDat = ""
            let indexGheDD = choosingSeat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

            if (indexGheDD !== -1) {
                gheDangDat = "gheDangDat"
            }
            return <Fragment>
                <button onClick={() => {


                    dispatch({
                        type: BOOKING,
                        gheDuocChon: ghe
                    })
                }} disabled={ghe.daDat} className={`ghe shadow-inner  ${gheDaDat} ${gheDangDat}  ${gheVip} `} key={index}>

                    {/* {(ghe.daDat) ? <UserOutlined /> : ghe.stt} */}
                    {ghe.stt}

                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>

        })
    }

    useEffect(() => {

        const action = getDetailBookingAction(id)

        dispatch(action)
    }, [])
    return (
        <div className="checkout" style={{ backgroundImage: `url(${thongTinPhim?.hinhAnh})` }}>
            <h1>{thongTinPhim?.tenPhim}</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <img src="https://tix.vn/app/assets/img/icons/screen.png" alt=".." />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div >
                    {renderGhe()}
                </div>
            </div>


            <div className="result">
                <h1>Thông tin vé đã chọn</h1>
                <div className="result__content">
                    <table>
                        <tr>
                            <td>Tên phim</td>
                            <td>{thongTinPhim?.tenPhim}</td>
                        </tr>
                        <tr>
                            <td>Tên cụm rạp</td>
                            <td>{thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}</td>
                        </tr>
                        <tr>
                            <td>Địa chỉ</td>
                            <td>{thongTinPhim?.diaChi}</td>
                        </tr>
                        <tr>
                            <td>Ngày chiếu</td>
                            <td>{thongTinPhim?.ngayChieu}</td>
                        </tr>
                        <tr>
                            <td>Ghế đã chọn</td>

                            <td>{_.sortBy(choosingSeat, ['stt']).map((gheDD, index) => {
                                return <span key={index}>[{gheDD.stt}]</span>


                            })}</td>
                        </tr>
                        <tr>
                            <td>Tổng tiền</td>
                            <td> {choosingSeat.reduce((tongTien, ghe, index) => {
                                return tongTien += ghe.giaVe
                            }, 0).toLocaleString()}<sup>đ</sup>  </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <div onClick={()=>{
                                       if (choosingSeat.length === 0) {
                                        alert("Vui lòng chọn ghế !")
                                    } else {
                                        const bookingDetail = new BookingDetail();
                                        bookingDetail.maLichChieu = id
                                        bookingDetail.danhSachVe = choosingSeat;
                                        dispatch(BookingAction(bookingDetail))
                                        navigate('/')
                                    }
                                }}>
                                    <Button>Đặt vé</Button>
                                </div>
                            </td>
                        </tr>

                    </table>
                </div>

            </div>
        </div>
    )
}
