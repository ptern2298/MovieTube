import './App.css';
import HomePage from './containers/HomePage';
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className='app-container'>
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
        </Routes>
    </div>
  );
}

export default App;
