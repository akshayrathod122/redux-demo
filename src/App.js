
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashborad from './components/Dashborad';
import Add from './components/Add';
import List from './components/List';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Dashborad /> } />
          <Route path='/add' element={ <Add /> } />
          <Route path='/list' element={ <List /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
