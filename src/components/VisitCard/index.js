import React from "react";

function VisitCard ({ visits }) {
    console.log('VISITS:', visits);
    console.log('VISITS TYPE:', typeof visits);

    {visits?.map((item, index) => (
        <div key={index} className="table-item">
            <p>{item?.patient?.firstName}</p>
            <p>{item?.type}</p>
            <p>{item?.diagnosis}</p>
        </div>
    ))}
}

export default VisitCard