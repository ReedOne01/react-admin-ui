import "./home.scss";
// import Image from "react-dom";

import {
  barChartBoxVisit,
  barChartBoxRevenue,
  topDealUsers,
  chartBoxUser,
  chartBoxConversion,
  ChartBoxRevenue,
  chartBoxProducts,
} from "../../data";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import Charts from "../../components/charts/Charts";
import PieChart from "../../components/pieChartBox/PieCharts";
import AreaCharts from "../../components/areaChart/AreaCharts";

const Home = () => {
  return (
    <div className="homeContainer">
      <span className="box box1">
        <h2 className="title">Top Deals</h2>
        {topDealUsers.map((user) => (
          <div className="cont" key={user.id}>
            <div className="left">
              <img src={user.img} alt="" className="photo" />
              <div className="userDetails">
                <span className="name">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <div className="right">${user.amount}</div>
          </div>
        ))}
      </span>
      <span className="box box2">
        <Charts {...chartBoxUser} />
      </span>
      <span className="box box3">
        <Charts {...chartBoxConversion} />
      </span>
      <span className="box box4">
        <PieChart />
      </span>
      <span className="box box5">
        <Charts {...ChartBoxRevenue} />
      </span>
      <span className="box box6">
        <Charts {...chartBoxProducts} />
      </span>
      <span className="box box7">
        <BarChartBox {...barChartBoxVisit} />
      </span>
      <span className="box box8">
        <AreaCharts />
      </span>
      <span className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </span>
    </div>
  );
};

export default Home;
