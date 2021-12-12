import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";

//함수형 컴퍼넌트 VS 클래스형 컴퍼넌트  --> 함수형 컴퍼넌트(클래스형 장점) --> 리액트 훅

function Info(){
    return(
        <div className="main__cont">
            <div>WE PROVIDE</div>
            <div>VISUAL CODING</div>
            <div>SOLUTIONS</div>
            <div>FOR YOU WEBS</div>
        </div>
    )
}

function Main(){
    return (
        <div>
            <Header />
                <Contents>
                    <main id="main">
                        <section id="mainCont">
                            <h2 className="sr-only">메인 컨텐츠 영역입니다.</h2>
                            <Info />
                        </section>
                    </main>
                </Contents>
            <Footer />
        </div>
    )
}

export default Main;