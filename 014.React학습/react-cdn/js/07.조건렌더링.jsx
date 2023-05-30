///////////////////////////////////////
// 07. 조건 렌더링 + 리스트 렌더링 JSX //
///////////////////////////////////////

// 리액트에서는 조건부로 구성요소를 렌더링 할 수 있다!

////////////////////////////////////////
// 1. if문을 사용하여 조건부 렌더링하기 //
////////////////////////////////////////

// 선택적으로 로딩하도록 컴포넌트 2개만들기

// 1번 컴포넌트
function MakeDev(){
    return <h1>나는 개발자야!</h1>;
} ////////// MakeDev ///////////////

// 2번 컴포넌트
function LostDev(){
    return <h1>개발자가 뭐지?</h1>;
} ////////// LostDev ///////////////

// 3번 컴포넌트
function MakeImg(props){
    return <img src={props.isrc} alt={props.ialt} />;
}

// 출력 메인 컴포넌트 //////
// 위의 2가지 컴포넌트 중 선택적으로 출력한다!
function Developer(props){ // 호출시 전달되는 속성 props
    const isNow = props.isDev; // true/false
    // 조건문
    if(isNow){
        return( 
            <React.Fragment>
                <MakeDev />
                <MakeImg 
                    isrc={props.isrc} 
                    ialt={props.ialt} />
            </React.Fragment>
        );
    }

    // else문 없이도 if문에 들어가면
    // return 때문에 컴포넌트를 나감!
    return( 
        <React.Fragment>
            <LostDev />
            <MakeImg 
                isrc={props.isrc} 
                ialt={props.ialt} />
        </React.Fragment>
    );

} //////////// Developer 컴포넌트 ///////////

// 이미지경로 배열
const wisrc = [
    "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201608/04/htm_2016080484837486184.jpg"
];

// 컴포넌트 호출하기1!
ReactDOM.render(
<Developer 
isDev={true} 
isrc={wisrc[0]}
ialt="프론트엔드 개발자 공유입니다!" />,
document.querySelector("#root1"));

// 컴포넌트 호출하기2!
ReactDOM.render(
<Developer 
isDev={false} 
isrc={wisrc[1]}
ialt="주먹왕 마동석입니다!" />,
document.querySelector("#root2"));


/************************************************* 
    2. if문이 아닌 조건 표현하기
    -> 조건식 && JSX표현식
    조건이 true일때만 && 뒤의 JSX 표현식이 출력됨!
*************************************************/

// 2-1. 제목을 찍기위한 타이틀 컴포넌트
function Title(props){ // 컴포넌트 호출시 속성으로 tit셋팅
    return <h1>개발자가 좋아하는 {props.tit}</h1>
} // Title 컴포넌트 // 

// 음식리스트
const foods = ["스파게티","짜파게티","냉면","짜장면","마라탕"];

// 2-2. 반복리스트를 위한 컴포넌트 
function FoodList(props){ // 음식명을 fname 담아서 보내준다!
    return <li>개발자는 {props.fname} 좋아해!</li>
} // FoodList 컴포넌트 // 

// 2-3. 개발자 선호 음식 리스트 출력 컴포넌트 //
function WishList(props){ // wlist 속성에 담아 보내준다!
    // 위시리스트 담기
    const myfoods = props.wlist;
    // 코드리턴!
    return (
        <React.Fragment>
            <Title tit="음식"/>
            {/* 음식 위시리스트의 길이가 0보다 클때만 출력 */}
            {
                myfoods.length > 0 && 
                <div>
                    <h2>
                        개발자가 좋아하는 음식은 모두 {myfoods.length} 가지 입니다!
                    </h2>
                    <ul>
                        {
                            // 배열변수.map() 메서드사용!
                            // map(변수=>{표현식})
                            // 변수는 화살표함수 안으로 배열값전달
                            myfoods.map(x=> <FoodList fname={x} />)
                        }
                    </ul>
                </div>
            }
        </React.Fragment>
    );
}

// 컴포넌트 출력하기
ReactDOM.render(<WishList wishlist="" />,document.querySelector("#root2"));