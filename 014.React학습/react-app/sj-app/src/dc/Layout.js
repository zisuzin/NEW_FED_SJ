// 메인 레이아웃 컴포넌트
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
import "./css/layout.css";
import MenuBtn from "./MenuBtn";
import $ from "jquery";

/******************************************************* 
    [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
    1. <Link to="/경로명"></Link>
    -> to속성의 경로는 <Route path="/경로명"> 과 일치함!

    2. <Outlet />
    -> 라우터 연결 컴포넌트 출력자리 컴포넌트
*******************************************************/

const Layout = () => {
    const [isRotated, setIsRotated] = useState(false);

    const burgerClick = ()=>{
        const burger = $(".icon-wrap");
        const burger1 = burger.find("span")[2];
        setIsRotated(!isRotated); // 햄버거버튼 클릭시에 true!
    }
    
    return (
        <>
            {/* 1.상단영역 */}
            <header className="top">
                {/* 네비게이션 파트 */}
                <nav className="gnb">
                    <ul>
                        <li>
                            <Logo />
                        </li>

                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/ct">CHARACTERS</Link>
                        </li>
                        <li>
                            <Link to="/co">COMICS</Link>
                        </li>
                        <li>
                            <Link to="/mv">MOVIES & TV</Link>
                        </li>
                        <li>
                            <Link to="/gm">GAMES</Link>
                        </li>
                        <li>
                            <Link to="/nw">NEWS</Link>
                        </li>
                        <li>
                            <Link to="/vd">VIDEO</Link>
                        </li>
                    </ul>
                </nav>
                <button className="icon-wrap" onClick={burgerClick}>
                    <span className="icon top_bar" style={isRotated? {transform: "rotate(-45deg)", top: "50%"} : {}}></span>
                    <span className="icon middle_bar" style={isRotated? {background : "transparent", transition: "none"} : {}}></span>
                    <span className="icon bottom_bar" style={isRotated? {transform: "rotate(45deg)", top: "50%"} : {}}></span>
                </button>
            </header>
            {/* 2. 메인영역 */}
            <main className="cont">
                {/* 출력파트 : 각 페이지의 컴포넌트가 출력됨 */}
                <Outlet />
            </main>
            {/* 3.하단영역 */}
            <footer className="info">
                All Site Content © &amp; TM DC, unless otherwise noted here.
                <br />
                All rights reserved.
            </footer>
        </>
    );
}; ////////// Layout 컴포넌트 ///////

// 내보내기
export default Layout;