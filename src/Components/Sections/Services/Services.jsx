import Service from "../Service/Service";

const Services = ({ data }) => {
    return (
        <div>
            <div className="text-center my-5">
                 
            <p className="italic text-xl pb-2 text text-sky-500">Medical & General Care!</p>
            <h1 className="text-4xl pb-2 text-blue-600 font-bold">Our Services</h1>
            <p className="text-blue-800 text-lg">Proactively revolutionize granular customer service after pandemic internal or "organic" sources istinctively impact proactive human</p>
            </div>

            <div className="grid lg:grid-cols-3">
                {
                    data?.map(adata => <Service key={adata.id} data={adata}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;