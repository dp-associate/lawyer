import React from "react";
import "./App.css";
import {Routes,Route} from "react-router-dom";
import Firstpage from "./Loginpage/Firstpage";
import SignupForm from "./Loginpage/SignupForm";

import Login from "./Loginpage/Login";
import Sidebar from './Mainpage/Sidebar';
import Dashboard1 from "./Pages/Dashboard/dashboadrd";
import Homepage1 from "./Pages/Homepage/homepage";
import Addclient1 from "./Pages/Addclients/Addclients";
import Appointment1 from "./Pages/Appointment/appoin";
import Appoin1 from "./Components/Appointment/appoint";
import Add from "./Components/Appointment/addappointment";









import Mycase from "./Pages/Mycases/mycase";
import Appointment2 from "./Pages/Appointment/appoin1";
import Setting1 from "./Pages/Settings/setting1";
import Testing from "./Components/Testing/testing";
import Addcase from "./Pages/Mycases/addcase";





const App=()=>{
    
    return ( 
    <Routes>

<Route path="/" exact element={<Firstpage />} />
<Route path="/homepage" exact element={<Homepage1/>}/>
<Route path="/signup" exact element={<SignupForm/>}/>
<Route path="/login" exact element={<Login/>}/>
<Route path="/mainpage" exact element={<Sidebar/>}/>
<Route path="/addclient" exact element={<Addclient1/>}/>
<Route path="/dashboard" exact element={<Dashboard1/>}/>
<Route path="/addappointment" exact element={<Add/>}/>

<Route path="/appointment" exact element={<Appointment1/>}/>
<Route path="/appointment2" exact element={<Appointment2/>}/>
<Route path="/app" exact element={<Appoin1/>}/>
<Route path="/addcase" exact element={<Addcase/>}/>
<Route path="/mycase" exact element={<Mycase/>}/>
<Route path="/setting" exact element={<Setting1/>}/>
<Route path="/testing" exact element={<Testing/>}/>




    </Routes>
    )
};



export default App;