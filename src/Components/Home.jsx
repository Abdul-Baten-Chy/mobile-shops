import Marquee from "react-fast-marquee";
import Brands from "./Brands";
import Header from "./Header";
import NewArrival from "./NewArrival";
import About from "./About";

const Home = () => {
 
    return (
           <div>
             <Header></Header>
            <div className="flex gap-7 mt-14 justify-center">
            <NewArrival></NewArrival>
            </div>
            <Marquee className="border-y-2 py-3 text-[18px]  mt-16" pauseOnHover="true" speed="90">
                <div className="flex gap-2">
                <p className="font-semibold">SUMMER SALE IS GOING ON!</p>
                 <p>GRAB 20% DISCOUNT. NEW PRODUCT IS AVAILABLE.</p>
                 <p className="font-semibold">ORDER YOUR PHONE</p>
                 <p> AND RECEIVE EXCITING GIFT.</p>
                </div>
            </Marquee>
            <Brands></Brands>
            <About></About>
        </div>
    );
};

export default Home;