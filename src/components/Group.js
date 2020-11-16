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
import cloud3 from '../images/cloud/cloud3.png';
import cloud4 from '../images/cloud/cloud4.png';

const Container = styled.div`
    //background-color:yellow;
    background-color: rgba(28, 18, 57, 1);
    width: 100%;
    height:auto;
    min-height: 100vh; 
    padding-bottom: 300px;
    padding-top: 50px;
    
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
    margin-left:40%;
    margin-top:0%;
    width: 220px;
    height: 250px;

}

`
const Cloud03 = styled.img`
    position: absolute;
    width: 381px;
    height: 134px;
    /*margin-left: 30% ;
    margin-top: 17% ;*/
    z-index: 2;

    @media only screen and (max-width: 1920px){
    margin-left:30%;
    margin-top:12%;
}
    @media only screen and (max-width: 1440px){
    margin-left:28%;
    margin-top:14%
}
    @media only screen and (max-width: 1280px){
    margin-left:20%;
    margin-top:15%;
}
    @media only screen and (max-width: 1024px){
    margin-left:20%;
    margin-top:12%;
    width: 300px;
    height: 130px;

}

`
const Cloud04 = styled.img`
    position: absolute;
    width: 381px;
    height: 134px;
    /*margin-left: 40% ;
    margin-top: 16% ;*/
    z-index: 5;
    @media only screen and (max-width: 1920px){
    margin-left:40%;
    margin-top:14%;
}
    @media only screen and (max-width: 1440px){
    margin-left:40%;
    margin-top:14%
}
    @media only screen and (max-width: 1280px){
    margin-left:42%;
    margin-top:15%;
}
    @media only screen and (max-width: 1024px){
    margin-left:45%;
    margin-top:13%;
    width: 300px;
    height: 120px;

}
`

