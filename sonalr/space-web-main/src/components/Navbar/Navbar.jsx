import React from "react";
import Logo from "../../assets/cs.png";
import { Routes } from "react-router-dom";
import Login from "../../Login";
import { Route } from "react-router-dom";
import {Link} from 'react-router-dom';
const Navbar = () => {
  let auth=localStorage.getItem('token');
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              {/* <img src={Logo} alt="" className="w-12" /> */}
              <span>PolluSat</span>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
             <h1 style={{size: "40px"}}>"Welcome to Satellite World"</h1>
              </ul>
            </div>
            <div>
              {/* <button className=" text-white border-2 border-white px-3 py-1 rounded-md">
                Login
              </button> */}
              {/* <Routes>
                <Route path="/login" element={<h1>This is </h1>} />
              </Routes> */}
{auth?<> <button style={{color:'white'}}>
            <Link to="/logout">Logout</Link>
            </button></>:<>  <button style={{color:'white', marginRight:'20px'}}>
            <Link to="/login">Login</Link>
            </button></>}
      
            
            
            
            
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
