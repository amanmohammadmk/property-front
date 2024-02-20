
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Top from './components/Top';
import Home from './components/Home';
import Add from './components/Add';
import View from './components/View';

function App() {
  return (
    <>
      <Top/>

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<Add/>} />
      <Route path='/view' element={<View/>} />
       
      
        
      </Routes>

 
    </>
  );
}

export default App;
