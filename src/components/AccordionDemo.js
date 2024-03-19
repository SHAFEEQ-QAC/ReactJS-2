/*


*/



import React, { useState } from 'react';
import Demo1 from './AccordionDemo/Demo1'; 


const AccordionDemo = () => {
    const data=[
        {
            country:"United Kingdom",
            countrycode:101,
            details:"The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe. England – birthplace of Shakespeare and The Beatles – is home to the capital, London, a globally influential centre of finance and culture. England is also site of Neolithic Stonehenge, Bath’s Roman spa and centuries-old universities at Oxford and Cambridge.",
        },{
            country:"United States",
            countrycode:102,
            details:"WasThe U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmakingington DC"
        },{
            country:"Germany",
            countrycode:103,
            details:"germany, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history."
        }
    ]

    return(
        <>
        {
            data.map((item,index)=>
                <div key={index}>    
        
                    <Demo1 title={item.country} notes={item.details} item={item}/>
                </div>
        )}
        </>

    )

}

export default AccordionDemo;
