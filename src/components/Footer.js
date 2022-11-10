import React from 'react'
import styled from 'styled-components'
import julio from "./assets/Julio.png"

function Footer() {
  return (
    <Div>
        <img src={julio} alt="julio"/>
        <p>Creation of <span>Jules Wyvern</span></p>
    </Div>
  )
}

export default Footer

const Div = styled.div`
    display: flex;
    flex-direction: row;
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
        left: 16px;

    }
    p span{
       
        font-family: Outfit;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        color: #FFFFFF;

   }
   p span:hover{
       color: #00FFF8;
       cursor: pointer;
  }
`;