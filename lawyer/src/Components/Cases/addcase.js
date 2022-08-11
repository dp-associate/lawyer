
import "./addcases.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Addcases = () => {
  const User = localStorage.getItem("token");
  const [clientList, setClientList] = useState([])


  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/read/${User}`).then((response) => {
      setClientList(response.data);
      console.log(response.data);
    });
  }, []);




  const [data, setData] = useState({
    ClientName: "",
    rname: "",
    firnumber: "",
    porr: "",
    cnumber: "",
    courtname: "",
    fdate: "",
    hdate: "",
    comment: "",
    lawyer: User

  });
  const [error, setError] = useState("");


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    window.location.reload();
    // alert(`${data.ClientName} Registered Successfully !!!!`)
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users/addcase";
      const { data: res } = await axios.post(url, data);
      Navigate('/mycase');
      console.log(res.data);

    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }

  };

 

  return (
    <form onSubmit={handleSubmit}>
      <div className='cdash' >
        <div className='cwrapper'>
          <div className='ccenter'>
            <div className='ccenter1'>

              <label>Client Name :</label>
              <select className="case" name="ClientName" onChange={handleChange}  value={data.ClientName} required>
                <option >Select an Option</option>
                {clientList.map((val) => {
                  return (
                    <>

                      <option >{val.name}</option>

                    </>
                  );
                })}

              </select><br />

              <label>Respondent name  :</label>

              <select className="case" name="rname" onChange={handleChange}  value={data.rname} required>
                <option >Select an Option</option>
                <option >Yes</option>
                <option >No</option>
             
                </select><br />

              {/* <input type="text" className='case' placeholder="Respondent nmae" name="rname" onChange={handleChange} value={data.rname} required /><br /> */}
              <labe>FIR Number</labe>
              <input type="text" className='case' placeholder='FIR Number' name="firnumber" onChange={handleChange} value={data.firnumber} required /><br />

              <div className='cradiobutton'>
                <input type="radio" className='cradio' name="porr" value="petitioner" onChange={handleChange} required />
                <label for="html">Petitioner</label><br />
                <input type="radio" className='cradio' name="porr" value="respondent" onChange={handleChange} required />
                <label for="css">Respondent</label><br /></div>


              <label>Case number:</label>
              <input type="text" className='case' placeholder="Case number" name="cnumber" onChange={handleChange} value={data.cnumber} required /><br />


            </div></div>
          <div className='cright'>
            <div className='cright1'>
              <label>Court Name</label>
              <input type="text" className='case' placeholder="Court name" name="courtname" onChange={handleChange} value={data.courtname} required /><br />

              <label>Filing Date</label>
              <input type="date" className='case' name='fdate' onChange={handleChange} value={data.fdate} required /><br />


              <label>Hearing Date</label>
              <input type="date" className='case' name="hdate" onChange={handleChange} value={data.hdate} required /><br />




              <label>Comment on Cases:</label>
              <br></br>
              <textarea rows="4" cols="50" className='case' name="comment" placeholder='Comment on cases ' onChange={handleChange} value={data.comment} required />
              <br />


              {error && <div>{error}</div>}
              <button type="submit" className='ccbutton' >Add Client</button>


              <button className='cbutton1'>Reset</button>

              <br />
            </div>
          </div>
        </div>
      </div>

    </form>

  );
};


export default Addcases;