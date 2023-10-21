import { Link } from "react-router-dom";

const SingleProduct = ({ item }) => {
  const { name, brandName, types, rating, price, image, _id } = item;
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/DY6zLQw/r10-feature-1.webp"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/hc8ztjG/primo-r10-feature-7.webp"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/DrJzwcK/r10-gallery1.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
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
          <div className="card-actions flex mt-10">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
            <Link to={`/updateProduct/${_id}`}>
              <button className="btn btn-primary">update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
