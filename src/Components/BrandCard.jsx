import { Link } from "react-router-dom";


const BrandCard = ({brand}) => {
    const {brandName, image}=brand;
    return (
        <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{brandName}</h2>
        <p className="text-white">Click to see the branded products?</p>
        <div className="card-actions justify-end">
          <Link to={`/productPage/${brandName}`}><button className="bg-[#42FF1F] text-center w-[150px] h-[28px] font-bold text-[#333333]">Browse</button></Link>
          
        </div>
      </div>
    </div>
    );
};

export default BrandCard;