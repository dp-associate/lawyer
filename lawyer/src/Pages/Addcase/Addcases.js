import React from 'react'
import "./Addcases.css";




const Addcases = () => {
  
        function refreshPage() {
          window.location.reload(false);
        }
       
        
return (
            
              <div className='cdash' >
             
                
                        <div className='cwrapper'>
                        
                              <div className='cleft'>
                                    <h1>Left</h1> </div>
                                    <div className='ccenter'>
                                     <div className='ccenter1'>
                <h1>Add Cases</h1>
                   <label>Client Name :</label> 
                   
                    <select className='case'>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    <option value="name">Name 1</option>
                    <option value="name">Name 2</option>
                    <option value="name">Name 3</option>
                    <option value="name">Name 4</option>
                    </select><br/>
                    
                   
                    <label>Respondent name  :</label> 
                    <input type="text" className='case'placeholder="Respondent nmae" name="rname" /><br/>
                    <labe>FIR Number</labe>
                    <input type="text"className='case' placeholder='FIR Number' name="firnumber"/><br/>
                     
                    <div className='cradiobutton'>
                    <input type="radio" className='cradio' id="html" name="fav_language" value="HTML"/>
                    <label for="html">Petitioner</label><br/>
                    <input type="radio" id="css" className='cradio'name="fav_language" value="CSS"/>
                    <label for="css">Respondent</label><br/></div>

    
                        
                    

                   
                    <label>Case number:</label> 
                    <input type="text" className='case' placeholder="Case number"name="cnumber" /><br/>
      
                    <label> Case type:</label> 
                    <input   type="text"  className='case' placeholder="Case Type" name="ctype" /><br/>

                    </div></div> 
                    <div className='cright'>
                                                <div className='cright1'>
                    <label>Court Name</label>
                    <input type="text" className='case'  placeholder="Court name" name="courtname"/><br/>

                    <label>Filing Date</label>
                    <input type="date" className='case' name='fdate'/><br/>


                    <label>Hearing Date</label>
                    <input type="date"className='case' name="hdate"/><br/>




                    <label>Comment on Cases:</label>
                    <br></br>
                    <textarea rows="4" cols="50" className='case' name="comment" placeholder='Comment on cases '/>
                    <br/>

                    <label>File Upload</label>
                    <div className='cbutton'>
                    <input type="file" className='case' name="filename"/><br/></div>
                    <button type="submit" className='ccbutton'>Add Client
    </button>

                    <button onClick={refreshPage}className='cbutton1'>Reset</button>
                        
                        <br/>
                    </div>
                    </div> 
                    </div> 
                    </div> 
                    
                    
                    
                )};


export default Addcases