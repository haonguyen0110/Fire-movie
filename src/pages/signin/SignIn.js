import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../component/navBar/Navbar'
import Button from '../../component/button/Button'
import '../signup/SignUp.scss'
import { GROUPID, USER_LOGIN } from '../../util/config';
import { SignInAction } from '../../redux/actions/MemberAction';

export default function SignIn() {
    const dispatch = useDispatch();
    const { userLogin } = useSelector(state => state.MemberReducer)
    
    let user = localStorage.getItem(USER_LOGIN)
    console.log(user)
    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            maNhom: "",

        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string()
                .min(4, "Tên tài khoản quá ngắn! (Từ 4 -30 ký tự)")
                .max(30, "Tên tài khoản quá dài! (Từ 4 -30 ký tự)")
                .required("Trường này không thể để trống!"),

            matKhau: Yup.string()
                .min(6, "Tối thiểu 6 ký tự!")
                .required("Trường này không thể để trống!"),


        }),
        onSubmit: values => {
            console.log(values)
            values.maNhom = GROUPID
            const action = SignInAction(values);
            dispatch(action);
          
        },
    });

    return (
        <div>
            <Navbar />
            <div className="signup">
                <div className="signup__content">
                    <div className="signup__content__items">
                        <h3>Đăng nhập</h3>
                        <form onSubmit={formik.handleSubmit}>



                            <div className="signup__content__item">
                                <label>Tài khoản</label><br />
                                <input onChange={formik.handleChange} name="taiKhoan" id="taiKhoan" placeholder="Vui lòng nhập tên đăng nhập"></input>
                                <p>{formik.errors.taiKhoan}</p>
                            </div>



                            <div className="signup__content__item">
                                <label>Mật khẩu</label><br />
                                <input onChange={formik.handleChange} type="password" name="matKhau" id="matKhau" placeholder="Vui lòng nhập mật khẩu"></input>
                                <p>{formik.errors.matKhau}</p>
                            </div>




                            <div className="signup__content__item" style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button type="submit">Đăng nhập</Button>

                            </div>
                            <div>
                                <p>Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
