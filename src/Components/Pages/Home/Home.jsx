import { useLoaderData } from "react-router-dom";
import Banner from "../../Sections/Banner/Banner";
import Services from "../../Sections/Services/Services";
import ExtraCare from "../../Sections/ExtraCare/ExtraCare";
import Appointment from "../../Sections/Appointment/Appointment";
import Footer from "../../Sections/Footer/Footer";

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <Services data={data} ></Services>
            <ExtraCare></ExtraCare>
            <Appointment></Appointment>
            <Footer></Footer>
        </div>
    );
};

export default Home;