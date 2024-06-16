import { useState } from 'react'
import './App.css'

import MyButton from './Components/1_myButton';
import AddStyle from './Components/2_AddStyle';
import ProductList from './Components/3_ProductsList';
import Conditionalrendering from './Components/4_ConditionalRendering';
import TicTacToe from './Components/5_TicTacToe';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <MyButton/> */}
     {/* <AddStyle/> */}
     {/* <ProductList/> */}
     {/* <Conditionalrendering/> */}
     <TicTacToe/>



    </>
  )
}

export default App
