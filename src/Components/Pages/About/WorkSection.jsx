import { BiPhoneCall } from "react-icons/bi";
import { TbCheckupList } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
const WorkSection = () => {
    return (
        <div className="h-auto mt-6 bg-sky-700 w-full">
            <div className="text-center pt-6">
            <h1 className="text-5xl italic font-semibold text-white">Our Work Process</h1>
            <p className="text-lg font-semibold text-base-300 py-3">Improve customer service by being more proactive in utilizing internal resources and human capital, rather than relying solely on external or organic sources.</p>
            </div>
            <div className="grid h-auto grid-cols-1 lg:grid-cols-3 px-10 py-5 border-b text-base-200">
                <div className="w-60 text-center p-2">
                    <div className="text-6xl px-14 "><BiPhoneCall></BiPhoneCall></div>
                <h2 className="text-2xl font-semibold text-blue-950 py-4">Take Appointment</h2>
                <p>Book your appointment now! Our user-friendly scheduling system makes it easy to reserve a convenient time for your visit.</p>
                </div>
                <div className="w-60 p-2">
                    <div className="text-6xl px-14 "><TbCheckupList></TbCheckupList></div>
                    <h2 className="text-2xl font-semibold text-blue-950 py-4">Medical Checkup</h2>
                    <p>Schedule your medical checkup effortlessly!Pick your desired date and time, and confirm your medical checkup with ease. Avoid long waiting times and simplify your healthcare management.</p>
                </div>
                <div className="w-60 p-2">
                    <div className="text-6xl px-10 "><FaUserDoctor></FaUserDoctor></div>
                    <h2 className="text-2xl font-semibold text-blue-950 py-4">Start treatment</h2>
                    <p>Begin your treatment journey with ease!Say goodbye to delays and streamline your path to wellness. Start your treatment with confidence for a smooth and efficient healthcare experience.</p>
                </div>
            </div>
            
        </div>
    );
};

export default WorkSection;