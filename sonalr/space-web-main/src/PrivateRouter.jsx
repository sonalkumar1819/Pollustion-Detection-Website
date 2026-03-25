import {Navigate,Outlet} from 'react-router-dom';

function PrivateRouter(){
    let auth=localStorage.getItem('token');
    // return auth?<Outlet/>:<Navigate to="/login"/>;
    return(
        <div>
        <Outlet />
         </div>
    )
}
export default PrivateRouter;