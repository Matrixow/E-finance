import './App.css';
import Budget from './pages/Budget';
import Home from './models/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} ></Route>
                <Route index path='/home' element={<Home/>} ></Route>
                <Route path='/budget' element={<Budget/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
