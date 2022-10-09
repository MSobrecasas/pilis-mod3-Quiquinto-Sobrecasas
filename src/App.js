import './App.css';
import {Routes, Route} from 'react-router-dom' 
import { useContext, useEffect,useState } from 'react'; 
import { getClima } from './service';  //Api
import { LocationContext} from './contexts/LocationContext'; //context
import Home from './routes/Home/Home';
import CardDisplay from './routes/Card/CardDisplay';
import CardCreation from './routes/Card/CardCreation';
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/Login/Login';

function App() {  
  return ( 
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigation/>}> 
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/location/create' element={<CardCreation/>}/>
          <Route path='/location/:id' element={<CardDisplay/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;