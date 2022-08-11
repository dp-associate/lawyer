import React from "react";
import "./homepage.css";
import Sidebar from '../../Mainpage/Sidebar';
import Homepage from "../../Components/Home/home";

const Homepage1=()=>

{  
    return (
          
    <div className="content">
        <div className="side">    < Sidebar/></div>
        <div className="dash"> <Homepage/></div>

</div>    

     
    );
};


export default Homepage1;