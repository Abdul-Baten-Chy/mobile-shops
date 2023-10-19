const NewArrival = () => {
  return (
    <div>
      <h1 className="text-4xl mb-10 font-bold">New Arrival</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card  w-[263px] h-[300px] bg-base-100 shadow-xl flex flex-col justify-between ">
          <figure>
            <img
              src="https://i.ibb.co/2YHXCcq/new-1.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">Walton!</h2>
            <p>Powerful Sound In A Compact Package Portable Bluetooth</p>
          </div>
        </div>
        <div className="card  w-[263px] h-[300px] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/51BJRks/new-2.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">Iphone!</h2>
            <p>Powerful Sound In A Compact Package Portable Bluetooth</p>
          </div>
        </div>
        <div className="card  w-[263px] h-[300px] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/KjNfwnV/new-3.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">Samsung!</h2>
            <p>Powerful Sound In A Compact Package Portable Bluetooth</p>
          </div>
        </div>
        <div className="card  w-[263px] h-[300px] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/VHxQv8W/new-4.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">Oppo</h2>
            <p>Powerful Sound In A Compact Package Portable Bluetooth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;



