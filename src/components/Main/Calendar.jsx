import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MainPageLargeBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: red;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100px;
  height: 100px;
`;

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MainPageLargeBox>
      <StyledDatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat='yyyy-MM-dd'
        placeholderText='Select a date'
      />
    </MainPageLargeBox>
  );
};

export default Calendar;
