
import React,{useState} from 'react';

const UseState_Search = () => {
    const [searchItem,setSearchTerm]=useState("")
    const [names,setNames] = useState(["shafeeq","tadas","saeed","james"])

console.log(names)
    const filterdata=names.filter((name)=>name.toLowerCase().includes(searchItem))
  return (
    <div>
      <>
      <input placeholder="search" onChange={(e)=>setSearchTerm(e.target.value)}/>
      {
        filterdata?.map((name,index)=><div>
            {index},{name}
        </div>)
      }
      </>
    </div>
  );
}

export default UseState_Search;


