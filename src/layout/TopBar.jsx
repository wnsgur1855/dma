import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BottonDiv = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  border: none;
`;

const TopImg = styled.img`
  width: 30px;
  height: 30px;
`;

const Left = styled.div`
  padding: 20px;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  gap: 16px;
  cursor: pointer;
`;

function TopBar() {
  const Navigate = useNavigate();
  const handleClick = (path) => {
    Navigate(path);
  };

  return (
    <BottonDiv>
      <Left>
        <TopImg src='./home.SVG' onClick={() => handleClick('/main')} />
      </Left>
      <Right>
        <TopImg src='./search.SVG' onClick={() => handleClick('search')} />
        <TopImg src='./alarm.svg' onClick={() => handleClick('alarm')} />
        <TopImg src='./person.svg' onClick={() => handleClick('myProfile')} />
      </Right>
    </BottonDiv>
  );
}

export default TopBar;
