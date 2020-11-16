import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';
import Card1 from '../images/Card/fcard2.png'
import Card2 from '../images/Card/fcard1.png'
import Back1 from '../images/Card/bcard2.png'
import Back2 from '../images/Card/bcard1.png'
import Mascot2 from '../images/pic_Lantern/mascot.png'
import Lan1 from '../images/pic_Lantern/logo.png'
import cloud5 from '../images/cloud/cloud5.png';
import '../css/Culture.css'



const Container = styled.div`
    background-color: rgba(28, 18, 57, 1);
    width: 100%;
    height:auto;
    min-height: 130vh; 
    padding-bottom: 300px;
    padding-top: 50px;
`

const Cloud01 = styled.img`
    height:160px;
    width:735px;
    position: absolute;
 
    @media only screen and (max-width: 1920px) {
        margin-left:-26%;
        margin-top:13%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:-17%;
        margin-top:11%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:-13%;
        margin-top:12%;
    }
    @media only screen and (max-width: 1024px) {
        margin-left:-10%;
        margin-top:15%;
        height:130px;
        width:550px; 
    }
`

const Lan01 = styled.img`
    position: absolute;
    width: 285.61px;
    height: 277px;
    @media only screen and (max-width: 1920px) {
        margin-left:-16%;
        margin-top:40%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:-8%;
        margin-top:45%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:-2%;
        margin-top:47%;
        height:190px;
        width:200px; 
    }
    @media only screen and (max-width: 1024px) {
        margin-left:-1%;
        margin-top:57%;
        height:190px;
        width:200px; 
    }
`

const Mascot02 = styled.img`
    position: absolute;
    width: 223px;
    height: 278px;
    transform: matrix(-1, 0, 0, 1, 0, 0); 

    @media only screen and (max-width: 1920px) {
        margin-left:63%;
        margin-top:38%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:71%;
        margin-top:42%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:77%;
        margin-top:42%;
        width: 180px;
        height: 240px; 
    }
    @media only screen and (max-width: 1024px) {
        margin-left:77%;
        margin-top:55%;
        width: 160px;
        height: 190px; 
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
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.39);
    margin-top:13%;
    margin-left:-12%;
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

const T2 = styled.p`
    position: absolute;
    text-align: center;
    font-family: 'Prompt', sans-serif;
    font-style: normal;
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;

    @media only screen and (max-width: 1920px) {
        margin-left:20%;
        margin-top:16%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:32%;
        margin-top:16%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:38%;
        margin-top:17%;
        font-size: 18px;
        
    }
    @media only screen and (max-width: 1024px) {
        margin-left:40%;
        margin-top:20%;
        font-size: 16px;
        
    }
`

const T3 = styled.p`
    position: absolute;
    font-family: 'Prompt', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 54px;
    color: #FFFFFF;
    margin-top:52%;
    margin-left:43%;
    @media only screen and (max-width: 1920px) {
        margin-left:33%;
        margin-top:50%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:46%;
        margin-top:57%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:51%;
        margin-top:55%;
        font-size: 26px;
       
    }
    @media only screen and (max-width: 1024px) {
        margin-left:53%;
        margin-top:63%;
        font-size: 24px;
        
    }
    
    
    
`

const T4 = styled.p`
    position: absolute;
    font-family: 'Prompt', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 54px;
    color: #FFFFFF;
    margin-top:52%;
    margin-left:18%;
    @media only screen and (max-width: 1920px) {
        margin-left:13%;
        margin-top:50%;
    }
    @media only screen and (max-width: 1440px) {
        margin-left:21%;
        margin-top:57%;
    }
     @media only screen and (max-width: 1280px) {
        margin-left:27%;
        margin-top:55%;
        font-size: 26px;
       
    }
    @media only screen and (max-width: 1024px) {
        margin-left:26%;
        margin-top:63%;
        font-size: 24px;
        
    }
    
    
`


class FlipCard extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isFlipped: false
      }
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }
  render() {
      const { isFlipped } = this.state;
      const { imgFront, imgBack } = this.props;
      return (
          <div id="FlipCard" >
              <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                  <img src={ imgFront } alt="Front img" onClick={ this.handleClick } draggable="false"/>
                  <img src={ imgBack } alt="Back img" onClick={ this.handleClick } draggable="false"/>
                </ReactCardFlip>
          </div>
      ) 
      }
    }

 class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Container >
                <div class="container" id="culture">
                    <T1>Culture</T1>
                    <T2>ธรรมเนียมปฎิบัติของประเพณียี่เป็งมีทั้งการลอยในแม่น้ำและการจุดประทีปโคมลอย<br/> ขึ้นไปสว่างไสวบนท้องฟ้าโดยจะมีการปล่อยโคมลอยทั้งหมด 2 เวลา คือ</T2>
                    <Mascot02 src={Mascot2}></Mascot02>
                    <Lan01 src={Lan1}></Lan01>
                    <Cloud01 src={cloud5}></Cloud01>
                    <T4>เวลากลางวัน</T4>
                    <T3>เวลากลางคืน</T3> 
                    <div class="d-flex justify-content-center" id="card">
                    <FlipCard imgFront={Card1} imgBack={Back1}></FlipCard>
                    <FlipCard imgFront={Card2} imgBack={Back2}></FlipCard>
                    </div>
                   </div>

                </Container>
            </React.Fragment>
        )
    }
}
export default Content;
export { FlipCard };