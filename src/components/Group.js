import React, { Component } from 'react'
import styled from 'styled-components';
import Moon2 from '../images/pic_Lantern/Moon2.png';
import wave1 from '../images/pic_Lantern/wave1.png';
import wave2 from '../images/pic_Lantern/wave2.png';
import wave3 from '../images/pic_Lantern/wave3.png';
import yellowlan from '../images/pic_Lantern/yellowlan.png';
import pinklan from '../images/pic_Lantern/pinklan.png';
import purplelan from '../images/pic_Lantern/purplelan.png';
import manylan from '../images/pic_Lantern/manylan.png';
import cloud from '../images/cloud/cloud7.png';
import Star1 from '../images/pic_Lantern/star1.png'
import Star2 from '../images/pic_Lantern/star2.png'
import Star3 from '../images/pic_Lantern/star3.png'
import '../css/Group.css'

const Container = styled.div`
    background-color: rgba(28, 18, 57, 1);
    width: 100%;
    height:auto;
    min-height: 100vh; 
    padding-bottom: 300px;
    padding-top: 50px;
    overflow-y:hidden;
`
const Moon02 = styled.img`
    width: 377px;
    height: 377px;
    display:block;  
    position:absolute;
    z-index: 1;
    @media only screen and (max-width: 1920px){
    margin-left:37%;
    margin-top:0%;
}
    @media only screen and (max-width: 1440px){
    margin-left:35%;
    margin-top:-3%
}
    @media only screen and (max-width: 1280px){
    margin-left:35%;
    margin-top:-3%;
}
    @media only screen and (max-width: 1024px){
    margin-left:37%;
    margin-top:0%;
    width: 250px;
    height: 250px;

}

`

const Cloud01 = styled.img`
    position: absolute;
    width: 604px;
    height: 146px;
    z-index: 2;
    @media only screen and (max-width: 1920px){
    margin-left:32%;
    margin-top:13%;
}
    @media only screen and (max-width: 1440px){
    margin-left:30%;
    margin-top:14%
}
    @media only screen and (max-width: 1280px){
    margin-left:27%;
    margin-top:17%;
}
    @media only screen and (max-width: 1024px){
    margin-left:30%;
    margin-top:17%;
    width: 400px;
    height: 90px;

}
`

