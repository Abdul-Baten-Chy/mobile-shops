import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";


const Brands = () => {
   const [brands, setBrands]= useState([])
    useEffect(()=>{
        fetch('brandinfo.json')
        .then(res=>res.json())
        .then(data=>setBrands(data))
    },[])

  return (

       <div>
        <h2 className="text-3xl font-bold mt-16">Browse phone based on the brand </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 my-8">
        {
             brands.map((brand)=><BrandCard key={brand.brandName} brand={brand}></BrandCard>)
        }
       </div>
       </div>

  );
};

export default Brands;
