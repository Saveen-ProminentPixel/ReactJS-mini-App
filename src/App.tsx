
import Login from './components/Login'
import UserPage from './pages/UserPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import AccordianPage from './pages/AccordianPage';
import CounterPage from './pages/CounterPage';
import Hell from './components/Hell';
import ModalPage from './pages/ModalPage';
import TicTacToePage from './pages/TicTacToePage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="user/:name" element={<UserPage />} />
          <Route path="/accordian" element={<AccordianPage/>} />
          <Route path="/counter" element={<CounterPage/>} />
          <Route path="/hell" element={<Hell/>} />
          <Route path='/modal' element={<ModalPage />} />
          <Route path="/tictactoe" element={<TicTacToePage />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
