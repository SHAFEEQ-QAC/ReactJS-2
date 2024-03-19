import {Outlet,Link} from "react-router-dom"
const Layout1=()=>{

    return(
        <div style={{padding: "10px"}}>
            <div style={{
                width:"100%",
                height:"89vh",
                marginTop:"1rem",
                border: "1px solid 'ccc",
                display:"flex",
                padding:'10px',
                gap:'20px'
                
            }}> 
                <div style={{
                    width:"20%",
                    border:"1px solid #ccc",
                    height: "100%",
                    padding:"20px",
                    textAlign: ' center'
                    }}>

                    <ul style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: 'Column',
                        gap:"20px"
                        }}>
                    
                        <li> <Link to="/profile/account"> Account </Link> </li>
                        <li> <Link to="/profile/settings"> Setting </Link> </li>
                        <li> <Link to="/profile/privacy"> Privacy </Link></li>
                    </ul>
                </div>
                <div style={{
                    width: "80%",
                    border: "1px solid #ccc",
                    heigth: '100%',
                    padding: '20px',
                 }}> 
                 
                    <Outlet/>
                 </div>
        
            </div>
            </div>
        
    )
}

export default Layout1;