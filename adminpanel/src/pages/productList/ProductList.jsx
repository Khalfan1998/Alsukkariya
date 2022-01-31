import "./productList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import {Link} from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

export default function ProductList() {
    
    const dispatch = useDispatch()
    const products = useSelector(state=>state.product.products);

    const handleDelete = (id)=>{
      deleteProduct(id,dispatch)
        
      };

      useEffect(()=>{
        getProducts(dispatch);
      },[dispatch])

      const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=>{
          return (
            <div className="productListItem">
              <img className="productListImg" alt="img" src={params.row.img}/>
              {params.row.title}
            </div>
          )
        } },
        { field: 'inStock', headerName: 'Stock', width: 180 },
      
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
              <Link to={"/product/"+params.row._id}>
              <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline className="productListDelete" onClick={()=> handleDelete(params.row._id)}/>
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
        rows={products} disableSelectionOnClick
        columns={columns}
        getRowId={row=>row._id}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
  </div>;
}
