import "./userNew.css"
import { AccountCircle, CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function User() {
  return <div className="userOne">
       <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
      </div>
      <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
            <AccountCircle className="userShowImg"/>
            <div className="userShowTopTitle">
                <span className="userShowUsername">Jack Davis</span>
                <span className="userShowTitle">Software Developer</span>
            </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                <PermIdentity className="userShowIcon"/>
                <span className="userShowInfoTitle">jackdavis44</span>
                </div>
                <div className="userShowInfo">
                <CalendarToday className="userShowIcon"/>
                <span className="userShowInfoTitle">24.06.1990</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon"/>                
                <span className="userShowInfoTitle">+9733939393</span>
                </div>
                <div className="userShowInfo">
                <MailOutline className="userShowIcon"/>
                <span className="userShowInfoTitle">jackdavis44@gmail.com</span>
                </div>
                <div className="userShowInfo">
                <LocationSearching className="userShowIcon"/>
                <span className="userShowInfoTitle">House44 | Area 110 | Manama</span>
                </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input 
                        type="text" 
                        placeholder="jackdavis44" 
                        className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input 
                        type="text" 
                        placeholder="Jack Davis" 
                        className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input 
                        type="text" 
                        placeholder="jackdavis44@gmail.com" 
                        className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Phone</label>
                        <input 
                        type="text" 
                        placeholder="+9733939393" 
                        className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input 
                        type="text" 
                        placeholder="House44 | Area 110 | Manama" 
                        className="userUpdateInput" />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <AccountCircle className="userUpdateImg" />
                        <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
            </form>
          </div>
      </div>
  </div>;
}
