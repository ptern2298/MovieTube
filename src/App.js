import './App.css';
import HomePage from './containers/HomePage';
import { Route, Routes } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
function App() {
    const user = null;
  return (
    <div className='app-container'>
        <Routes>
            {!user ? (<Route path='/' element={<LoginPage/>}/>) : ( <Route exact path='/' element={<HomePage/>}/> )}

        </Routes>
    </div>
  );
}

export default App;
