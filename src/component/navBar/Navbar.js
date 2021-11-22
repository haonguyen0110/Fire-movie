import React, { Fragment, useEffect, useRef } from 'react'
import _ from 'lodash'
import { Link, useLocation } from 'react-router-dom'
import Button from '../button/Button'
import './Navbar.scss'
import { useSelector } from 'react-redux'
import { TOKEN, USER_LOGIN } from '../../util/config'
import logo from '../../assets/logo.png'
export default function Navbar() {
    const { userLogin } = useSelector(state => state.MemberReducer)
    const headerNav = [
        {
            display: 'Trang chủ',
            path: '/'
        },
        {
            display: 'Phim',
            path: '/movie'
        },
        {
            display: 'Liên hệ',
            path: '/'
        },


    ]

    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <ul className="header__nav">
                    <li >
                        <Link to={'/signup'}>Đăng ký</Link>
                    </li>
                    <li>
                        <Link to={'/signin'}>Đăng nhập</Link>

                    </li>
                </ul>
            </Fragment>
        } else {
            return <Fragment>
                <div style={{ alignItems: 'center' }} className="header__nav">
                    <div className="welcome">
                        <div className="welcome__content">

                            <Link to="/profile" ><span className="welcome__wel">Wellcome</span> <span>{userLogin.hoTen}</span> </Link>
                        </div>
                        <div className="welcome__hover">
                            <div style={{marginRight:'1.5rem'}}>
                                <Button>
                                    <Link to="/profile">
                                        Thông tin
                                    </Link>
                                </Button>
                            </div>
                            <div>
                                <Button>
                                    <Link to="/" onClick={() => {

                                        localStorage.removeItem(USER_LOGIN);
                                        localStorage.removeItem(TOKEN);
                                        window.location.reload()
                                    }}>Đăng xuất</Link>
                                </Button>
                            </div>


                        </div>
                    </div>


                </div>

            </Fragment>
        }
    }

    const { pathname } = useLocation();
    const active = headerNav.findIndex(e => e.path === pathname)
    const headerRef = useRef(null);
    return (
        <div>
            <div ref={headerRef} className="header">
                <div className="header__wrap container">
                    <ul className="header__nav">
                        {
                            headerNav.map((e, i) => {
                                return <li key={i} className={`${i === active ? 'active' : ''}`}>

                                    <Link to={e.path} >
                                        {e.display}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">FireMovie</Link>
                    </div>
                    <div>

                        {renderLogin()}
                    </div>

                </div>
            </div>
        </div>
    )
}
