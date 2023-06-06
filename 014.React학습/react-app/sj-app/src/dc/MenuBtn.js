///  메뉴버튼 모듈 - MenuBtn.js
import $ from "jquery";
import "./css/menubtn.css";
import menubtn from "./data/menubtn";
import { Link, Outlet } from "react-router-dom";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); //////// jQB ///////////
} ////////////// jQFn ///////////

const Cont = (props) => {
    return (
    <div>
        <div className="imbx">
            <img src={menubtn[props.num].isrc} alt="메뉴버튼" />
        </div>
        <div className="titbx">
            <h3>{menubtn[props.num].tit.split('^')[0]}</h3>
            <h2>{menubtn[props.num].tit.split('^')[1]}</h2>
        </div>
        <div className="btnbx">
            {/* 라우터를 이용한 이동은 반드시 Link를 사용하자! */}
            <Link to={menubtn[props.num].link}>
                <button>{menubtn[props.num].btn}</button>
            </Link>
        </div>
    </div>
    )
}

function MenuBtn() {
    return (
        <>
            <section className="menubtn">
                {
                    menubtn.map((x,i)=><Cont num={i} key={i} />)
                }
            </section>
            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    );
}

export default MenuBtn;