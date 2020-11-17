import React, { Component } from 'react'
import styled from 'styled-components';
import Lan1 from '../images/pic_Lantern/Lan1.png'
import Lan2 from '../images/pic_Lantern/Lan2.png'
import cloud2 from '../images/cloud/cloud2.png';
import manylan2 from '../images/pic_Lantern/ก้อนโคม.png';
import Star1 from '../images/pic_Lantern/star1.png'
import Star2 from '../images/pic_Lantern/star2.png'
import Star3 from '../images/pic_Lantern/star3.png'
import '../css/History.css'
const Container = styled.div`

    background-color: rgba(28, 18, 57, 1); 
    width: 100%;
    height : auto;
    min-height: 100vh; 
    max-height: 150vh;
    padding-bottom: 300px;
    padding-top: 50px;
    
`
const Cloud01 = styled.img`
    height:162.97px;
    width:616.97px;
    position: absolute;
    margin-top:10%;
    margin-left:-22%;
    z-index: 3;
    @media only screen and (max-width: 1920px) {
        margin-left:-27%;
        margin-top:13%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:-19%;
        margin-top:11%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:-15%;
        margin-top:12%;
    }
    @media only screen and (max-width: 1024px) {
        margin-left:-15%;
        margin-top:15%;
        height:130px;
        width:550px;
        
        
    }
`

const T1 = styled.p`
    position: absolute;
    font-family: Caveat;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 91px;
    text-align: center;
    letter-spacing: 0.5em;
    color: #FFFFFF;
    z-index: 3;
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.39);

    @media only screen and (max-width: 1920px) {
        margin-left:-19%;
        margin-top:15%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:-8%;
        margin-top:14%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:-3%;
        margin-top:15%;
    }
    @media only screen and (max-width: 1024px) {
        margin-left:-1%;
        margin-top:17%;
        font-size: 60px;
        
    }
`
const Lan01 = styled.img`
    position: absolute;
    width: 168.36px;
    height: 258.69px;
    z-index: 3;
    transform: matrix(-1, 0.08, 0.08, 1, 0, 0);
    @media only screen and (max-width: 1920px) {
        margin-left:-10%;
        margin-top:36%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:-3%;
        margin-top:42%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:-1%;
        margin-top:41%;
    }
    @media only screen and (max-width: 1024px) {
        margin-left:2%;
        margin-top:45%;
        width: 140px;
        height: 200px; 
    }
`

const Lan02 = styled.img`
    position: absolute;
    width: 156.19px;
    height: 220.53px;
    z-index: 3;
    transform: rotate(10.88deg);
    @media only screen and (max-width: 1920px) {
        margin-left:61%;
        margin-top:42%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:73%;
        margin-top:50%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:75%;
        margin-top:52%;
    }
    @media only screen and (max-width: 1024px) {
        margin-left:80%;
        margin-top:59%;
        width: 116px;
        height: 160px; 
    }
`
const Manylan02 = styled.img`
    position:absolute;
    width: 269px;
    height: 179px;
    margin-top:10%;
    margin-left:60%;
    z-index: 3;
    transform: rotate(-9.07deg);
    @media only screen and (max-width: 1920px) {
        margin-left:55%;
        margin-top:10%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:67%;
        margin-top:12%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:70%;
        margin-top:13%;
    }
    @media only screen and (max-width: 1024px) {
        margin-left:73%;
        margin-top:16%;
        width: 200px;
        height: 130px; 
    }
    
`
const Box = styled.div`
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.1);
    width:80%;
    height:50%;
    padding:2em;
    z-index: 3;
    @media only screen and (max-width: 1920px) {
        margin-left:20%;
        margin-top:40%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:22%;
        margin-top:32%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:25%;
        margin-top:34%;
        font-size: 18px;
    }
    @media only screen and (max-width: 1024px) {
        margin-left:25%;
        margin-top:34%;
        font-size: 16px;
        
    }
`
const Star01 = styled.img`
    position: absolute;
    width: 1440px;
    height: 1024px;
    left: 0px;
    top: 0px;
    z-index: 0;
    margin-top:110%;
    
`
const Star02 = styled.img`
    position: absolute;
    width: 1440px;
    height: 1024px;
    left: 0x;
    top: 0px;
    z-index: 0;
    margin-top:110%;
`
const Star03 = styled.img`
    position: absolute;
    width: 1440px;
    height: 1024px;
    left: 0x;
    top: 0px;
    z-index: 0;
    margin-top:110%;
`
const T2 = styled.p`
    position: absolute;
    text-indent:10%;
    font-family: 'Prompt', sans-serif;
    font-style: normal;
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;
    
`


export default class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <div class="container" id="history">
                        <Lan01 className="l1" src={Lan1}></Lan01>
                        <Lan02 className="l2" src={Lan2}></Lan02>
                        <T1 className="topic">History</T1>
                        <Cloud01 className="topic" src={cloud2}></Cloud01>
                        <Manylan02 className="mn" src={manylan2}></Manylan02>

                        <T2>
                            <Box>
                                <p>เทศกาลยี่เป็งหรือประเพณีการปล่อยโคมขึ้นฟ้าในช่วงเทศกาลลอยกระทง<br />
                        จัดขึ้น 3 วันโดยในแต่ละวันจะมีกิจกรรม ได้แก่</p>

                                <p>วันขึ้นสิบสามค่ำหรือวันดา <br />
                        ชาวล้านนากลับบ้านและเตรียมซื้อของเพื่อไปทำบุญที่วัด</p>

                                <p>วันขึ้นสิบสี่ค่ำ<br /> ชาวล้านนาจะไปทำบุญที่วัดพร้อมทำกระทงใบใหญ่เพื่อใส่อาหารเป็นการให้ทาน </p>

                                <p>วันขึ้นสิบห้าค่ำ <br />ชาวล้านนาจะนำกระทงเล็กไปลอยในลำน้ำ
                        พร้อมทั้งจุดถ้วยประทีป(การจุดผางปะตี๊บ)<br />เพื่อบูชาพระรัตนตรัยและจุดโคมลอย
                        ปล่อยขึ้นสู่ท้องฟ้าเพื่อบูชาพระเกตุแก้วจุฬามณีบนสรวงสวรรค์ชั้นดาวดึงส์ </p>
                            </Box>
                        </T2>
                        <Star01 className="star1" src={Star1}></Star01>
                        <Star02 className="star2" src={Star2}></Star02>
                        <Star03 className="star3" src={Star3}></Star03>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}