const Wave01 = styled.img`
     position: absolute ;
    width: 1755px;
    height: 346px;  
    z-index: 1;
    overflow:hidden;
    @media only screen and (max-width: 1920px){
    margin-left:-2%;
    margin-top:33%;
    width: 2000px;
    height: 346px;  
}
    @media only screen and (max-width: 1440px){
    margin-left:-5%;
    margin-top:33%
}
    @media only screen and (max-width: 1280px){
    margin-left:-5%;
    margin-top:36%;
    width: 1500px;
    height: 270px;
}
    @media only screen and (max-width: 1024px){
    margin-left:-5%;
    margin-top:42%;
    width: 1300px;
    height: 250px;

}
`
const Wave02 = styled.img`
    position: absolute;
    width: 1554.12px;
    height: 231.22px;
    z-index: 3;
    overflow:hidden;
    @media only screen and (max-width: 1920px){
    margin-left:-2%;
    margin-top:39%;
    width: 2000px;
    height: 250px;
}
    @media only screen and (max-width: 1440px){
    margin-left:-5%;
    margin-top:40%
}
    @media only screen and (max-width: 1280px){
    margin-left:-5%;
    margin-top:42%;
    width: 1400px;
    height: 190px;
}
    @media only screen and (max-width: 1024px){
    margin-left:-5%;
    margin-top:50%;
    width: 1200px;
    height: 170px;

}
`
const Wave03 = styled.img`
    position: absolute;
    width: 1515px;
    height:231px;
    z-index:5;
    overflow:hidden;
    @media only screen and (max-width: 1920px){
    margin-top: 43% ;
    margin-left:-5% ;
    width: 2200px;
    height: 250px;
}
    @media only screen and (max-width: 1440px){
    margin-top: 43% ;
    margin-left:-5% ;
}
    @media only screen and (max-width: 1280px){
    margin-top: 45% ;
    margin-left:-5% ;
    width: 1400px;
    height:190px;
}
    @media only screen and (max-width: 1024px){
    margin-top: 56% ;
    margin-left:-5% ;
    width: 1200px;
    height:170px;
    

}
`
const Ylan = styled.img`
    position: absolute;
    width: 109px;
    height: 166px;
    z-index: 4;
    @media only screen and (max-width: 1920px){
    margin-left:7%;
    margin-top:41%;
}
    @media only screen and (max-width: 1440px){
    margin-left:7%;
    margin-top:39%
    
}
    @media only screen and (max-width: 1280px){
    margin-left:7%;
    margin-top:43%;
    width: 50px;
    height: 90px;
}
    @media only screen and (max-width: 1024px){
    margin-left:7%;
    margin-top:54%;
    width: 50px;
    height: 90px;

}
`
const Ylan2 = styled.img`
    position: absolute;
    width: 109px;
    height: 166px;
    z-index: 0;
    @media only screen and (max-width: 1920px){
    margin-left:19%;
    margin-top:31%;
}
    @media only screen and (max-width: 1440px){
    margin-left:19%;
    margin-top:31%
}
    @media only screen and (max-width: 1280px){
    margin-left:20%;
    margin-top:34%;
    width: 50px;
    height: 90px;
}
    @media only screen and (max-width: 1024px){
    margin-left:19%;
    margin-top:41%;
    width: 50px;
    height: 90px;

}
`
const Plan = styled.img`
    position: absolute;
    width: 156px;
    height: 168.5px;
    z-index: 4;
    @media only screen and (max-width: 1920px){
    margin-left:34%;
    margin-top:41%;
}
    @media only screen and (max-width: 1440px){
    margin-left:34%;
    margin-top:40%
}
    @media only screen and (max-width: 1280px){
    margin-left:34%;
    margin-top:45%;
    width: 70px;
    height: 90px;
}
    @media only screen and (max-width: 1024px){
    margin-left:34%;
    margin-top:56%;
    width: 70px;
    height: 90px;

}
`
const Plan2 = styled.img`
    position: absolute;
    width: 156px;
    height: 168.5px;
    z-index: 2;
    @media only screen and (max-width: 1920px){
    margin-left:50%;
    margin-top:35%;
}
    @media only screen and (max-width: 1440px){
    margin-left:52%;
    margin-top:34%
}
    @media only screen and (max-width: 1280px){
    margin-left:52%;
    margin-top:40%;
    width: 70px;
    height: 90px;
}
    @media only screen and (max-width: 1024px){
    margin-left:52%;
    margin-top:46%;
    width: 70px;
    height: 90px;

}

`
const Plan3 = styled.img`
   position: absolute;
    width: 156px;
    height: 168.5px;
    z-index: 4;
    @media only screen and (max-width: 1920px){
    margin-left:67%;
    margin-top:43%;
}
    @media only screen and (max-width: 1440px){
    margin-left:67%;
    margin-top:42%;
}
    @media only screen and (max-width: 1280px){
    margin-left:67%;
    margin-top:47%;
    width: 70px;
    height: 90px;
}
    @media only screen and (max-width: 1024px){
    margin-left:67%;
    margin-top:58%;
    width: 70px;
    height: 90px;

}
`
const PPlan = styled.img`
   position: absolute;
    width: 179px;
    height: 152px;
    z-index: 0;
    @media only screen and (max-width: 1920px){
    margin-top:29%;
    margin-left:84%;
}
    @media only screen and (max-width: 1440px){
    margin-top:31%;
    margin-left:83%;
}
    @media only screen and (max-width: 1280px){
    margin-top:34%;
    margin-left:83%;
    width: 90px;
    height: 70px;
}
    @media only screen and (max-width: 1024px){
    margin-top:40%;
    margin-left:82%;
    width: 90px;
    height: 70px;
    

}
`
const Mlan = styled.img`
    position: absolute;
    width: 246px;
    height: 260px;
    z-index: 4;
    @media only screen and (max-width: 1920px){
    margin-top:-3%;
    margin-left:70%;
}
    @media only screen and (max-width: 1440px){
    margin-top:-3%;
    margin-left:75%;
}
    @media only screen and (max-width: 1280px){
    margin-top:-3%;
    margin-left:75%;
    width: 150px;
    height: 170px;
}
    @media only screen and (max-width: 1024px){
    margin-top:1%;
    margin-left:80%;
    width: 130px;
    height: 150px;
    

}
`
const T1 = styled.p`
    font-family: 'Prompt', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    color: #FFFFFF;
    position: absolute;
    z-index: 6;
    @media only screen and (max-width: 1920px){
    margin-left:6%;
    margin-top:36%;
    font-size: 26px;
}
    @media only screen and (max-width: 1440px){
    margin-left:6%;
    margin-top:32%;
    font-size: 22px;
}
    @media only screen and (max-width: 1280px){
    margin-left:4%;
    margin-top:35%;
    font-size: 20px;
}
    @media only screen and (max-width: 1024px){
    margin-left:4%;
    margin-top:45%;
    font-size: 18px;
    

}
`
const T2 = styled.p`
    font-family: 'Prompt', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    color: #FFFFFF;
    position: absolute;
    z-index: 6;
    @media only screen and (max-width: 1920px){
    margin-left:18%;
    margin-top:26%;
    font-size: 26px;
}
    @media only screen and (max-width: 1440px){
    margin-left:18%;
    margin-top:24%;
    font-size: 22px;
}
    @media only screen and (max-width: 1280px){
    margin-left:17%;
    margin-top:27%;
    font-size: 20px;
}
    @media only screen and (max-width: 1024px){
    margin-left:16%;
    margin-top:31%;
    font-size: 18px;
    

}
    
`
const T3 = styled.p`
    font-family: 'Prompt', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    color: #FFFFFF;
    position: absolute;
    z-index: 6;
    @media only screen and (max-width: 1920px){
    margin-left:34%;
    margin-top:36%;
    font-size: 26px;
}
    @media only screen and (max-width: 1440px){
    margin-left:35%;
    margin-top:34%;
    font-size: 22px;
    
}
    @media only screen and (max-width: 1280px){
    margin-left:33%;
    margin-top:37%;
    font-size: 20px;
}
    @media only screen and (max-width: 1024px){
    margin-left:33%;
    margin-top:47%;
    font-size: 18px;
    

}
`
const T4 = styled.p`
 font-family: 'Prompt', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    color: #FFFFFF;
    position: absolute;
    z-index: 6;
    @media only screen and (max-width: 1920px){
    margin-left:50%;
    margin-top:30%;
    font-size: 26px;
}
    @media only screen and (max-width: 1440px){
    margin-left:53%;
    margin-top:27%;
    font-size: 22px;
    
}
    @media only screen and (max-width: 1280px){
    margin-left:50%;
    margin-top:33%;
    font-size: 20px;
}
    @media only screen and (max-width: 1024px){
    margin-left:50%;
    margin-top:37%;
    font-size: 18px;
    font-size: 20px;
    
}
`
const T5 = styled.p`
 font-family: 'Prompt', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    color: #FFFFFF;
    position: absolute;
    z-index: 6;
    @media only screen and (max-width: 1920px){
    margin-top:38%;
    margin-left:67%;
    font-size: 26px;
}
    @media only screen and (max-width: 1440px){
    margin-left:68%;
    margin-top:35%;
    font-size: 22px;
}
    @media only screen and (max-width: 1280px){
    margin-left:65%;
    margin-top:40%;
    font-size: 20px;
}
    @media only screen and (max-width: 1024px){
    margin-left:65%;
    margin-top:49%;
    font-size: 18px;
    
}
`
const T6 = styled.p`
 font-family: 'Prompt', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    color: #FFFFFF;
    position: absolute;
    z-index: 6;
    @media only screen and (max-width: 1920px){
    margin-top:24%;
    margin-left:87%;
    font-size: 26px;
    }
    @media only screen and (max-width: 1440px){
    margin-top:24%;
    margin-left:87%;
    font-size: 22px;
}
    @media only screen and (max-width: 1280px){
    margin-top:27%;
    margin-left:84%;
    font-size: 20px;
}
    @media only screen and (max-width: 1024px){
    margin-top:30%;
    margin-left:84%;
    font-size: 18px;
    
}
`
const Star01 = styled.img`
    position: absolute;
    width: 1440px;
    height: 1024px;
    left: 0px;
    top: 0px;
    z-index: 0;
    margin-top:165%;
    
`
const Star02 = styled.img`
    position: absolute;
    width: 1440px;
    height: 1024px;
    left: 0x;
    top: 0px;
    z-index: 0;
    margin-top:165%;
`
const Star03 = styled.img`
    position: absolute;
    width: 1440px;
    height: 1024px;
    left: 0x;
    top: 0px;
    z-index: 0;
    margin-top:165%;
`

