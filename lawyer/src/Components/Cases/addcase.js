
import "./addcases.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Addcases = () => {

  // function refreshPage() {
  //   window.location.reload(false);
  // }
  const User = localStorage.getItem("token");
  const [foodList, setFoodList] = useState([])


  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/read/${User}`).then((response) => {
      setFoodList(response.data);
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
    //alert(`${data.ClientName} Registered Successfully !!!!`)
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users/addcase";
      const { data: res } = await axios.post(url, data);
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
            <div className='header'>
          Client registartion</div>
             <div class="card">
             
              <div class="cli">
              <label>Client Name :</label>
              <br />
              <select className="case" name="ClientName" onChange={handleChange} value={data.ClientName} required>
                <option >Select an Option</option>
                {foodList.map((val) => {
                  return (
                    <>

                      <option>{val.name}</option>

                    </>
                  );
                })}

              </select>
              </div>
              <br/>
              <div class="flex">
                <div class="resp">
              <label>Respondent name  :</label>
              <br/>
             <input type="text" className='case' placeholder="Respondent name" name="rname" onChange={handleChange} value={data.rname} required /><br />
              </div>
              <div class="rad">
              <div className='cradiobutton'>
                <input type="radio" className='cradio' name="porr" value="petitioner" onChange={handleChange} required />
                <label for="html">Petitioner</label><br />   <pre/>
                <input type="radio" className='cradio' name="porr" value="respondent" onChange={handleChange} required />
                <label for="css">Respondent</label><br /></div>
              </div>
              </div>
              <div class="flex1">
              <div class="fir">
              <label>FIR Number :</label>
              <br/>
              <input type="text" className='case' placeholder='FIR Number' name="firnumber" onChange={handleChange} value={data.firnumber} required /><br />
              </div>
              
             <div class="case-num">
              <label>Case number:</label>
              <br/>
              <input type="text" className='case' placeholder="Case number" name="cnumber" onChange={handleChange} value={data.cnumber} required /><br />
              </div>
              </div>

            
          <div className='cright'>
            <div className='cright1'>
              <div class="flex2">
                <div class="court">
              <label>Court Name</label>
              <br/>
              <input type="text" className='case' placeholder="Court name" name="courtname" onChange={handleChange} value={data.courtname} required /><br />
              </div>
              <div class="fil">
              <label>Filing Date</label>
              <br/>
              <input type="date" className='case' name='fdate' onChange={handleChange} value={data.fdate} required /><br />
              </div>
              <div class="hearing">
              <label>Hearing Date</label>
              <br/>
              <input type="date" className='case' name="hdate" onChange={handleChange} value={data.hdate} required /><br />
              </div>
              </div>


              <div class="comment">
              <label>Comment on Cases:</label>
              <br></br>
              <textarea  className='case' name="comment" placeholder='Comment on cases ' onChange={handleChange} value={data.comment} required />
              <br />
              </div>


              {error && <div>{error}</div>}
              <button type="submit" className='ccbutton'>Add Client</button>


              <button className='cbutton1'>Reset</button>

              <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>

    </form>

  );
};


export default Addcases;