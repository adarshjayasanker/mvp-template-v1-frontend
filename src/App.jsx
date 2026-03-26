import {Routes, Route} from 'react-router-dom';
import Waitlist from './pages/Waitlist.jsx';
import Tool from './pages/Tool.jsx';

const App = () => {
  return(
      <Routes>
        <Route path="/" element={<Waitlist/>}/>
        <Route path="/tool" element={<Tool/>}/>
      </Routes>
  )
};

export default App;