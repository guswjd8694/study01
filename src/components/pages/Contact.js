import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";

function Info (){
    return(
        <div className="main__cont">
            <div className="l1">You are</div>
            <div className="l2">already </div>
            <div className="l3">doing well.</div>
        </div>
    )
}

function Contact(){
    return (
        <>
            <Header />
            <Contents>
            <main id="main">
                <section id="mainCont">
                    <h2 className="sr-only">연락처 컨텐츠 영역입니다.</h2>
                    <Info />
                </section>
            </main>   
            </Contents>
            <Footer />
        </>
    )
}

export default Contact;