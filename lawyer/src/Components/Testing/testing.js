import React from "react";
import "./testing.css";

const Testing=()=>

{  
    return (
       
            
    <div >

<div class="container">
    <div class="row">
        <div class="col-md-offset-1 col-md-10">
            <div class="panel">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-sm-12 col-xs-12">
                            <a href="#" class="btn btn-sm btn-primary pull-left"><i class="fa fa-plus-circle"></i> Add New</a>
                            <form class="form-horizontal pull-right">
                                <div class="form-group">
                                    <label>Show : </label>
                                    <select class="form-control">
                                        <option>5</option>
                                        <option>10</option>
                                        <option>15</option>
                                        <option>20</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="panel-body table-responsive">
                <table class="table">

<thead>
    <tr>
        <th class="text-center">#</th>
        <th>Name</th>
        <th>Job Position</th>
        <th>Since</th>
        <th class="text-right">Salary</th>
        <th class="text-right">Actions</th>
    </tr>
</thead>

<tbody>
    <tr>
        <td class="text-center">1</td>
        <td>Andrew Mike</td>
        <td>Develop</td>
        <td>2013</td>
        <td class="text-right">€ 99,225</td>
        <td class="td-actions text-right">
            
            <button type="button" rel="tooltip" class="btn btn-success btn-just-icon btn-sm" data-original-title="" title="">
                <i class="material-icons">edit</i>
            </button>
            <button type="button" rel="tooltip" class="btn btn-danger btn-just-icon btn-sm" data-original-title="" title="">
                <i class="material-icons">close</i>
            </button>
        </td>
    </tr>
    

   
    
</tbody>
</table>
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-sm-6 col-xs-6">showing <b>5</b> out of <b>25</b> entries</div>
                        <div class="col-sm-6 col-xs-6">
                            <ul class="pagination hidden-xs pull-right">
                                <li><a href="#">«</a></li>
                                <li class="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">»</a></li>
                            </ul>
                            <ul class="pagination visible-xs pull-right">
                                <li><a href="#">«</a></li>
                                <li><a href="#">»</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




















         {/* <div class="container">

    	<div class="title">
    		<h3>Tables</h3>
    	</div>

    	<div class="row">

            <div class="col-md-12">
                <h4>Simple Table</h4>
            </div>

            <div class="col-lg-8 col-md-10 ml-auto mr-auto">
            <h4><small>Simple With Actions</small></h4>
                <div class="table-responsive">
               
                </div>
    
               </div>
            </div>
            
             
         
        </div> */}
    </div>
    
    

   

     
    );
};


export default Testing;