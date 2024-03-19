/*


*/



import React, { useState } from 'react';



const Demo1 = ({title,notes,item}) => {
    const [isActive,setIsActive] = useState(false)

    const cities={
                101:["London","Leads","Manchester"],
                102:["NewYork","Wasingtion","LA"],
                103:["Berlin","Hamburg","Munich","Bonn","Frankfurt"]
                }
    
    return (
    <>
        <div  onClick={()=>setIsActive(!isActive)}>
            
                <div> 
                     {title} {isActive ? "-":"+"} 
                </div>
                
                { isActive &&  <div className="Mydiv">
                                                     {notes} 
                                                     <br/>
                                                    <br/>Cities:
                                                    {
                                                    cities[item.countrycode].map((city,index)=>(
                                                        <li key={index}> {city}</li>
                                                        ))
                                                    }
                                                    
                                                    
                                                    </div> }
        </div>
    </>
  );
}

export default Demo1;
