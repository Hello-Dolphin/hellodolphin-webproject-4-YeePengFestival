import React, { Component } from 'react'
import styled from 'styled-components';
import Lan1 from '../images/pic_Lantern/Lan1.png'
import Lan2 from '../images/pic_Lantern/Lan2.png'
import cloud2 from '../images/cloud/cloud2.png';
import manylan2 from '../images/pic_Lantern/ก้อนโคม.png';
// import Cloud2 from '../images/cloud/cloud2.png'

const Container = styled.div`
    //background-color: red;
    background-color: rgba(28, 18, 57, 1); 
    width: 100%;
    height : auto;
    min-height: 100vh; 
    padding-bottom: 300px;
    padding-top: 50px;
    
`
const Lan01 = styled.img`
    position: absolute;
    width: 168.36px;
    height: 258.69px;
    left: 91px;
    top: 640px;
    transform: matrix(-1, 0.08, 0.08, 1, 0, 0);
`
const Cloud01 = styled.img`
    height:162.97px;
    width:616.97px;
    position: absolute;
    left: -100px;
    top: 135px;
    
`
const T1 = styled.p`
    position: absolute;
    left: 40px;
    top: 178px;

    font-family: Caveat;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 91px;


    text-align: center;
    letter-spacing: 0.5em;

    color: #FFFFFF;

    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.39);
`

// const Cloud02 = styled.img`
// position: absolute;
// width: 156.19px;
// height: 97.98px;
// left: 114px;
// top: 766.02px;

// `

const Lan02 = styled.img`
    position: absolute;
    width: 156.19px;
    height: 220.53px;
    left: 1212px;
    top: 738px;
    transform: rotate(10.88deg);
`
const Manylan02 = styled.img`
    position:absolute;
    width: 269px;
    height: 179px;
    top: 145px;
    right:  116.25px;
`
const Box = styled.div`
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.1);
    width:80%;
    height:50%;
    padding:2em;
    ;

`
const T2 = styled.p`
    position: absolute;
    text-indent:10%;
    left: 410px;
    top: 270px;

    font-family: Caveat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;

    color: #FFFFFF;
`
const Indent = styled.p`
    text-indent:20px;
`

export default class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>

                    <Lan01 src={Lan1}></Lan01>
                    <Lan02 src={Lan2}></Lan02>
                    <T1>History</T1>
                    <Cloud01 src={cloud2}></Cloud01>
                    <Manylan02 src={manylan2}></Manylan02>
                    <T2>
                    <Box>                    
                       <p>เทศกาลยี่เป็งหรือประเพณีการปล่อยโคมขึ้นฟ้าในช่วงเทศกาลลอยกระทง 
                        จัดขึ้น 3 วันโดยในแต่ละวันจะมีกิจกรรม ได้แก่</p> 
                        
                        <p>วันขึ้นสิบสามค่ำหรือวันดา 
                        ชาวล้านนากลับบ้านและเตรียมซื้อของเพื่อไปทำบุญที่วัด</p>
                        
                        <p>วันขึ้นสิบสี่ค่ำ ชาวล้านนาจะไปทำบุญที่วัดพร้อมทำกระทงใบใหญ่เพื่อใส่อาหารเป็นการให้ทาน </p>
                       
                        <p>วันขึ้นสิบห้าค่ำ ชาวล้านนาจะนำกระทงเล็กไปลอยในลำน้ำ 
                        พร้อมทั้งจุดถ้วยประทีป(การจุดผางปะตี๊บ)เพื่อบูชาพระรัตนตรัยและจุดโคมลอย 
                        ปล่อยขึ้นสู่ท้องฟ้าเพื่อบูชาพระเกตุแก้วจุฬามณีบนสรวงสวรรค์ชั้นดาวดึงส์ </p>
                    </Box>
                    </T2>
                    {/* <Cloud02 src={Cloud2}></Cloud02> */}

                </Container>
            </React.Fragment>
        )
    }
}