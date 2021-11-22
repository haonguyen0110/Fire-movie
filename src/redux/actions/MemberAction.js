
import React from 'react'
import { useNavigate } from "react-router";
import { history } from "../../App";
import { memberService } from "../../services/MemberService";
import { GETPROFILE, SIGN_IN, SIGN_UP } from "../types/MemberType";



export const signUpAction = (signInDetail) => {
  

    return async (dispatch) => {
        try {
            const result = await memberService.signUp(signInDetail);
            console.log('ketqua', result)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SIGN_UP,
                    signInDetail: result.data.content 
                });
                alert('Chúc mừng bạn đã đăng ký tài khoản thành công');
                
            }

        } catch (error) {
            console.log(error.response?.data)
            alert(error.response?.data.content)
        }
    }
}

export const SignInAction = (signInDetail) => {
    

    return async (dispatch) => {
        try {
            const result = await memberService.signIn(signInDetail);
          
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SIGN_IN,
                    signInDetail: result.data.content
                });
              history.push('/')
              alert('Chúc mừng bạn đăng nhập thành công')
            }
     

        } catch (error) {
            console.log(error.response?.data)
           alert(error.response?.data.content)
        }
    }
}

export const getProfileAction = (taiKhoan) =>{
    return async (dispatch)=>{
        try {
            let result = await memberService.getProfile(taiKhoan);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: GETPROFILE,
                    bookingInformation: result.data.content.thongTinDatVe,
                    name: result.data.content.hoTen
                });
               
            }
          

        } catch (error) {
            console.log(error.response?.data)
        }
    }
}

export const EditProfileAction = (thongtinNguoiDung) => {
    return async (dispatch) => {
        try {
            let result = await memberService.editProfile(thongtinNguoiDung);
            console.log('result', result)
            alert('Cập nhật thông tin thành công')
            if (result.data.statusCode === 200) {
                
                history.push('/');
            }

        } catch (error) {
            console.log(error.response?.data)
            alert(error.response?.data.content)

        }
    }
}