import './App.css';
import HomePage from './containers/HomePage';
import { Route, Routes } from "react-router-dom";
import SingInPage from "./containers/SingInPage";
import SignUpPage from "./containers/SignUpPage";
import MainPage from "./containers/MainPage";
function App() {
    const user = null;
  return (
    <div className='app-container'>
        <Routes>
            {!user ? (<Route path='/' element={<MainPage/>}/>) : ( <Route exact path='/' element={<HomePage/>}/> )}
            <Route path='/signin' element={<SingInPage/>} />
            <Route path='/signup' element={<SignUpPage/>} />
        </Routes>
    </div>
  );
}

export default App;
