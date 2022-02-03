import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { AccountCircle, DeleteOutline } from "@material-ui/icons";
import {Link} from "react-router-dom"
import { userRequest } from "../../requestMethods";
import { useEffect, useState } from "react";


export default function UserList() {

  const [users, setUsers] = useState([])


  useEffect(()=>{
    const getUsers = async ()=>{
      try{
      const res = await userRequest.get("users")
      setUsers(res.data)
    }catch{}
    }
    getUsers();
  },[])

    const columns = [
        
        { field: 'name', headerName: 'Name', width: 200, renderCell: (params)=>{
          return (
            <div className="user">
              <AccountCircle className="userImg" src={params.row.avatar}/>
              {params.row.name}
            </div>
          )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'number', headerName: 'Phone Number', width: 180 },
        { field: '_id', headerName: 'ID', width: 240 },
       
        {
          field: "action",
          headerName:"Action",
          width: 200,
          renderCell: (params)=>{
            return(
              <>
              <Link to={"/user/"+params.row._id}>
              <button className="userListEdit">Edit</button>
              </Link>
              <DeleteOutline className="userListDelete" />
              </>
            )
          }

        }
       
      ];
      
  return <div className="userList"> 
            <Link to="/newUser">
          <button className="userAddButton">Create</button>
          </Link>
<DataGrid
        rows={users} disableSelectionOnClick
        columns={columns}
        getRowId={row=>row._id}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
      />
  </div>;
}
