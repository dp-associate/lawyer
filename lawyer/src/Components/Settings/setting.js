import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import './settings.css'
import paginationFactory from 'react-bootstrap-table2-paginator';  
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'; 
export class Setting extends Component {
    state = {

        employee: [],
        columns: [{
            dataField: 'id',
            text: 'Id',
            formatter: (cell, row, rowIndex, formatExtraData) => {
                return rowIndex + 1;
              },
              sort: true,
        },
        {
            dataField: 'ClientName',
            text: 'Name',
            order: 'asc' ,
           
            // sort: true
        }, {
            dataField: 'firnumber',
            text: 'FIR Number',
            filter: textFilter(),
            sort: true
        },

        {
            dataField: 'hdate',
            text: 'Hearing Date',
            
            sort: true
        },
        {
            // dataField: 'hdate',
            
            text: 'Actions',
            
            sort: true
        },]

    }

    
    componentDidMount() {
        const User = localStorage.getItem("token");
        axios.get(`http://localhost:8080/api/users/readcase/${User}`).then(response => {
            console.log(response.data);
            this.setState({
                employee: response.data
            });
        });
    }
    render() {
        const options = {  
                                    // page: 2,            
                                    sizePerPageList: [ {            
                                    text: '5', value: 5          
                                    }, {          
                                      text: '10', value: 10  
        
                                    }],   
        
                                    sizePerPage: 5,            
                                    pageStartIndex: 0,         
                                    paginationSize: 3,          
                                    prePage: 'Prev',           
                                    nextPage: 'Next',            
                                    firstPage: 'First',        
                                    lastPage: 'Last',     
                                  };  

                              

        return (
      

            <div className="container">
                <div class="row" className="hdr">
                  <div class="col-sm- btn btn-info">
                        React Bootstrap Table with Searching and Custom Pagination
                    </div>
                </div>
                <div className='pos'>
                    <BootstrapTable
                        striped
                        hover
                        keyField='id'
                        data={this.state.employee}
                        columns={this.state.columns}
                        
                        sort={ { dataField: 'hdate', order: 'desc' } }
                        filter={ filterFactory() }
                        pagination={ paginationFactory(options) } ></BootstrapTable>
                        {/* <TableHeaderColumn dataField="button" dataFormat={buttonFormatter}>Buttons</TableHeaderColumn> */}
                </div>

            </div>
            
        )

    }

}



export default Setting