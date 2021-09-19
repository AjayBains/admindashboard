import React, { useState } from 'react'
import "./userList.css"
import { userRows } from '../../dummyData';

import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';


export default function UserList() {
  const [data,setData] = useState(userRows);
  const handleClick = (id)=>{
    setData(data.filter(item=>item.id!== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'avatar',
      headerName: 'User',
      width: 200,
      renderCell:(params)=>{
        return(
          <div className = "userListUser">
            <img className = 'userListImg' src={params.row.avatar}alt="persn img" />
            {params.row.username}
          </div>
        )
      },
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width:150
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width:160
    
      
    },
    {
      field:"action",
      headerName:"Action",
      width:150,
      renderCell:(params)=>{
        return(
          <>
              <Link to = {"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
              </Link>
              
              <DeleteOutline className="userListDelete" onClick = {()=>handleClick(params.row.id)}/>

          </>
        


        )
      }
    }
  ];


      return (
          <div className ="userList">
              <DataGrid 
                rows={data}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
              
              />
              
          

          
          </div>
      )
}
