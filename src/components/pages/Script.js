import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";

function Info(){
    return (
        <div className="container">
            <div className="wrap__title">
                <h2><strong>Script</strong><em>Reference</em></h2>
            </div>
            <div className="script__cont">
                
            </div>
        </div>
    )
}

function Script(){
    return (
        <>
            <Header />
            <Contents>
            <main id="main">
                <section id="scriptCont">
                    <Info />
                </section>
            </main>   
            </Contents>
            <Footer />
        </>
    )
}

export default Script;