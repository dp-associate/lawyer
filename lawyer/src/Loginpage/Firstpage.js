import React from "react";
import {Link} from "react-router-dom";
import './loginpage.css';

const Firstpage=()=>

{
    return (
        <div className="main1">
        <div class="main">
            <div className="app1-wrapper">
            
              <div className="btn">
                <Link to="/signup" style={{textDecoration:"none"}}>
                    <button  >Sign Up</button>
                    </Link>
                </div>
                
             
           <div className="btn">
                    <Link to="/login" style={{textDecoration:"none"}}>
                   <button >Login </button>
                     </Link>
            </div>   
                </div>
       </div>
       </div>
    );
    };


export default Firstpage;