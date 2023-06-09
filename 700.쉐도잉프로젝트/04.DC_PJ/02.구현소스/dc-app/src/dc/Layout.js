// 메인 레이아웃 컴포넌트
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
import "./css/layout.css";
import $ from "jquery";

/* 폰트어썸 임포트 */
import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/******************************************************* 
    [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
    1. <Link to="/경로명"></Link>
    -> to속성의 경로는 <Route path="/경로명"> 과 일치함!

    2. <Outlet />
    -> 라우터 연결 컴포넌트 출력자리 컴포넌트
*******************************************************/

const Layout = () => {
    /* GNB메뉴 데이터구성하기 */
    // const gnb_data = [
    //     {
    //         txt: "",
    //         link: "",
    //         sub: [{
    //             txt: "",
    //             link: "",
    //         }]
    //     }
    // ];
    const gnb_data = [
        {
            txt: "CHARACTERS",
            link: "/ct",
        },
        {
            txt: "COMICS",
            link: "/co",
            sub: [
                {
                    txt: "LATEST COMICS",
                    link: "",
                },
                {
                    txt: "DC UNIVERSE INFINITE",
                    link: "",
                },
                {
                    txt: "ALL COMICS SERIES",
                    link: "",
                },
            ]
        },
        {
            txt: "MOVIES & TV",
            link: "/mv",
            sub:[
                {
                    txt:"DC MOVIES",
                    link:"/dm",
                },
                {
                    txt:"DC SERIES",
                    link:"/ds",
                },
                {
                    txt:"DC ON HBO MAX",
                    link:"/hbo",
                },
            ],
        },
        {
            txt: "GAMES",
            link: "/gm",
        },
        {
            txt: "NEWS",
            link: "/nw",
        },
        {
            txt: "VIDEO",
            link: "/vd",
        },
    ]

    const [isRotated, setIsRotated] = useState(false);

    const burgerClick = ()=>{
        const burger = $(".icon-wrap");
        const mbgbx = $(".overlay");
        const menuLi = mbgbx.find("li")
        mbgbx.toggleClass("active"); // 모바일메뉴창 보이기
        setIsRotated(!isRotated); // 햄버거버튼 클릭시에 true!
        burger.css("position", "fixed"); // 햄버거버튼 상단위치 고정

        menuLi.hover(function(e){
            $(this).toggleClass("active");
        })
    }

    return (
        <>
            {/* 1.상단영역 */}
            <header className="top">
                {/* 네비게이션 파트 */}
                <nav className="gnb">
                    <ul>
                        <li>
                            <Link to="/">
                                <Logo />
                            </Link>
                        </li>
                            {
                                gnb_data.map((v,i)=>
                                    <li key={i}>
                                        <Link to={v.link}>{v.txt}</Link>
                                        {/* {console.log(v.sub)} */}
                                        {/* v.sub가 없으면 undefined */}
                                        {
                                            // 조건식 && 출력코드
                                            // 조건: sub데이터가 없지 않으면 -> 즉, 존재할때 !
                                            // undefined - 정의되지 않은 값
                                            // null - 빈값
                                            // 위의 두가지는 데이터가 없다는 값임! 처리할땐 의미가 대동소이함
                                            v.sub != undefined &&
                                            <div className="smenu">
                                                <ol>
                                                    {
                                                        v.sub.map(
                                                        (v,i)=>
                                                            <li key={i}>
                                                                <Link to={v.link}>
                                                                    {v.txt}
                                                                </Link>
                                                            </li>
                                                        )
                                                    }
                                                </ol>
                                            </div>
                                        }
                                    </li>
                                )
                            }
                            <li style={{marginLeft:"auto"}}>
                                
                                <FontAwesomeIcon icon={faSearch}/>
                            </li>
                            <li>
                                <Link to="/signup">
                                    SIGN UP
                                </Link>
                            </li>
                            <li>
                                <Link to="/signup">
                                    SIGN UP
                                </Link>
                            </li>
                    </ul>
                </nav>
                <button className="icon-wrap" onClick={burgerClick}>
                    <span className="icon top_bar" style={isRotated? {transform: "rotate(-45deg)", top: "50%"} : {}}></span>
                    <span className="icon middle_bar" style={isRotated? {background : "transparent", transition: "none"} : {}}></span>
                    <span className="icon bottom_bar" style={isRotated? {transform: "rotate(45deg)", top: "50%"} : {}}></span>
                </button>
            </header>
            <div className="overlay">
                <ul className="menu">
                    <li>
                        <a href="#">CHARACTERS</a>
                    </li>
                    <li>
                        <a href="#">COMICS</a>
                    </li>
                    <li>
                        <a href="#">MOVIES & TV</a>
                    </li>
                    <li>
                        <a href="#">GAMES</a>
                    </li>
                    <li>
                        <a href="#">NEWS</a>
                    </li>
                    <li>
                        <a href="#">VIDEO</a>
                    </li>
                </ul>
            </div>
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