export default class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>

                    <Moon02 className="moon" src={Moon2}></Moon02>
                    <Mlan className="mn2" src={manylan}></Mlan>
                    <Cloud01 className="main" src={cloud}></Cloud01>
                    <T1 className="m1">"มาย" <br />[Web Design]</T1>
                    <T2 className="o">"โอ๊ต" <br />[Web Design]</T2>
                    <T3 className="b">"แบม" <br />[Front-End]</T3>
                    <T4 className="m2">"มาย" <br />[Front-End]</T4>
                    <T6 className="t">"ท๊อป" <br />[Infra]</T6>
                    <Ylan2 className="o" src={yellowlan}></Ylan2>
                    <PPlan className="t" src={purplelan}></PPlan>
                    <Plan2 className="m2" src={pinklan}></Plan2>
                    <Wave01 className="wave1"src={wave1}></Wave01>
                    <T5 className="p">"ไผ่" <br />[Front-End]</T5>
                    <Plan3 className="p" src={pinklan}></Plan3>
                    <Wave02 className="wave2" src={wave2}></Wave02>
                    <Ylan className="m1" src={yellowlan}></Ylan>
                    <Plan className="b" src={pinklan}></Plan>
                    <Wave03 className="wave3" src={wave3}></Wave03>
                    <Star01 className="star1" src={Star1}></Star01>
                    <Star02 className="star2" src={Star2}></Star02>
                    <Star03 className="star3" src={Star3}></Star03>
                </Container>
            </React.Fragment>
        )
    }

}