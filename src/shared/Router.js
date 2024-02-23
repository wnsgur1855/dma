import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FristPage from '../pages/FristPage';
import Login from '../pages/Login';
import Main from '../pages/Main';
import ProfileEdit from '../pages/ProfileEdit';
import MyProfile from '../pages/MyProfile';
import BottomBar from '../layout/BottomBar';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FristPage />} />
        <Route path='login' element={<Login />} />
        <Route path='main' element={<Main />} />
        <Route path='myProfile' element={<MyProfile />} />
        <Route path='profileEdit' element={<ProfileEdit />} />
      </Routes>
      <BottomBar />
    </BrowserRouter>
  );
}

export default Router;
