import { AccountCircle } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods"; 
import "./transactions.css";
import {format} from "timeago.js"

export default function Transactions() {

  const [Orders, setOrders] = useState([])

  useEffect(()=>{
    const getOrders = async ()=>{
      try{
      const res = await userRequest.get("orders")
      setOrders(res.data)
    }catch{}
    }
    getOrders();
  },[])

    const Button = ({type}) => {
        return <button className={"widgetLgButton "+ type}>{type}</button>
    }
  return <div className="transactionsLg">
      <h3 className="widgetLgTitle">Transactions</h3>
      <table className="widgetLgTable">
      <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Payment Type</th>
          <th className="widgetLgTh">Order Status</th>
      </tr>
      {Orders.map(order=>(
      <tr className="widgetLgTr" key={order._id}>
          <td className="widgetLgUser">
            
            <span className="widgetLgName">{order.userId}</span>
          </td>
          <td className="widgetLgDate">{format(order.createdAt)}</td>
          <td className="widgetLgDate">BHD {order.amount}</td>
          <td className="widgetLgDate">Cash on Delivery</td>
          <td className="widgetLgOrderStatus"><Button type={order.status}/>
          </td>
      </tr>
      ))}
      </table>
      </div>;
}
