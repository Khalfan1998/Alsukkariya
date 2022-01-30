import "./productList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import {Link} from "react-router-dom"
import { useState } from "react";

export default function ProductList() {
    const [data,setData] = useState(productRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !== id))
      };

      const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'product', headerName: 'Product', width: 180, renderCell: (params)=>{
          return (
            <div className="productListItem">
              <img className="productListImg" alt="img" src={params.row.img}/>
              {params.row.name}
            </div>
          )
        } },
        { field: 'stock', headerName: 'Stock', width: 180 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 180,
        },
        {
          field: "action",
          headerName:"Action",
          width: 150,
          renderCell: (params)=>{
            return(
              <>
              <Link to={"/product/"+params.row.id}>
              <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline className="productListDelete" onClick={()=> handleDelete(params.row.id)}/>
              </>
            )
          }

        }
       
      ];

  return <div className="productList">
      <Link to="/newProduct">
          <button className="productAddButton">Create</button>
          </Link>
     <DataGrid
        rows={data} disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
  </div>;
}
