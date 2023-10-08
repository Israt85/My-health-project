import Footer from "../../Sections/Footer/Footer";
import ContactUs from "./ContactUs";
import GoogleMap from "./GoogleMap";
import MoreInfo from "./MoreInfo";

const Contact = () => {
    return (
        <div>
         <GoogleMap></GoogleMap>
         <ContactUs></ContactUs>
         <MoreInfo></MoreInfo>
         <Footer></Footer>
        </div>
    );
};

export default Contact;