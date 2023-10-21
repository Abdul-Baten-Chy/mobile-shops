import { Link } from "react-router-dom";

const SingleProduct = ({ item }) => {
  const { name, brandName, types, rating, price, image, _id } = item;
  return (
    <div>
      
      <div className="card lg:card-side bg-base-100 shadow-xl mt-20">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="flex flex-col justify-center mr-5">
          <p className="text-2xl font-semibold">Product:{name}</p>

          <h2 className="card-title">Brand: {brandName}</h2>
          <p>Price: Tk{price}</p>
          <p>Type: {types}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions flex mt-8 mb-3">
            <Link to={`/details/${_id}`}>
              <button className="bg-[#42FF1F] text-center w-[150px] h-[28px] font-bold text-[#333333]">Details</button>
            </Link>
            <Link to={`/updateProduct/${_id}`}>
              <button className="bg-[#42FF1F] text-center w-[150px] h-[28px] font-bold text-[#333333]">update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
