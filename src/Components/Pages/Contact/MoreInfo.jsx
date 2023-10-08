import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidMap } from "react-icons/bi";

const MoreInfo = () => {
    return (
        <div>
            <div className="w-3/4 mx-auto py-2 h-40 rounded-xl  bg-sky-100 hover:border-blue-800 border-2 text-center">
                <div className="flex flex-col items-center">
                <h2 className="text-7xl text-blue-800"><BiPhoneCall></BiPhoneCall></h2>
              <div className="text-blue-800 font-lg">
              <h2>Contact us: +3215644</h2>
                <h2>Contact us: +3594456</h2>
              </div>

                </div>
            </div>
            <div className="w-3/4 mx-auto py-2 my-6 h-40 rounded-xl  bg-sky-100 hover:border-blue-800 border-2 text-center">
                <div className="flex flex-col items-center">
                <h2 className="text-7xl text-blue-800"><AiOutlineMail></AiOutlineMail></h2>
              <div className="text-blue-800 font-lg">
              <h2>Support: mymedicosupport.com</h2>
                <h2>Mail: infomymedico.com</h2>
              </div>

                </div>
            </div>
            <div className="w-3/4 mx-auto py-2 h-40 rounded-xl  bg-sky-100 hover:border-blue-800 border-2 text-center">
                <div className="flex flex-col items-center">
                <h2 className="text-7xl text-blue-800"><BiSolidMap></BiSolidMap></h2>
              <div className="text-blue-800 font-lg">
              <h2>Address: 441 4th Street, NW - Washington, DC</h2>
                
              </div>

                </div>
            </div>
        </div>
    );
};

export default MoreInfo;