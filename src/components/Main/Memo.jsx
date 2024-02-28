import React, { useState } from 'react';
import styled from 'styled-components';
import MemoCRUD from './MemoCRUD';
import MemoPage from './MemoPage';

const MemoContainer = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 500px;
  margin: 50px 0 0 20px;
`;

const MemoTextarea = styled.textarea`
  width: 98.5%;
  height: 80%;
  display: flex;
  justify-content: center;
  font-family: 'Nanum Gothic', sans-serif;
  background-color: rgba(94, 91, 91, 0.219);
  outline: none;
  text-align: left;
`;

const Memo = ({ selectedDate }) => {
  const [memo, setMemo] = useState('');

  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  };

  const handleSaveMemo = () => {
    console.log(`날짜 ${selectedDate}에 메모 저장: ${memo}`);
  };

  return (
    <MemoContainer>
      <MemoTextarea value={memo} onChange={handleMemoChange} />
      {/* <button onClick={handleSaveMemo}>저장</button> */}
      <MemoPage />
      <MemoCRUD />
    </MemoContainer>
  );
};

export default Memo;
