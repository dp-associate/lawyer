import React from "react";
import "./dashboard.css";
import Sidebar from '../../Mainpage/Sidebar';
import Dashboard from "../../Components/Dashboard/dashboard";

const Dashboard1=()=>

{  
    return (
          
    <div className="content">
        <div className="side">    < Sidebar/></div>
        <div className="dash"> <Dashboard/></div>

</div>    

     
    );
};


export default Dashboard1;