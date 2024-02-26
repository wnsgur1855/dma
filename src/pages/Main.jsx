import React from 'react';
import Calendar from '../components/Main/Calendar';
import styled from 'styled-components';
import Memo from '../components/Main/Memo';
import CalendarMy from '../components/Main/CalendarMy';

const MainPageLargeBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: red;
`;

const CalendarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  flex: 1;
  padding: 10px 10px 100px 150px;
`;

const MemoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  flex: 1;
  padding: 10px 100px;
`;

function Main() {
  return (
    <MainPageLargeBox>
      <CalendarMy />
      <CalendarBox>
        <Calendar />
      </CalendarBox>

      <MemoBox>
        <Memo />
      </MemoBox>
    </MainPageLargeBox>
  );
}

export default Main;
