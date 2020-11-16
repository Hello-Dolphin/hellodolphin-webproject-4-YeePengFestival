import React, { Component } from 'react'
import styled from 'styled-components';
import Moon from '../images/pic_Lantern/Moon.png'
import Lanfly1 from '../images/pic_Lantern/lanfly1.png'
import Lanfly2 from '../images/pic_Lantern/lanfly2.png'
import Lanfly3 from '../images/pic_Lantern/lanfly3.png'
import Mascot1 from '../images/pic_Lantern/mascot.png'
import Lanfly4 from '../images/pic_Lantern/ก้อนโคม.png'
import Star1 from '../images/pic_Lantern/star1.png'
import Star2 from '../images/pic_Lantern/star2.png'
import Star3 from '../images/pic_Lantern/star3.png'
import '../css/Home.css'

const MoonFont = styled.img`
    width: 467px;
    height: 467px;
    display:block;  
    margin-top:180px;
    position:relative;
    margin-left:29%;
    z-index: 3;
  
`
const Mascot01 = styled.img`
    position: absolute;
    width: 244px;
    height: 316px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 3;
    @media only screen and (max-width: 1920px) {
        margin-left:35%;
        margin-top:21%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:47%;
        margin-top:28%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:54%;
        margin-top:32%;
    }
    @media only screen and (max-width: 1024px) {
        margin-left:62%;
        margin-top:40%;
        width: 200px;
        height: 260px; 
    }
`
const Lanfly01 = styled.img`
    position: absolute;
    width: 184.73px;
    height: 276.94px;
    transform: rotate(10.24deg);
    z-index: 3;
    @media only screen and (max-width: 1920px) {
        margin-left:4%;
        margin-top:33%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:6%;
        margin-top:42%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:10%;
        margin-top:42%;
    }
    @media only screen and (max-width: 1024px) {
        margin-left:13%;
        margin-top:54%;
        width: 150px;
        height: 220px; 
    }
`
const Lanfly02 = styled.img`
    position: absolute;
    width: 133.62px;
    height: 210.22px;
    transform: rotate(-8.78deg);
    z-index: 3;
    @media only screen and (max-width: 1920px) {
        margin-left:58%;
        margin-top:34%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:70%;
        margin-top:45%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:78%;
        margin-top:46%;
    }
    @media only screen and (max-width: 1024px) {
        margin-left:82%;
        margin-top:60%;
        width: 103px;
        height: 152px; 
    }
`
const Lanfly03 = styled.img`
    position: absolute;
    width: 263px;
    height: 308px;
    transform: rotate(-9.07deg);
    z-index: 3;
    /* สู้ๆน้าไออ้วน คนเก่งของเค้า*/ 
    @media only screen and (max-width: 1920px) {
        margin-left:-10%;
        margin-top:14%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:-3%;
        margin-top:16%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:1%;
        margin-top:15%;
    }
    @media only screen and (max-width: 1024px) {
        margin-left:2%;
        margin-top:23%;
        width: 220px;
        height: 250px; 
    }
`
const Lanfly04 = styled.img`
    position: absolute;
    width: 269px;
    height: 179px;
    transform: rotate(-9.07deg);
    z-index: 3;
    @media only screen and (max-width: 1920px) {
        margin-left:55%;
        margin-top:10%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:67%;
        margin-top:13%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:70%;
        margin-top:16%;
    }
    @media only screen and (max-width: 1024px) {
        margin-left:73%;
        margin-top:16%;
        width: 200px;
        height: 130px; 
    }
`
const Star01 = styled.img`
    position: absolute;
    width: 1440px;
    height: 1024px;
    left: -50px;
    top: 0px;
    z-index: 0;
`
const Star02 = styled.img`
    position: absolute;
    width: 1440px;
    height: 1024px;
    left: 0x;
    top: 0px;
    z-index: 0;
`
const Star03 = styled.img`
    position: absolute;
    width: 1440px;
    height: 1024px;
    left: 0x;
    top: 0px;
    z-index: 0;
`
const Container = styled.div`
    background-color: rgba(28, 18, 57, 1);
    width: 100%;
    height:auto;
    min-height: 100vh; 
    padding-bottom: 300px;
    padding-top: 50px;
    
`

export default class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Container >
                    <div class="container" id="home">
                        <div class="row">
                            <MoonFont className="moonfont" src={Moon} ></MoonFont>
                            <Lanfly01 className="lan1" src={Lanfly1}></Lanfly01>
                            <Lanfly02 className="lan2" src={Lanfly2}></Lanfly02>
                            <Lanfly03 className="lan3" src={Lanfly3}></Lanfly03>
                            <Lanfly04 className="lan4" src={Lanfly4}></Lanfly04>
                            <Mascot01 className="mascot1" src={Mascot1}></Mascot01>
                            <Star01 className="star1" src={Star1}></Star01>
                            <Star02 className="star2" src={Star2}></Star02>
                            <Star03 className="star3" src={Star3}></Star03>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}



