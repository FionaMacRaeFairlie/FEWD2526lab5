import useFetchData from "./useFetchData";

const ShowData = () => {
  const {status, foods} = useFetchData();
    let availableItems = foods.filter(food=> food.available === "yes");

  if (status==='fetched')
  return (
    // <div>
    //      <ul>
    //        {foods.map((food) => {
    //            return (
    //             <li key={food.id} > {food.name }</li>
    //            )
    //        })}
    //    </ul>
    // </div>


    
<div className="container py-4">
            <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
                {availableItems.map((details) => (
                    <div className="card" key={details.id} >
                        <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                            <img src={details.url} className="card-img-top img-cover" alt="food" />
                        </div>
                        <div className="card-body">
                            <p>{details.name}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
  );
  return<p>There is currently an issue displaying the food menu</p>
};

export default ShowData;



