import "./newProduct.css"

export default function NewProduct() {
  return <div className="newProduct">
     <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Sukari Large" />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="price" />
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
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
  </div>;
}
