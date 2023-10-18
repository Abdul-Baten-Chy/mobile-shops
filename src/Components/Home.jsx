import Header from "./Header";
import NewArrival from "./NewArrival";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex gap-7 mt-14 justify-center">
            <NewArrival></NewArrival>
            <NewArrival></NewArrival>
            <NewArrival></NewArrival>
            <NewArrival></NewArrival>
            </div>
        </div>
    );
};

export default Home;