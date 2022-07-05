import './App.css';
import {
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Home from './pages/Home';
import List from './List/List';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<List/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
