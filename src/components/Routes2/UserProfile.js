
import { BrowserRouter,Routes,Route,Link,useParams} from "react-router-dom"


const userData={

    users:[
        {id:1,name:"Shafeeq",salary:2000,address:"London"},
        {id:2,name:"Andy",salary:1200,address:"Manchester"},
        {id:3,name:"Laura",salary:17000,address:"Leads"},
        {id:4,name:"Tadas",salary:6789,address:"Wales"},
        {id:5,name:"Irina",salary:9499,address:"Scotland"},
        
    ]

}

const UserProfile=()=>{

    const {userId} = useParams()
    console.log("USer Id======================>"+userId)
    const userinfo = userData.users.find((user)=> user.id === parseInt(userId))
    console.log(userinfo)

    return (
      <div className="App">

      {
       
        userinfo ? (  
                <div>
                    <h2> User Profile </h2>
                    <h3> Name:{userinfo.name }</h3>
                    <h3> Salary:{userinfo.salary }</h3>
                    <h3> Addess:{userinfo.address }</h3>
                </div>
                )
                
        :     (
                <h2> Profile Not Found</h2>
        )     
      }

     </div>
    )
}
  export default UserProfile 

