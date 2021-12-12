import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";

function Info(){
    return (
        <div className="container">
            <div className="wrap__title">
                <h2><strong>Youtube</strong><em>Reference</em></h2>
            </div>
            <div className="youtube__cont">
                <div className="youtube">
                    
                </div>
            </div>
        </div>
    )
}

function Youtube(){
    return (
        <>
            <Header />
            <Contents>
            <main id="main">
                <section id="youtubeCont">
                    <Info />
                </section>
            </main>   
            </Contents>
            <Footer />
        </>
    )
}

export default Youtube;