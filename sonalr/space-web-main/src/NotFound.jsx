import {react} from "react";
import { Link } from "react-router-dom";
function NotFound(){
    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
            <h1 style={{fontSize:'48px', color:'red'}}>404 Error</h1><br></br>
            <h1 style={{fontSize:'48px', color:'orange'}}>Page Not Found</h1>
            <br>
            </br>
            <button>
                <Link to="/">Go to Home Page</Link>
            </button>
        </div>
    )
}
export default NotFound;