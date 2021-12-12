import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import WrapTitle from "../layout/WrapTitle";
import ContInfo from "../layout/ContInfo";
import axios from "axios";
import ReferInfo from "../info/ReferInfo";

class Reference extends React.Component {
    state = {
        isLoading : true,
        htmlRefer : [],
        // cssRefer : [],
    }

    getRefer = async () => {    //데이터 불러오기
        const {
            data: {
                data: { htmlRefer },
            },
        } = await axios.get("https://webstoryboy.github.io/react5001/src/assets/json/refer.json");
        this.setState({ htmlRefer, isLoading : false })
        // console.log(htmlRefer)

        // const {
        //     data: {
        //         data: { htmlRefer },
        //     },
        // } = await axios.get("https://webstoryboy.github.io/react5001/src/assets/json/refer.json");
        // this.setState({ htmlRefer, isLoading : false })
        // console.log(htmlRefer)
    }

    componentDidMount(){    //생명주기함수
        this.getRefer();
    }

    render(){ //출력 시켜주는 거
        const { isLoading, htmlRefer } = this.state;

        return (
            <div>
                { isLoading ? (
                    <div className="loading"></div>
                ) : (
                    <div>
                        <Header />
                        <Contents>
                            <section id="referCont">
                                <div className="container">
                                    <WrapTitle text={["reference", "book"]} />
                                    <div className="refer__cont">
                                        <div className="table">
                                            <h3>HTML</h3>
                                            <ul>
                                                {htmlRefer.map((html) =>(
                                                    <ReferInfo 
                                                        key={html.id}
                                                        id={html.id}
                                                        title={html.title}
                                                        desc2={html.desc2}
                                                        element={html.element}
                                                        link={html.link}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <ContInfo />
                        </Contents>
                        <Footer />
                    </div>
                ) }
            </div>
        )
    }
}


// function Reference(){
//     return (
//         <>
//             <Header />
//             <Contents>
//             <main id="main">
//                 <section id="referCont">
//                     <div className="container">
//                         <WrapTitle text={["reference", "book"]} />
//                         <div className="refer__cont">
//                             <div className="table">
//                                 <h3>HTML</h3>
//                                 <ul>
//                                     <li>
//                                         <Link to="ReferDetail">
//                                             <span className="num">1</span>
//                                             <span className="attr">&lt;a&gt;</span>
//                                             <span className="desc">&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link to="ReferDetail">
//                                             <span className="num">1</span>
//                                             <span className="attr">&lt;a&gt;</span>
//                                             <span className="desc">&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span>
//                                             <span className="Inline">Inline Element</span>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main>   
//             </Contents>
//             <Footer />
//         </>
//     )
// }

export default Reference;