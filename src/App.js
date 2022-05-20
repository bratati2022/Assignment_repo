import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Signin from './Components/Signin';
import Signup from './Components/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route exact path="/" element={<Signin/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      
     
      <Footer/> 
    </div>
  );
}

export default App;
