const Header = () => {
  return (
    <div className="relative">
      <div className="carousel w-full ">
        <div id="item1" className="carousel-item w-full h-[500px] relative">
          <img
            src="https://i.ibb.co/g6vLryz/p-6.jpg"
            className="w-full object-cover"
          />
        </div>
        <div id="item2" className="carousel-item w-full h-[500px]">
          <img
            src="https://i.ibb.co/JyCBng7/p-5.jpg"
            className="w-full object-cover"
          />
        </div>
        <div id="item3" className="carousel-item w-full h-[500px]">
          <img
            src="https://i.ibb.co/80XZKgn/image-3.jpg"
            className="w-full object-cover"
          />
        </div>
        <div id="item4" className="carousel-item w-full h-[500px]">
          <img
            src="https://i.ibb.co/SJWzjmz/h3.png"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="w-full bg-slate-800 absolute top-0 left-0 h-[500px] opacity-80"></div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Header;
