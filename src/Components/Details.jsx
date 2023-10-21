
import { useLoaderData} from "react-router-dom";


const Details = () => {

const productDta=useLoaderData();
console.log(productDta);
const {name, brandName, description, image}=productDta;
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
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
