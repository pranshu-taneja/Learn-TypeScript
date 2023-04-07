import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import { v4 as uuidv4 } from "uuid";

export interface IProduct {              //These are named exports not default export tho, use {} while importing these one's
  id: number,
  name: string,
  color: string
}


function App() {
  // const [IsInCart, setIsInCart] = useState(null);
  const [products, setproducts] = useState<IProduct[]>(         //This can be the data that might be coming from API
    [
      {
        id: 1,
        name: "Shirt",
        color: "Blue"
      },
      {
        id: 2,
        name: "Payjamas",
        color: "Pink"
      }
    ]
  )

  function handleCart(id:number):void{
    console.log({"Product Id":id},"Added To Cart!!");
  }
  
  return (
    <>
      { //using javascript inside the html (also known as JSX or TSX)
        products.map( (product)=>{
          return <Product handleAddToCart={handleCart} key={uuidv4()} property={product} /> 
          //Here we were passing a function from parent to child using a prop. 
        })
      }
    </>
  )
}

export default App

