

const ContactUs = () => {
    return (
        <div className="w-full h-auto mt-10 bg-slate-50">
            <h2 className="text-3xl px-4 text-blue-900 font-bold">Contact Us For any Inquiry</h2>
            <p className="text-lg py-3 px-4 text-sky-600 font-normal">We are here to support your health and well-being every step of the way. Whether you have questions about a specific medical condition, need advice on maintaining a healthy lifestyle, or seek guidance on healthcare options, our team is dedicated to providing you with accurate and compassionate information.</p>
            <form className=" grid grid-cols-2 gap-6 mx-10">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full name</span>
                    </label>
                    <input type="text" className="input input-bordered rounded-2xl" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered rounded-2xl" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="text" placeholder="Phone" className="input input-bordered rounded-2xl" />
                </div>

            </form>
            <div className="form-control mx-10 my-5">
                <label className="label">
                    <span className="label-text">Your Message</span>
                </label>

                <textarea className="textarea w-2/3 h-32 textarea-bordered" placeholder="message..."></textarea>
                <div>
                <button className="btn mt-4 bg-blue-600 text-white">Send Message</button>
            </div>
            </div>
           
        </div>
    );
};

export default ContactUs;