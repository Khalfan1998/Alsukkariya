import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import "./product.css"
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
  return <div className="product">
      <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance (Last 3 Months)"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                <img src="https://i.postimg.cc/Vk0YXd8v/sukari-large-removebg-preview.png" alt="img" className="productInfoImg" />
                <span className="productName">Sukari Large</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">1</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">price:</span>
                    <span className="productInfoValue">BHD 7.5</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">raw materials cost:-</span>
               
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sukari bag cost:</span>
                    <span className="productInfoValue">BHD 0.5</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sukari box cost:</span>
                    <span className="productInfoValue">BHD 0.5</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sukari date cost:</span>
                    <span className="productInfoValue">BHD 1</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">raw materials total cost:</span>
                    <span className="productInfoValue">BHD 2</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">4123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">active:</span>
                    <span className="productInfoValue">yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <span className="productInfoValue">yes</span>
                </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder="Sukari Large" />
                <label >In Stock</label>
                <select name="inStock" id="idStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label >Active</label>
                <select name="active" id="idActive">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                    <img src="https://i.postimg.cc/Vk0YXd8v/sukari-large-removebg-preview.png" alt="img" className="productUploadImg" />
                    <label for="file">
                        <Publish/>
                    </label>
                    <input type="file" id="file" style={{display:"none"}} />
                </div>
                <button className="productButton">Update</button>
              </div>
          </form>
      </div>
  </div>;
}
