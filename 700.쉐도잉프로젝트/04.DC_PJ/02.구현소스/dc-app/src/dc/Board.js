///  게시판 모듈 - Board.js
import $ from "jquery";
import { useEffect } from "react";
import "./css/board.css";
// 제이슨 불러오기
import orgdata from "./data/data.json";

// 제이슨파일은 별도로 export 시킬 필요없음!!
// 컴포넌트에서 제이슨 데이터를 담지말고 반드시 바깥에서 담을 것!!
let jsn = orgdata;

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); //////// jQB ///////////
} ////////////// jQFn ///////////

function Board() {
    // [ 제이슨 파일 데이터 로컬스토리지에 넣기 ]
    // 1. 변수에 제이슨 파일 문자화 하여 불러오기
    let jsn = JSON.stringify(jsn);
    // console.log(jsn)

    // 2. 로컬스토리지 변수를 설정하여 할당하기
    localStorage.setItem("bdata", jsn);
    console.log("로컬스:", localStorage.getItem("bdata")); // 로컬스토리지는 50MB가 한계

    // 3. 로컬스토리지 데이터를 파싱하여 게시판 리스트에 넣기
    // 3-1. 로컬 스토리지 데이터 파싱
    let bdata = JSON.parse(localStorage.getItem("bdata")); // JSON 형식의 문자열을 JavaScript 객체로 변환하는 함수
    console.log("로컬스파싱:", bdata, "\n개수:", bdata.length);

    const bindList = () => {};

    const callFn = () => bindList(1);
    useEffect(() => callFn);

    return (
        <>
            {/* 모듈코드 */}
            {/* 게시판 리스트 */}
            <table className="dtbl" id="board">
                <caption>OPINION</caption>
                {/* 상단 컬럼명 표시영역 */}
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Title</th>
                        <th>Writer</th>
                        <th>Date</th>
                        <th>Hits</th>
                    </tr>
                </thead>

                {/* 중앙 레코드 표시부분 */}
                <tbody>
                    <tr>
                        <td colspan="5">There is no data.</td>
                    </tr>
                </tbody>

                {/* 하단 페이징 표시부분 */}
                <tfoot>
                    <tr>
                        <td colspan="5" className="paging">
                            {/* 페이징번호 위치  */}
                        </td>
                    </tr>
                </tfoot>
            </table>

            <br />
            <table className="dtbl btngrp">
                <tr>
                    <td>
                        <button>
                            <a href="list.php">List</a>
                        </button>
                        <button className="wbtn">
                            <a href="write.php">Write</a>
                        </button>
                    </td>
                </tr>
            </table>
            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    );
}

export default Board;
