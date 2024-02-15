import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Characters from './pages/Characters';
import Comic from './pages/Comic';
import Tvshows from './pages/Tvshows';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/comics' element={<Comic />} />
        <Route path='/tvshows' element={<Tvshows />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
