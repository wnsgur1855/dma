import React from 'react';
import styled from 'styled-components';

const BottonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: white;
  border: none;
`;

const BottomImg = styled.img`
  width: 30px;
  height: 30px;
`;

function BottomBar() {
  return (
    <BottonDiv>
      <BottomImg src='./home.svg' />
      <BottomImg src='./search.SVG' />
      <BottomImg src='./person.svg' />
    </BottonDiv>
  );
}

export default BottomBar;
