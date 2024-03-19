import {Outlet,Link} from "react-router-dom"
const Layout1=()=>{

    return(
        <div style={{padding: "10px"}}>
            <div style={{
                width:"100%",
                padding: "1rem",
                border: "1px solid #accc",
            }}> 
            
            
                <ul>
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/shafeeq"> Shafeeq </Link></li>
                <li> <Link to="/john"> John </Link></li>
                <li> <Link to="/profile"> Profiles </Link></li>
                
                
                    
                </ul>
             </div>

            <div style={{
                width:"100%",
                height: "80vh",
                border:"1px solid #ccc",
                padding:"20px",
                pading: "10px"
               
            }}>
                <h1> Trainer's Information</h1>
                <Outlet/>
            </div>
        

            
        </div>
    )
}

export default Layout1;