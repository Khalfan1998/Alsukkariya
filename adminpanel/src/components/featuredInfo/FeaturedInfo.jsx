import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return <div className="featured">
            <div className="featuredItem">
          <span className="featuredTitle">Revenue</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">BHD1,232</span>
              <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative"/>
              </span>
          </div>
          <span className="featuredSub">Compared to Last Month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">BHD3,434</span>
              <span className="featuredMoneyRate">-1.7 <ArrowDownward className="featuredIcon negative"/>
              </span>
          </div>
          <span className="featuredSub">Compared to Last Month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">BHD2,454</span>
              <span className="featuredMoneyRate">+2.5 <ArrowUpward className="featuredIcon"/>
              </span>
          </div>
          <span className="featuredSub">Compared to Last Month</span>
      </div>
  </div>;
}
