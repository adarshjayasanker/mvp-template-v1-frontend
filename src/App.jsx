import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Waitlist from './pages/Waitlist.js';
import Tool from './pages/Tool.js';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Waitlist/>}/>
        <Route path="/tool" element={<Tool/>}/>
      </Routes>
    </Router>
  )
};

export default App;