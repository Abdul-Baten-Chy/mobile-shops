
import Brands from "./Brands";
import Header from "./Header";
import NewArrival from "./NewArrival";


const Home = () => {

    return (
        <div>
            <Header></Header>
            <div className="flex gap-7 mt-14 justify-center">
            <NewArrival></NewArrival>
            </div>
            <Brands></Brands>
        </div>
    );
};

export default Home;