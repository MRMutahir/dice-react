import DiceImage from './components/DiceImage';
import './App.css';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
<>   
   <Routes>
   {/* <DiceImage/> */}
    <Route path='/' Component={DiceImage}></Route>
    <Route path='/home' element={<div>SALAM</div>} Component={Navbar}></Route>
   </Routes>
</>

   
  );
}

export default App;
