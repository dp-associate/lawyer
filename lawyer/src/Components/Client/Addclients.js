
import React from 'react'
import "./Addclient.css";
import { FaUserAlt} from 'react-icons/fa';

import { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const Addclients = () => {
 const User = localStorage.getItem("token");
 console.log(User.data);
    const [data, setData] = useState({
  	name: "",
    mobileno:"",
  	email: "",
    gender:"",
    address:"",
    fathername:"",
  	lawyer:User
  
 });

 const [error ,setError] = useState("");
 const navigate = useNavigate();

 const handleChange = ({ currentTarget: input }) => {
  setData({ ...data, [input.name]: input.value });
 };

 const handleSubmit = async (e) => {
	window.location.reload();
    // alert(`${data.name} Registered Successfully !!!!`)
  e.preventDefault();
  try {
   const url = "http://localhost:8080/api/users/add";
  const { data: res } = await axios.post(url, data);
   navigate("");
   console.log(res.data);
           
  } catch (error) {
   if (
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500
   ) {
    setError(error.response.data.message);//
   }
  }
       
 };

     return ( 
      <div className='add'>
      <form onSubmit={handleSubmit}>
          <br/>
          <div className='header'><FaUserAlt style={{color: 'red', fontSize: '50px',marginRight:'40px'}}/>
          Client registartion</div>
      <div class="card">
          <div class="add-page">
              
          <br/>
            
          

          <div class="row1">        
           <div class="caname">
                 <label for="fname">Client Name: </label><br/>
             <input type="text"  name="name" class="client-box" onChange={handleChange} value={data.name} required placeholder='Client Name'/><br/>
             </div>
            
             <div class="client-gender">
             <label for="cgender" >Client Gender:</label><br/>
               
             <select className="text-box1" name="gender" onChange={handleChange}  value={data.gender} required>
                <option >Select an Option</option>
                <option >Male</option>
                <option >Female</option>
             
                </select><br />
               
             </div>
             </div> 
             <div class="row2">
                 <div class="faname">
            <label for="fname">Father Name </label><br/><br/>
             <input type="text"  name="fathername" onChange={handleChange} value={data.fathername} required class="text-box1" placeholder="Father's Name"/><br/>
             </div>
             <div class="mobile">
                 <label for="fname">Mobile No: </label> <br/><br/>
             <input type="text"  name="mobileno" onChange={handleChange} value={data.mobileno} required class="text-box2"placeholder="Mobile no"/><br/>
             </div>
             <div class="client-email">
                <label for="fname">Email: </label><br/><br/>
             <input type="email"  name="email" onChange={handleChange} value={data.email} required class="emailbox"placeholder="Email"/><br/>
              </div>
              </div>
  
                <label for="fname">Address: </label><br/><br/>
            <textarea name="address" rows="5" placeholder="Your Message" onChange={handleChange} value={data.address} required></textarea><br/><br/><br/>
            
            {error && <div>{error}</div>}
             <button type="submit" class="btn2">Add</button>
             <button class="btn1">Cancel</button>
           
             
            
             
             
             
          </div>
      </div>
          
      </form>
      </div>
      
  


          
             )};


export default Addclients 
                       
                       
                       
                      
                        
                     
                       

                      
                       

                      
                       
                       
                       
                      
                        
                  
                          

 

  


