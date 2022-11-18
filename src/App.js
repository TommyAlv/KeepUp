
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react';
import { useState } from 'react';
import React from 'react';

// page imports
import  Layout  from './components/Layout'
import { Feed } from './components/Feed';
import { Footer } from './components/Footer';
import { Nbar } from './components/Navbar';
import  SignIn  from './components/SignIn';
import { SignUp } from './components/SignUp';
import { Friends } from './components/Friends';
import { Settings } from './components/Settings';
import  NoPage  from './components/NoPage';



function App () {
  return (
    <BrowserRouter>
    <nav>
      <Nbar />
    </nav>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Feed />}/>
        <Route path='Friends' element={<Friends/>}/>
        <Route path='Settings' element={<Settings/>}/>
        <Route path='SignIn' element={<SignIn/>}/>
        <Route path='SignUp' element={<SignUp/>}/>
        <Route path='*' element={<NoPage/>}/>

<<<<<<< HEAD
  const displayPage = () => {
    switch (currentPage) {
      case "Feed":
        return <SignIn />;
      case "Friends":
        return <Friends />;
      case "Settings":
        return <Feed />;
      default:
        return <Settings />
    }
  }
=======
>>>>>>> ca19d7ef7d072d105c9c526d85ccc66866385292

      </Route>
    </Routes>

    <footer>
      <Footer />
    </footer>

    </BrowserRouter>
  )
}

export default App;
