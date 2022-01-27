import "./widgetLg.css";

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={"widgetLgButton "+ type}>{type}</button>
    }
  return <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
      <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Order Status</th>
      </tr>
      <tr className="widgetLgTr">
          <td className="widgetLgUser">
              <img src="https://i.postimg.cc/13MnLztm/mika-1.png" alt="User" className="widgetLgImg" />
            <span className="widgetLgName">James Davis</span>
          </td>
          <td className="widgetLgDate">21st June 2021</td>
          <td className="widgetLgDate">BHD260.00</td>
          <td className="widgetLgOrderStatus"><Button type="Approved"/></td>
      </tr>
      <tr className="widgetLgTr">
          <td className="widgetLgUser">
              <img src="https://i.postimg.cc/13MnLztm/mika-1.png" alt="User" className="widgetLgImg" />
            <span className="widgetLgName">Alex Philip</span>
          </td>
          <td className="widgetLgDate">21st June 2021</td>
          <td className="widgetLgDate">BHD460.00</td>
          <td className="widgetLgOrderStatus"><Button type="Declined"/></td>
      </tr>
      <tr className="widgetLgTr">
          <td className="widgetLgUser">
              <img src="https://i.postimg.cc/13MnLztm/mika-1.png" alt="User" className="widgetLgImg" />
            <span className="widgetLgName">George Robinson</span>
          </td>
          <td className="widgetLgDate">21st June 2021</td>
          <td className="widgetLgDate">BHD160.00</td>
          <td className="widgetLgOrderStatus"><Button type="Pending"/></td>
      </tr>
      <tr className="widgetLgTr">
          <td className="widgetLgUser">
              <img src="https://i.postimg.cc/13MnLztm/mika-1.png" alt="User" className="widgetLgImg" />
            <span className="widgetLgName">Ali Ahmad</span>
          </td>
          <td className="widgetLgDate">21st June 2021</td>
          <td className="widgetLgDate">BHD60.00</td>
          <td className="widgetLgOrderStatus"><Button type="Approved"/></td>
      </tr>
      <tr className="widgetLgTr">
          <td className="widgetLgUser">
              <img src="https://i.postimg.cc/13MnLztm/mika-1.png" alt="User" className="widgetLgImg" />
            <span className="widgetLgName">Yousif Khalifa</span>
          </td>
          <td className="widgetLgDate">21st June 2021</td>
          <td className="widgetLgDate">BHD45.00</td>
          <td className="widgetLgOrderStatus"><Button type="Pending"/></td>
      </tr>
      </table>
      </div>;
}
