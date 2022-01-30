import "./widgetSm.css";
import {AccountCircle, Visibility} from "@material-ui/icons"

export default function WidgetSm() {
  return <div className="widgetSm">
      <span className="widgetSmTitle">Newly Joined Members</span>
      <ul className="widgetSmList">
          <li className="widgetSmListItem">
              {/* <img src="https://i.postimg.cc/XqWNh7Nn/charles-deluvio-K4m-SJ7kc0-As-unsplash.jpg" alt="memberImg" className="widgetSmImg" /> */}
              <AccountCircle/>
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Jack Johnson</span>
                  <span className="widgetSmUserTitle">Software Developer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
          </li>
          <li className="widgetSmListItem">
                <AccountCircle/>
              {/* <img src="https://i.postimg.cc/XqWNh7Nn/charles-deluvio-K4m-SJ7kc0-As-unsplash.jpg" alt="memberImg" className="widgetSmImg" /> */}
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Jack Johnson</span>
                  <span className="widgetSmUserTitle">Software Developer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
          </li>
          <li className="widgetSmListItem">
          <AccountCircle/>
              {/* <img src="https://i.postimg.cc/XqWNh7Nn/charles-deluvio-K4m-SJ7kc0-As-unsplash.jpg" alt="memberImg" className="widgetSmImg" /> */}
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Alex Philip</span>
                  <span className="widgetSmUserTitle">Software Developer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
          </li>
          <li className="widgetSmListItem">
          <AccountCircle/>
              {/* <img src="https://i.postimg.cc/XqWNh7Nn/charles-deluvio-K4m-SJ7kc0-As-unsplash.jpg" alt="memberImg" className="widgetSmImg" /> */}
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">George Robinson</span>
                  <span className="widgetSmUserTitle">Software Developer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
          </li>
          <li className="widgetSmListItem">
          <AccountCircle/>
              {/* <img src="https://i.postimg.cc/XqWNh7Nn/charles-deluvio-K4m-SJ7kc0-As-unsplash.jpg" alt="memberImg" className="widgetSmImg" /> */}
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Ali Ahmad</span>
                  <span className="widgetSmUserTitle">Software Developer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
              </button>
          </li>
      </ul>
      </div>;
}
