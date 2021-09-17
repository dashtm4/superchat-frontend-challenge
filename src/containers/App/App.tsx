import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import TopBar from '@/containers/TopBar';
import SideBar from '@/containers/SideBar';
import Footer from '@/containers/Footer';
import Content from '@/containers/Content';

import 'react-perfect-scrollbar/dist/css/styles.css';
import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SideBar className="sidebar" />
        <TopBar />
        <PerfectScrollbar>
          <Content className="content"/>
          <Footer />
        </PerfectScrollbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
