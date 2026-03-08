import {react} from "react";
import { Link } from "react-router-dom";
function NotFound(){
    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
            <h1 style={{fontSize:'48px', color:'red'}}>404 Error</h1><br></br>
            <h1 style={{fontSize:'48px', color:'orange'}}>Page Not Found</h1>
            <h1 style={{fontSize:'48px', color:'yellow'}}>😢</h1>
            <h1 style={{fontSize:'48px', color:'green'}}>But don't worry, you can find your way back home!</h1>
            <br></br>
            <br>
            </br>
            <button>
                <Link to="/" style={{textDecoration:'none', color:'white'}}>Home</Link>

            </button>
        </div>
    )
}
export default NotFound;