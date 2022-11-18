
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

// page imports
import { Feed } from './components/Feed';
import { Footer } from './components/Footer';
import { Nbar } from './components/Navbar';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { Friends } from './components/Friends';
import { Settings } from './components/Settings';




function App() {

  const [currentPage, setCurrentPage] = useState('')

  const displayPage = () => {
    switch (currentPage) {
      case "Feed":
        return <SignIn />;
      case "Friends":
        return <Friends />;
      case "Settings":
        return <Settings />;
      default:
        return <Feed />
    }
  }

  return (
    <div className='App'>
      <Nbar setCurrentPage={ setCurrentPage }/>

      {displayPage()}

      <Footer />
    </div>
  );
}

export default App;
