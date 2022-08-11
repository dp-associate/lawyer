import React from "react";
import './home.css';
import image from "../../img/court.jpg"; 



const Homepage=()=>
{
const User = localStorage.getItem("name");

    return (
       
            
    <div className="App" style={{ backgroundImage:`url(${image})`,backgroundRepeat: 'no-repeat',width:'188.5vh', height:'106vh',backgroundSize:'cover' }}>
        <h1>Welcome {User}</h1>
     
                

</div>    

     
    );
};


export default Homepage;