import axios from "axios";
import React from "react";
import PortInfo from "../info/PortInfo";
import Contents from "../layout/Contents";
import ContInfo from "../layout/ContInfo";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import WrapTitle from "../layout/WrapTitle";

class Port extends React.Component {
    state = {
        isLoading : true,
        ports : []   //반복문 출력시켜주려면 배열이어야함
    }

    getPorts = async () => {  //class는 함수의 집합체기 때문에 function 생략 가능
        const {
            data: {
                data: {ports},
            },
        } = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json"); //소스가 다운받아질 때 까지 기다려줌 async await
        // console.log(ports);
        // console.log(ports.data.data.ports);
        this.setState({ ports, isLoading : false });
    } //동기 비동기의 차이점. async await이 없으면 불러오기 전에 getPorts가 불러와지기 때문에 ports가 찍히지 않지만 있으면 기다린 후에 불러오기 때문에 잘 찍힘

    componentDidMount(){
        setTimeout(() => {
            // this.setState({ isLoading : false });  //변수 속성을 가져올 때 react에서는 this 사용. setState로 값 바꿔줌 클래스속성
            this.getPorts();    //getPorts 실행함수
        }, 0)
    }

    render(){
        const { isLoading, ports } = this.state;    //최신 문법
        return (  //return 출력 시켜 줄 땐 뭐든 하나 감싸줘야함 div 쓰기 싫으면 <> </>로 생략 가능
            
            <div>
                {isLoading ? (
                    <div>
                        로딩중입니다.
                    </div>
                ) : (
                    <div>
                        <Header />
                        <Contents>
                        <section id="portCont">
                            <div className="container">
                                <WrapTitle text={["portfolio", "site"]} />
                                <div className="port__cont">
                                    {ports.map((port) => (
                                        <PortInfo
                                            key={port.id}
                                            title={port.title}
                                            category={port.category}
                                            link={port.link}
                                            image={port.image}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                        <ContInfo />
                    </Contents>
                    <Footer />
                    </div>
                )}
            </div>   //if문은 모든 데이터를 읽은 후 결과를 내지만 얘는 결과만 가져와줘서 효율이 좋음
        )
        
    }
}

export default Port;