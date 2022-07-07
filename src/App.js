import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Home from './pages/Home/Home';
import List from './pages/List/List';
import Hotel from './pages/hotel/Hotel';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/hotels' element={<List/>}/>
    <Route path='/hotels/:id' element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
