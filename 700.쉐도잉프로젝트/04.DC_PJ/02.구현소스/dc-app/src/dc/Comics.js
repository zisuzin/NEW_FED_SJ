// DC Comics 페이지 컴포넌트
import React from "react";
import Ban from "./modules/Ban";
import VidIntro from "./modules/VidIntro"

const Comics = () => {
    return(
        <>
            <Ban cat="COMICS" />
            <VidIntro pg="COMICS" mm="on"/>
        </>
    );
}; /////////// Comics //////////////

export default Comics;