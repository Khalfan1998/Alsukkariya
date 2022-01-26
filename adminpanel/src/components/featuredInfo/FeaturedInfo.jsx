import "./featuredInfo.css"
import { ArrowDownward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return <div className="featured">
      <div className="featuredItem">
          <span className="featuredTitle">Revenue</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$3,434</span>
              <span className="featuredMoneyRate">-12.5 <ArrowDownward/>
              </span>
          </div>
          <span className="featuredSub">Compared to Last Month</span>
      </div>
  </div>;
}
