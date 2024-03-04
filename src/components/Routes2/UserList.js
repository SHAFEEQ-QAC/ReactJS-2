
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
const userData={

    users:[
        {id:1,name:"Shafeeq",salary:2000,address:"London"},
        {id:2,name:"Andy",salary:1200,address:"Manchester"},
        {id:3,name:"Laura",salary:17000,address:"Leads"},
        {id:4,name:"Tadas",salary:6789,address:"Wales"},
        {id:5,name:"Irina",salary:9499,address:"Scotland"},
        
    ]

}

const UserList=()=>{


    return (
      <div className="App">
      <h3> User List</h3>
      <ul>
        {userData.users.map((user)=>(
           
           <li key={user.id}> 
            
                <Link to={`/userinfo/${user.id}`}> {user.name} </Link> 
            
            </li>
        ))}

      </ul>
      </div>
    );
  }
  
  export default UserList 

