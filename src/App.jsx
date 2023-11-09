import React from 'react'

import {Routes, Route} from "react-router-dom"
import Exchanges from'./componets/Exchanges'
import Coins from './componets/Coins';
import CoinDetails from './componets/CoindDeatials';


 function App() {

  return (
    <Routes>
      <Route path='/' element={<Exchanges />}/ >
        <Route path='coins' element={<Coins />} />
        <Route path='/coins/:id' element={<CoinDetails/>} />
    </Routes>
  );
}

export default App;