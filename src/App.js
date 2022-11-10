import React from 'react'
import styled from 'styled-components'
import EthAndClock from './components/EthAndClock';
import Header from './components/Header';
import TextContent from './components/TextContent';

function App() {
  return (
    <Div>
      <Header/>
      <TextContent/>
      <EthAndClock/>
    </Div>
  )
}

export default App

const Div = styled.div`
  background: #15263F;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.0952917);
  border-radius: 15px;
  position: absolute;
  top: 30%;
  left: 40%;
  padding: 24px;
`;
