import React from 'react';
import styled from 'styled-components';
import { BsChevronLeft } from 'react-icons/bs';

const CommonBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  width: 100%;
  height: 60px;
`;

const IconStyle = styled(BsChevronLeft)`
  font-weight: bolder;
  cursor: pointer;
  stroke-width: 4px;
`;

const D12 = styled.div`
  font-weight: 900;
  font-size: 19px;
`;

function CommonTop() {
  return (
    <CommonBox>
      <IconStyle />
      <D12>프로필</D12>
      <D12>확인</D12>
    </CommonBox>
  );
}

export default CommonTop;
