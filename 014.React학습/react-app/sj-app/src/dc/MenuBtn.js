// 메뉴버튼 모듈 - MenuBtn.js
import $ from "jquery";
import "./css/menubtn.css";
import menubtn from "./data/menubtn";
import { Link, Outlet } from "react-router-dom";

// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{

    });
}

function Cont(props){
    return(
        <div className="wrap">
            <div className="imbx">
                <img src={menubtn[props.num].isrc} alt="메뉴이미지1" />
            </div>
            <div className='tx_wrap'>
                <div className="titbx">
                    <h3>{menubtn[props.num].tit1}</h3>
                    <h2>{menubtn[props.num].tit2}</h2>
                </div>
                <div className="btnbx">
                    <Link to={menubtn[props.num].link}>
                        <button>{menubtn[props.num].btn}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


function MenuBtn(){
    return(
        <>
         <div className='menubtn_wrap'>
            {/* 1. 메뉴1 */}
            <section className="menubtn">
                {
                    menubtn.map((x,i)=><Cont num={i} key={i}/>)
                }
            </section>
        </div>
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default MenuBtn;