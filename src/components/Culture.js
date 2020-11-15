import React, { Component } from 'react'
import styled from 'styled-components';
import Card1 from '../images/Card/card1.png'
import Card2 from '../images/Card/card2.png'
import Back1 from '../images/Card/backcard1.png'
import Back2 from '../images/Card/backcard2.png'
import Mascot2 from '../images/pic_Lantern/mascot.png'
import Logo2 from '../images/pic_Lantern/logo.png'
// import Cloud5 from '../images/cloud/cloud5.png'

const Container = styled.div`
    background-color:blue;
    /* background-color: rgba(28, 18, 57, 1); */
    width: 100%;
    height:auto;
    min-height: 100vh; 
    max-height:100vh;
    padding-bottom: 300px;
    padding-top: 50px;
    
`
// const Cloud5 = styled.img`
//     position: absolute;
// width: 828px;
// height: 168.95px
// left: -10.28%;
// top: 126px;


// `

const Logo02 = styled.img`
    position: absolute;
    width: 285.61px;
    height: 277px;
    margin-top:20%;
    

    
`

const Mascot02 = styled.img`
    position: absolute;
    width: 223px;
    height: 278px;
    transform: matrix(-1, 0, 0, 1, 0, 0); 
    margin-left:83%;
    margin-top:75%;
`

const Card01 = styled.img`
    position: absolute;
    width: 269px;
    height: 431px;
    filter: drop-shadow(10px 10px 30px rgba(177, 177, 177, 0.5));
    border-radius: 31px;
    margin-top:26%;
    margin-left:45%;
`

const Back01 = styled.img`
    position: absolute;
    width: 269px;
    height: 431px;
    filter: drop-shadow(10px 10px 30px rgba(177, 177, 177, 0.5));
    border-radius: 31px;
`

const Card02 = styled.img`
    position: absolute;
    width: 269px;
    height: 431px;
    filter: drop-shadow(10px 10px 30px rgba(177, 177, 177, 0.5));
    border-radius: 31px;
    
`
const Back02 = styled.img`
    position: absolute;
    width: 269px;
    height: 431px;
    filter: drop-shadow(10px 10px 30px rgba(177, 177, 177, 0.5));
    border-radius: 31px;
`

const Text = styled.p`
    position: absolute;
    width: 821px;
    height: 92px;
    right:5%;
    font-family: 'Prompt', sans-serif;
    font-style: normal; 
    font-weight: bold; 
    font-size: 24px;
    line-height: 35px;
    /* or 146% */
    text-align: center;
    color: #FFFFFF;
    
`

const Text2 = styled.p`
    font-family: 'Prompt', sans-serif;
    font-size: 36px; 
    font-style: normal; 
    font-weight: 400; 
    line-height: 45px; 
    letter-spacing: 0em; 
    text-align: center;
    color: #FFFFFF;
    
`


export default class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Text>ธรรมเนียมปฎิบัติของประเพณียี่เป็งมีทั้งการลอยในแม่น้ำและการจุดประทีปโคมลอย ขึ้นไปสว่างไสวบนท้องฟ้าโดยจะมีการปล่อยโคมลอยทั้งหมด 2 เวลา คือ</Text>
                    {/* <Card01 src={Card1}></Card01>
                    <Card02 src={Card2}></Card02>
                    <Back01 src={Back1}></Back01>
                    <Back02 src={Back2}></Back02>  */}
                    <Mascot02 src={Mascot2}></Mascot02>
                    <Logo02 src={Logo2}></Logo02>
                    {/* <Text2>เวลากลางวัน</Text2>
                    <Text2>เวลากลางคืน</Text2> */}


                </Container>
            </React.Fragment>
        )
    }
}