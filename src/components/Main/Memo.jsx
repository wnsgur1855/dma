import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
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
  background-color: black;
`;

const TodoListBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: red;
`;

const TodoList = styled.ul`
  width: 100%;
  padding: 0;
  list-style-type: none;
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const AddButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 10px;
`;

const TodoInput = styled.input`
  width: calc(100% - 30px);
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
`;

const fetchData = async (date) => {
  const formattedDate = date.toISOString().split('T')[0];
  const response = await axios.get(
    `http://localhost:8080/api/events?createdAt=${formattedDate}`
  );
  return response.data;
};

const Memo = ({ selectedDate }) => {
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);

  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery(['events', selectedDate], () => fetchData(selectedDate), {
    enabled: selectedDate !== null, // 선택된 날짜가 없는 경우에는 쿼리를 실행하지 않음
  });

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      // 실제로 서버로의 데이터 추가 요청이 필요하면 여기서 axios.post 등을 사용하여 요청을 보냄
      setInputValue('');
      setShowInput(false);
    }
  };

  const handleAddButtonClick = () => {
    setShowInput(true);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <MemoContainer>
      <TodoListBox>
        <TodoList>
          {todos.map((todo, index) => (
            <TodoItem key={index}>
              <span>
                {index + 1}.{todo.title}
              </span>
            </TodoItem>
          ))}
          {showInput && (
            <TodoItem>
              <TodoInput
                type='text'
                placeholder='Add a new todo'
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
              />
            </TodoItem>
          )}
          {!showInput && (
            <TodoItem>
              <AddButton onClick={handleAddButtonClick}>+</AddButton>
            </TodoItem>
          )}
        </TodoList>
      </TodoListBox>
      <MemoPage />
      <MemoCRUD />
    </MemoContainer>
  );
};

export default Memo;
