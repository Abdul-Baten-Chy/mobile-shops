
import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const ProductPage = () => {

  const data = useLoaderData();
  console.log(data);



  return (
    <div>
        <div>

        </div>
        <div className="grid lg:grid-cols-2 gap-5">
        {
            data.map(item=><SingleProduct key={item._id} item={item}></SingleProduct>)
        }
    </div>
    </div>
  );
};

export default ProductPage;
