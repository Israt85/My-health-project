import { useLoaderData } from "react-router-dom";
import Banner from "../../Sections/Banner/Banner";
import Services from "../../Sections/Services/Services";

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Services data={data} ></Services>
        </div>
    );
};

export default Home;