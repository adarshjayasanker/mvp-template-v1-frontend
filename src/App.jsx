import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Waitlist from './pages/Waitlist.js';
import Tool from './pages/Tool.js';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Waitlist/>}/>
        <Route path="/tool" element={<Tool/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;