import React from 'react'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/navBar/Navbar'
import Button from '../../component/button/Button'

import './SignUp.scss'
import { GROUPID } from '../../util/config';
import { signUpAction } from '../../redux/actions/MemberAction';


export default function SignUp(props) {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "",
            hoTen: ""
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string()
                .min(4, "Tên tài khoản quá ngắn! (Từ 4 -30 ký tự)")
                .max(30, "Tên tài khoản quá dài! (Từ 4 -30 ký tự)")
                .required("Trường này không thể để trống!"),
            email: Yup.string()
                .email("Email không hợp lệ")
                .required("Trường này không thể để trống!"),
            matKhau: Yup.string()
                .min(6, "Tối thiểu 6 ký tự!")
                .required("Trường này không thể để trống!"),

            hoTen: Yup.string()
                .min(6, "Họ và tên không hợp lệ (Tối thiểu 6 ký tự)")
                .required("Trường này không thể để trống!"),
        }),
        onSubmit: values => {
            console.log(values)
            values.maNhom = GROUPID
            const action = signUpAction(values);
            dispatch(action);
            navigate('/signin')

        },
    });
    return (
        <div>
            <Navbar />
            <div className="signup">
                <div className="signup__content">
                    <div className="signup__content__items">
                        <h3>Đăng ký</h3>
                        <form onSubmit={formik.handleSubmit}>

                            <div className="signup__content__item">
                                <label>Họ và tên</label><br />
                                <input onChange={formik.handleChange} name="hoTen" id="hoTen" placeholder="Vui lòng nhập họ tên"></input>
                                <p>{formik.errors.hoTen}</p>
                            </div>

                            <div className="signup__content__item">
                                <label>Tài khoản</label><br />
                                <input onChange={formik.handleChange} name="taiKhoan" id="taiKhoan" placeholder="Vui lòng nhập tên đăng nhập"></input>
                                <p>{formik.errors.taiKhoan}</p>
                            </div>

                            <div className="signup__content__item">
                                <label>Email</label><br />
                                <input onChange={formik.handleChange} name="email" id="email" placeholder="Vui lòng nhập địa chỉ email"></input>
                                <p>{formik.errors.email}</p>
                            </div>

                            <div className="signup__content__item">
                                <label>Mật khẩu</label><br />
                                <input onChange={formik.handleChange} type="password" name="matKhau" id="matKhau" placeholder="Vui lòng nhập mật khẩu"></input>
                                <p>{formik.errors.matKhau}</p>
                            </div>

                            <div className="signup__content__item">
                                <label>Số điện thoại</label><br />
                                <input onChange={formik.handleChange} type="number" name="soDt" id="soDt" placeholder="Vui lòng nhập số điện thoại"></input>
                                <p>{formik.errors.soDt}</p>
                            </div>

                            <div className="signup__content__item" style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button type="submit">Đăng ký</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
