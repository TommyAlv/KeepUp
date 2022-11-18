
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// page imports

import { Feed } from './components/Feed';

import { Footer } from './components/Footer'

import { Nbar } from './components/Navbar'



function App() {
  return (

    <BrowserRouter>
      <Nbar />
      <div className="App">
        <Routes>
          {/* SideNav here*/}

          {/* Feed */}
          <Route path='/Feed' element={<Feed />} />
          {/* right sidebar here */}
          {/* default home */}
          <Route path='*' element={<Feed />} />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
