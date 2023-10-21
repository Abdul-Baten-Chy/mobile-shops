const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
       <div>
        <h3 className="bg-[#42FF1F] text-center w-[150px] h-[28px] font-bold text-[#333333]">Mobile Phone</h3>
        <h2 className="text-5xl text-[#333333] font-bold my-10">New Device <br /> Collection 2023</h2>
        <p className="font-medium">
          fashion is a popular style or practice, especially in clothing,
          footwear, accessories, makeup, body, or furniture.
        </p>
        <button className="bg-[#000000] text-white hover:text-[#000000] hover:bg-[#42FF1F] w-[150px] h-[40px] my-10 font-bold">SHOP NOW</button>
      </div>
      <div className="relative">
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item w-full h-[500px] relative">
            <img
              src="https://i.ibb.co/tLyKF7m/HM7-Feature4.webp"
              className="w-full object-cover"
            />
          </div>
          <div id="item2" className="carousel-item w-full h-[500px]">
            <img
              src="https://i.ibb.co/cLHKfMC/HM7-Feature1.webp"
              className="w-full object-cover"
            />
          </div>
          <div id="item3" className="carousel-item w-full h-[500px]">
            <img
              src="https://i.ibb.co/hc8ztjG/primo-r10-feature-7.webp"
              className="w-full object-cover"
            />
          </div>
          <div id="item4" className="carousel-item w-full h-[500px]">
            <img
              src="https://i.ibb.co/RHmQ6b6/feature-phone.jpg"
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full bg-[#333333] absolute top-0 left-0 h-[500px] opacity-50"></div>
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
    </div>
  );
};

export default Header;
