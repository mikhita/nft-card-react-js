import React from 'react'
import styled from 'styled-components'
import clock from './assets/Clock.png';
import eth from './assets/eth.png';


function EthAndClock() {
  return (
    <Div>
        <EthDiv> 
            <img src={eth} alt="ethImage"/>
            <p>0.041 ETH</p>
        </EthDiv>
        <ClockDiv>
            <img src={clock} alt="clock"/>
            <p>3 days left</p>
        </ClockDiv>
    </Div>
  )
}

export default EthAndClock

const Div = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
`;

const EthDiv = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    p{
       
        font-family: Outfit;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        color: #00FFF8;
        position: relative;
        left: 10px;
        top: 2px;
    }
    
`;

const ClockDiv = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    p{
    
        font-family: Outfit;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        color: #8BACD9;
        position: relative;
        top: 2px;

    }
    img{
        position: relative;
        right: 10px;
    }

`;