// import { useLoaderData, useParams } from "react-router-dom";

// const ServiceDetails = () => {
//     const data = useLoaderData()

//     const {id} = useParams();
//     console.log(data)
//     return (
//         <div>
//             <h2>details{id} </h2>
            

//         </div>
//     );
// };

// export default ServiceDetails;
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)

    const matchingCard = data.find(card => card.id === idInt);
    console.log(matchingCard)
    

   

    return (
        <div>
        <div className="card glass my-6">
<figure><img className="w-3/4 h-96 mt-2 rounded" src={matchingCard.image}alt="car!"/></figure>
<div className="card-body">
<h2 className="card-title text-blue-800">{matchingCard.name}</h2>
<div className="text-blue-500">
<p>{matchingCard.description}</p>
</div>
</div>
</div>
    </div>
    );
};

export default ServiceDetails;
