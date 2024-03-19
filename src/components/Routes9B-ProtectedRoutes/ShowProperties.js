
import React from 'react';
import { useLoaderData } from 'react-router-dom' 

function ShowProperties() {

        const properties= useLoaderData()

 

  return (
    <div>
            <h2> Properties List</h2>
          {
            properties.map( (property)=>
            <>
            <b> {property.address}</b> 
            <br/>
            </>
            )
        }
    </div>
  );
}

export default ShowProperties;

