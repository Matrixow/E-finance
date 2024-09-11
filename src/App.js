import './App.css';
import Budget from './pages/Budget';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Savings from './pages/Savingspage';


function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} ></Route>
                <Route index path='/home' element={<Home/>} ></Route>
                <Route path='/budget' element={<Budget/>}></Route>
                <Route path='/savings' element={<Savings/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
