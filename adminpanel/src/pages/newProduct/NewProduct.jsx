import { useState } from "react";
import "./newProduct.css"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function NewProduct() {
  const [inputs, setInputs]=useState({})
  const [file, setFile]=useState(null)


  const handleChange = (e) =>{
    setInputs(prev=>{
      return{...prev, [e.target.name]:e.target.value}
    })
  }

console.log(inputs);

  return <div className="newProduct">
     <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={e=>setFile(e.target.files)[0]} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="Sukari Large" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="description" type="text" placeholder="description..." onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="price" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Raw Materials Cost</label>
          <input type="text" placeholder="Sukari Bag Cost     /attach invoice" />
          <input type="file" id="file" />
          <input type="text" placeholder="Sukari Box Cost     /attach invoice" />
          <input type="file" id="file" />
          <input type="text" placeholder="Sukari Date Cost     /attach invoice" />
          <input type="file" id="file" />
          <label>Raw Materials Total Cost</label>
          <input type="text" placeholder="Total Raw Material Cost     /attach invoice" />
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
          <option value="true">Yes</option>
            <option value="false">No</option>
            </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
  </div>;
}
