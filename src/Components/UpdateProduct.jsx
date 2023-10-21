// import { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { MyContextProvider } from "./MyContex";

import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
        const dataToUpdate= useLoaderData()
        const {name, brandName, rating, price, image,_id}=dataToUpdate;
        console.log(dataToUpdate);
        const handleFormSubmit=e=>{
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const brandName = form.brandName.value;
            const image = form.image.value;
            const price = form.price.value;
            const description = form.description.value;
            const types = form.types.value;
            const rating = form.rating.value;
            const updateProductsInfo ={name, brandName, types, rating, price, image, _id,  description}
            form.reset();
            console.log(updateProductsInfo);

            fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProductsInfo)
        })
            .then(res => res.json())
            .then(data=>console.log(data))
           
    }
        return (
            <div className="hero min-h-screen  mt-16 ">
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleFormSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    defaultValue={name}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Brand Name</span>
                  </label>
                  <input
                    type="text"
                    name="brandName"
                    defaultValue={brandName}
                    placeholder="Brand Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={image}
                    placeholder="Image url"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    defaultValue={price}
                    placeholder="Price "
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    defaultValue={rating}
                    placeholder="Price "
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Types</span>
                  </label>
                  <select id="country" name="types">
                    <option value="Mobile">Mobile</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" >Submit</button>
                </div>
              </form>  
            </div>
        </div>
        );
};

export default UpdateProduct;