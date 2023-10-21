
import { useContext } from "react";
import { useLoaderData} from "react-router-dom";
import { MyContextProvider } from "./MyContex";


const Details = () => {
const {user}=useContext(MyContextProvider)
// console.log(user.email);
const productDta = useLoaderData();

// console.log(productDta);
const {name, brandName, description, image, _id}=productDta;
const handleCart=(_id)=>{
const userCart={id:_id, email:user.email}
console.log(userCart);

}
return (
    <div className="card  bg-base-100 shadow-xl image-full mt-24 text-white">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title text-white">{name}</h2>
        <h2 className="card-title text-white">{brandName}</h2>
        <p className="text-white">{description}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleCart(_id)} className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
