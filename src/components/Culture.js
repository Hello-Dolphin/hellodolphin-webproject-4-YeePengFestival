import React, { Component } from 'react'
import styled from 'styled-components';
import Card1 from '../images/Card/card1.png'
import Card2 from '../images/Card/card2.png'
import Back1 from '../images/Card/backcard1.png'
import Back2 from '../images/Card/backcard2.png'



const Container = styled.div`
    background-color: rgba(28, 18, 57, 1);
    width: 100%;
    min-height: 100vh; 
    padding-bottom: 300px;
    padding-top: 50px;
    
`

const Card01 = styled.img`
    position: absolute;
    width: 359px;
    height: 531px;
    left: 317px;
    top: 333px;
    filter: drop-shadow(10px 10px 30px rgba(177, 177, 177, 0.5));
    border-radius: 31px;
    
`

const Back01 = styled.img`
    position: absolute;
    width: 359px;
    height: 531px;
    left: 317px;
    top: 333px;
    filter: drop-shadow(10px 10px 30px rgba(177, 177, 177, 0.5));
    border-radius: 31px;
    
`

const Card02 = styled.img`
    position: absolute;
    width: 359px;
    height: 531px;
    left: 770px;
    top: 333px;
    filter: drop-shadow(10px 10px 30px rgba(177, 177, 177, 0.5));
    border-radius: 31px;
    
`
const Back02 = styled.img`
    position: absolute;
    width: 359px;
    height: 531px;
    left: 770px;
    top: 333px;
    filter: drop-shadow(10px 10px 30px rgba(177, 177, 177, 0.5));
    border-radius: 31px;
    
`

const Text = styled.p`
    position: absolute;
    width: 831px;
    height: 92px;
    left: 487px;
    top: 202px;

    font-family: Caveat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    /* or 146% */

    text-align: center;

    color: #FFFFFF;
    
`


export default class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                 <Text>ธรรมเนียมปฎิบัติของประเพณียี่เป็งมีทั้งการลอยในแม่น้ำและการจุดประทีปโคมลอย ขึ้นไปสว่างไสวบนท้องฟ้าโดยจะมีการปล่อยโคมลอยทั้งหมด 2 เวลา คือ</Text>
                <Card01 src={Card1}></Card01>
                <Card02 src={Card2}></Card02>
                <Back01 src={Back1}></Back01>
                <Back02 src={Back2}></Back02>
 
                </Container>
            </React.Fragment>
        )
    }
}