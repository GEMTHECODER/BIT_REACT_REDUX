import './App.css';

import {Route, Routes} from 'react-router-dom';
import CryptoPage from "./pages/CryptoPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={   <HomePage/>}/>
                <Route path="/home" element={   <HomePage/>}/>
                <Route path="/crypto" element={   <CryptoPage/>}/>
            </Routes>
        </>
    );
}

export default App;
