import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Register from './component/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
