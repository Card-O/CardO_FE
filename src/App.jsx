
import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect, useState } from 'react'; 

//import GlobalStyle from './styles/globalstyles.jsx';
import RootLayout from './layout/root-layout.jsx';
import { StateProvider } from './context/StateContext.jsx';
import EditCard from './pages/editcard';
import Home from './pages/home';
import Service from './pages/service';
import Message from './pages/message';
import Sigup from './pages/signup';

const router = createBrowserRouter ( [
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        //기본 페이지 (로그인)
        index: true,
        element: <Home/>
      },
      {
        //회원가입 페이지
        path: 'signup',
        element: <Sigup/>
      },
      {
        //메인 서비스 화면
        path: 'service',
        element: <Service/>
      },
      {
        //메시지 전송 화면
        path: 'message',
        element: <Message />
      },
      {
        //이미지 편집 화면
        path: 'editcard',
        element: <EditCard />
      }
    
    ]
  }
])


function App() {

  return (
    <StateProvider> 
      <RouterProvider router={router}/>
    </StateProvider>
  )
}

export default App
