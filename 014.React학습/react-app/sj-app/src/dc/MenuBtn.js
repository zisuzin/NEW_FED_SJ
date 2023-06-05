// 메뉴버튼 모듈 - MenuBtn.js
import $ from "jquery";
import "./css/menubtn.css";
// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{

    });
}

function MenuBtn(){
    return(
        <>
         <div className='menubtn_wrap'>
            {/* 1. 메뉴1 */}
            <section className="menubtn">
                <div className="imbx">
                    <img src="./images/menu/menubtn1.jpg" alt="메뉴이미지1" />
                </div>
                <div className='tx_wrap'>
                    <div className="titbx">
                        <h3>WORLDS COLLIDE</h3>
                        <h2>THE FLASH IS ONLY IN <br/> THEATERS JUNE 16</h2>
                    </div>
                    <div className="btnbx">
                        <button>TICKETS ON SALE NOW</button>
                    </div>
                </div>
            </section>
            {/* 2. 메뉴2 */}
            <section className="menubtn">
                <div className="imbx">
                    <img src="./images/menu/menubtn2.jfif" alt="메뉴이미지2" />
                </div>
                <div className='tx_wrap'>
                    <div className="titbx">
                        <h3>DC SHOP</h3>
                        <h2>GET NUTS WITH THE 1/6 <br/> SCALE BATMAN FIGURE</h2>
                    </div>
                    <div className="btnbx">
                        <button>SHOP NEW ARRIVALS</button>
                    </div>
                </div>
            </section>
            {/* 3. 메뉴3 */}
            <section className="menubtn">
                <div className="imbx">
                    <img src="./images/menu/menubtn3.jpg" alt="메뉴이미지3" />
                </div>
                <div className='tx_wrap'>
                    <div className="titbx">
                        <h3>DC PRIDE</h3>
                        <h2>CELEBRATE WITH LGBTQ CREATORS, CHARACTERS, & STORIES</h2>
                    </div>
                    <div className="btnbx">
                        <button>VISIT OUR PRIDE HUB</button>
                    </div>
                </div>
            </section>
            {/* 4. 메뉴4 */}
            <section className="menubtn">
                <div className="imbx">
                    <img src="./images/menu/menubtn4.jpg" alt="메뉴이미지4" />
                </div>
                <div className='tx_wrap'>
                    <div className="titbx">
                        <h3>DC COMMUNITY</h3>
                        <h2>SHARE YOUR DC PRIDE FANWORKS</h2>
                    </div>
                    <div className="btnbx">
                        <button>SUBMIT YOUR ART</button>
                    </div>
                </div>
            </section>
        </div>
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default MenuBtn;