const Wave01 = styled.img`
     position: absolute ;
    width: 110%;
    height: 40%;  
    /*margin-top: 37% ;
    margin-left:-5% ;*/
    z-index: 0;
    overflow:hidden;
    
    @media only screen and (max-width: 1920px){
    margin-left:-5%;
    margin-top:30%;
}
    @media only screen and (max-width: 1440px){
    margin-left:-5%;
    margin-top:33%
}
    @media only screen and (max-width: 1280px){
    margin-left:-5%;
    margin-top:36%;
}
    @media only screen and (max-width: 1024px){
    margin-left:-5%;
    margin-top:36%;
    width: 1000px;
    height: 500px;

}
`
const Wave02 = styled.img`
    position: absolute;
    width: 110%;
    height: 343.89px;
    transform: rotate(-3.7deg);
    /*margin-top: 40% ;
    margin-left:-5% ;*/
    z-index: 1;
    overflow:hidden;
    @media only screen and (max-width: 1920px){
    margin-left:-5%;
    margin-top:35%;
}
    @media only screen and (max-width: 1440px){
    margin-left:-5%;
    margin-top:40%
}
    @media only screen and (max-width: 1280px){
    margin-left:-5%;
    margin-top:40%;
}
    @media only screen and (max-width: 1024px){
    margin-left:5%;
    margin-top:40%;
    width: 1000px;
    height: 500px;

}
`
const Wave03 = styled.img`
    position: absolute;
    width: 110%;
    height:400px;
    transform: rotate(3deg);
    /*margin-top: 42% ;
    margin-left:-5% ;*/
    z-index: 2;
    overflow:hidden;
    @media only screen and (max-width: 1920px){
    margin-top: 37% ;
    margin-left:-5% ;
}
    @media only screen and (max-width: 1440px){
    margin-top: 40% ;
    margin-left:-5% ;
}
    @media only screen and (max-width: 1280px){
    margin-top: 42% ;
    margin-left:-5% ;
}
    @media only screen and (max-width: 1024px){
    margin-top: 42% ;
    margin-left:-5% ;
    //width: 300px;
    //height: 130px;

}
`
const Ylan = styled.img`
    position: absolute;
    width: 109px;
    height: 166px;
    /*margin-top:35%;
    margin-left:7%;*/
    @media only screen and (max-width: 1920px){
    margin-left:5%;
    margin-top:32%;
}
    @media only screen and (max-width: 1440px){
    margin-left:7%;
    margin-top:35%
}
    @media only screen and (max-width: 1280px){
    margin-left:7%;
    margin-top:37%;
}
    @media only screen and (max-width: 1024px){
    margin-left:5%;
    margin-top:38%;
    width: 110px;
    height: 150px;

}
`
const Ylan2 = styled.img`
    position: absolute;
    width: 109px;
    height: 166px;
    /*margin-top:32%;
    margin-left:20%;*/
    @media only screen and (max-width: 1920px){
    margin-left:19%;
    margin-top:28%;
}
    @media only screen and (max-width: 1440px){
    margin-left:19%;
    margin-top:31%
}
    @media only screen and (max-width: 1280px){
    margin-left:20%;
    margin-top:33%;
}
    @media only screen and (max-width: 1024px){
    margin-left:19%;
    margin-top:35%;
    width: 110px;
    height: 150px;

}
`
const Plan = styled.img`
    position: absolute;
    width: 156px;
    height: 168.5px;
   /* margin-top:37%;
    margin-left:34%;*/
    @media only screen and (max-width: 1920px){
    margin-left:34%;
    margin-top:32%;
}
    @media only screen and (max-width: 1440px){
    margin-left:34%;
    margin-top:37%
}
    @media only screen and (max-width: 1280px){
    margin-left:34%;
    margin-top:37%;
}
    @media only screen and (max-width: 1024px){
    margin-left:34%;
    margin-top:37%;
    width: 110px;
    height: 150px;

}
`
const Plan2 = styled.img`
    position: absolute;
    width: 156px;
    height: 168.5px;
    /*margin-top:32%;
    margin-left:52%;*/
    @media only screen and (max-width: 1920px){
    margin-left:50%;
    margin-top:28%;
}
    @media only screen and (max-width: 1440px){
    margin-left:52%;
    margin-top:30%
}
    @media only screen and (max-width: 1280px){
    margin-left:52%;
    margin-top:32%;
}
    @media only screen and (max-width: 1024px){
    margin-left:52%;
    margin-top:32%;
    width: 110px;
    height: 150px;

}

`
const Plan3 = styled.img`
   position: absolute;
    width: 156px;
    height: 168.5px;
    /*margin-top:35%;
    margin-left:67%;*/
    @media only screen and (max-width: 1920px){
    margin-left:67%;
    margin-top:30%;
}
    @media only screen and (max-width: 1440px){
    margin-left:67%;
    margin-top:35%;
}
    @media only screen and (max-width: 1280px){
    margin-left:67%;
    margin-top:35%;
}
    @media only screen and (max-width: 1024px){
    margin-left:67%;
    margin-top:35%;
    width: 110px;
    height: 150px;

}
`
const PPlan = styled.img`
   position: absolute;
    width: 179px;
    height: 152px;
   /* margin-top:35%;
    margin-left:83%;*/
    @media only screen and (max-width: 1920px){
    margin-top:28%;
    margin-left:83%;
}
    @media only screen and (max-width: 1440px){
    margin-top:31%;
    margin-left:83%;
}
    @media only screen and (max-width: 1280px){
    margin-top:35%;
    margin-left:83%;
}
    @media only screen and (max-width: 1024px){
    margin-top:35%;
    margin-left:83%;
    width: 150px;
    height: 150px;
    z-index:1;

}
`
const Mlan = styled.img`
   position: absolute;
    width: 246px;
    height: 260px;
   /* left: 1234px;
    top: 180px;*/
    @media only screen and (max-width: 1920px){
    margin-top:5%;
    margin-left:70%;
}
    @media only screen and (max-width: 1440px){
    margin-top:5%;
    margin-left:75%;
}
    @media only screen and (max-width: 1280px){
    margin-top:2%;
    margin-left:75%;
}
    @media only screen and (max-width: 1024px){
    margin-top:5%;
    margin-left:80%;
    width: 150px;
    height: 150px;
    

}
`
const T1 = styled.p`
    font-family: Caveat;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;

    color: #FFFFFF;
    position: absolute;
    width: 345px;
    height: 86px;
    /*margin-top:28%;
    margin-left:-1%;*/

    @media only screen and (max-width: 1920px){
    margin-top:27%;
    margin-left:-1%;
    z-index:5;
}
    @media only screen and (max-width: 1440px){
    margin-top:28%;
    margin-left:-1%;
}
    @media only screen and (max-width: 1280px){
    margin-top:28%;
    margin-left:-3%;
}
    @media only screen and (max-width: 1024px){
    margin-top:28%;
    margin-left:-6%;
    font-size: 28px;
    

}
`
const T2 = styled.p`
    font-family: Caveat;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;

    color: #FFFFFF;
    position: absolute;
    width: 223px;
    height: 94px;
   /* margin-top:25%;
    margin-left:16%;*/

    @media only screen and (max-width: 1920px){
    margin-top:22%;
    margin-left:16%;
}
    @media only screen and (max-width: 1440px){
    margin-top:25%;
    margin-left:16%;
}
    @media only screen and (max-width: 1280px){
     margin-top:25%;
    margin-left:16%;
}
    @media only screen and (max-width: 1024px){
    margin-top:25%;
    margin-left:15%;
    font-size: 28px;
    

}
    
`
const T3 = styled.p`
    font-family: Caveat;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;

    color: #FFFFFF;
   position: absolute;
    width: 223px;
    height: 94px;
    /*margin-top:31%;
    margin-left:32%;*/

    @media only screen and (max-width: 1920px){
    margin-top:27%;
    margin-left:32%;
}
    @media only screen and (max-width: 1440px){
    margin-top:31%;
    margin-left:32%;
    z-index:5;
}
    @media only screen and (max-width: 1280px){
    margin-top:31%;
    margin-left:32%;
}
    @media only screen and (max-width: 1024px){
    margin-top:30%;
    margin-left:28%;
    font-size: 28px;
    

}
`
const T4 = styled.p`
 font-family: Caveat;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;

    color: #FFFFFF;
   position: absolute;
    width: 223px;
    height: 94px;
    /*margin-top:26%;
    margin-left:50%;*/

    @media only screen and (max-width: 1920px){
    margin-top:24%;
    margin-left:48%;
}
    @media only screen and (max-width: 1440px){
    margin-top:24%;
    margin-left:50%;
    z-index:5;
}
    @media only screen and (max-width: 1280px){
    margin-top:26%;
    margin-left:50%;
}
    @media only screen and (max-width: 1024px){
    margin-top:24%;
    margin-left:47%;
    font-size: 28px;
    
}
`
const T5 = styled.p`
 font-family: Caveat;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;

    color: #FFFFFF;
   position: absolute;
    width: 223px;
    height: 94px;
    /*margin-top:29%;
    margin-left:65%;*/

    @media only screen and (max-width: 1920px){
    margin-top:26%;
    margin-left:65%;
}
    @media only screen and (max-width: 1440px){
     margin-top:29%;
    margin-left:65%;
}
    @media only screen and (max-width: 1280px){
    margin-top:29%;
    margin-left:65%;
}
    @media only screen and (max-width: 1024px){
     margin-top:27%;
    margin-left:62%;
    font-size: 28px;
    
}
`
const T6 = styled.p`
 font-family: Caveat;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;

    color: #FFFFFF;
   position: absolute;
    width: 223px;
    height: 94px;
    /*margin-top:29%;
    margin-left:82%;*/

    @media only screen and (max-width: 1920px){
    margin-top:23%;
    margin-left:82%;
    }
    @media only screen and (max-width: 1440px){
    margin-top:24%;
    margin-left:82%;
}
    @media only screen and (max-width: 1280px){
    margin-top:28%;
    margin-left:82%;
}
    @media only screen and (max-width: 1024px){
    margin-top:27%;
    margin-left:79%;
    font-size: 28px;
    
}
`

export default class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                
            <Moon02 src={Moon2}></Moon02>
            <Mlan src={manylan}></Mlan>
            <Cloud03 src={cloud3}></Cloud03>
            <Cloud04 src={cloud4}></Cloud04>
                <T1>"มาย" <br />[Web Design]</T1>
                <T2>"โอ๊ต" <br />[Web Design]</T2>
                <T3>"แบม" <br />[Front-End]</T3>
                <T4>"มาย" <br />[Front-End]</T4>                
                <T6>"ท๊อป" <br />[Infra]</T6>
                <Ylan2 src={yellowlan}></Ylan2>
                <PPlan src={purplelan}></PPlan>
                <Plan2 src={pinklan}></Plan2>
                <Wave01 src={wave1}></Wave01> 
                <T5>"ไผ่" <br />[Front-End]</T5>
                <Plan3 src={pinklan}></Plan3>              
                <Wave02 src={wave2}></Wave02>                
                <Ylan src={yellowlan}></Ylan>
                <Plan src={pinklan}></Plan>
                <Wave03 src={wave3}></Wave03>
                
                </Container>
            </React.Fragment>
        )
    }
}