import { useLoaderData } from "react-router-dom";
import Banner from "../../Sections/Banner/Banner";
import Services from "../../Sections/Services/Services";
import ExtraCare from "../../Sections/ExtraCare/ExtraCare";

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Services data={data} ></Services>
            <ExtraCare></ExtraCare>
        </div>
    );
};

export default Home;