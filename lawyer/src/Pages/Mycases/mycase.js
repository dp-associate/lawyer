import React from "react";
import "./mycase.css";
import Sidebar from '../../Mainpage/Sidebar';
import Viewcase from "../../Components/Cases/viewcases";

const Mycase=()=>

{  
    return (
          
    <div className="content">
        <div className="side">    < Sidebar/></div>
        <div className="dash"> <Viewcase/></div>

</div>    

     
    );
};


export default Mycase;