import { useLoaderData } from "react-router-dom";
import All from "./All";
import { useState } from "react";

const MyProduct = () => {
    const [myCart, setMyCart]=useState(useLoaderData())
    console.log(myCart);
    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
            {
            myCart.map(cart => <All key={cart._id} cart={cart} myCart={myCart} setMyCart={setMyCart}></All>)
            }
        </div>
    );
};

export default MyProduct;