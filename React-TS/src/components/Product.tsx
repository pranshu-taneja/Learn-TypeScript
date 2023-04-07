import React from "react";
import { IProduct } from "../App";



interface ProductProp {         //Just make a convention for yourself to use props by first defining them into a interface or type first
  property: IProduct;
  handleAddToCart(id:number):void;
}

// function Product({property, handleAddToCart}:ProductProp){...}    //Just an inference tbh (different syntax)

function Product( product:ProductProp) {    // Imp: You use {} then you are defining/assigning properties directly (inference tbh) OR Simple then you are using interface directly
  return (
    <div>
      <h2 className="text-blue-600 text-3xl cursor-pointer hover:-translate-y-1 transition-all ease-in">
        {product.property.name}, {product.property.id}, {product.property.color}
      </h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded" onClick={()=>{product.handleAddToCart(product.property.id)}}>Add To Cart</button>
    </div>
  );
}

export default Product;
