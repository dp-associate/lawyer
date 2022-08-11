import React from "react";
import "./Addclient.css";
import Sidebar from '../../Mainpage/Sidebar';

import Addclients from "../../Components/Client/Addclients";

const Addclient1=()=>

{  
    return (
          
    <div className="content">
        <div className="side">    < Sidebar/></div>
        <div className="dash"> <Addclients/></div>

</div>    

     
    );
};


export default Addclient1;