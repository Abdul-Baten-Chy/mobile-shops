
import swal from "sweetalert";


const All = ({cart, myCart, setMyCart}) => {
    const { name, brandName, types, rating, price, image, _id } = cart;
    const handleDelete=(_id)=>{
      console.log(_id);
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'}).then((result) => {
        if (result.isConfirmed) {


            fetch(`https://backend-qwywwjwvf-abdu-baten-chys-projects.vercel.app/products/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        swal(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                        const remaining = myCart.filter(cart => cart._id !== _id);
                        setMyCart(remaining);
                    }
                })

        }
    })
    }

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
           
              <button className="bg-[#42FF1F] text-center w-[150px] h-[28px] font-bold text-[#333333]" onClick={()=>{handleDelete(_id)}}>Delete</button>
           
          </div>
        </div>
      </div>
    </div>
    );
};

export default All;