
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// page imports
import { Home } from './components/Home'

import { Footer } from './components/Footer'












function App() {
  return (

    <BrowserRouter>
    <div className="App">
      {/* navbar goes here just like footer */}
        <Routes>
        <Route path='/home' element={<Home />} />
        {/* routes to other nav links and pages goes here */}
        </Routes>
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
