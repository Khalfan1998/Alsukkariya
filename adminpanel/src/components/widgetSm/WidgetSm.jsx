import "./widgetSm.css";
import {AccountCircle, Visibility} from "@material-ui/icons"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
const [users, setUsers] = useState([])

useEffect(()=>{
  const getUsers = async ()=>{
    try{
    const res = await userRequest.get("users/?new=true")
    setUsers(res.data)
  }catch{}
  }
  getUsers();
},[])

  return <div className="widgetSm">
      <span className="widgetSmTitle">Newly Joined Members</span>
      <ul className="widgetSmList">
        {users.map(user=>(
          <li className="widgetSmListItem" key={user._id}>
              <img src={user.img || "https://i.postimg.cc/TYzCNGDQ/blank-profile-picture-g1ddcd9ae9-1280.png"}
              alt="memberImg" 
              className="widgetSmImg" />
             
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">{user.username}</span>
              </div>
              <Link to="/user/1">
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
              </Link>
          </li>
          ))}
      </ul>
      </div>;
}
