
import './App.css'
import Card from './components/card'
import Cart from './components/cart'

function App() {


  return (
    <>
    <h1> shoping here </h1>
   <Card 
   url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RhAkXrDXaU8_tVgEFovixM6eCSLN3CJl5Q&s"}
   name={"pizza 1"}
   price={125}
   />
    <Card 
   url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RhAkXrDXaU8_tVgEFovixM6eCSLN3CJl5Q&s"}
   name={"pizza2"}
   price={80}
   />
    <Card 
   url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RhAkXrDXaU8_tVgEFovixM6eCSLN3CJl5Q&s"}
   name={"pizza3"}
   price={66}
   />

   <div> 
    <Cart />
   </div>
    </> 
  )
}

export default App
