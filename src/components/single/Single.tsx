import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./single.scss";
// import { Tooltip } from "@mui/material";

type Props = {
  id: number;
  img: string;
  title: string;
  info: object;
  charts: {
    dataKeys: { name: string; color: string };
    data: object[];
  };
  activties: {
    time: string;
    text: string;
  };
};

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Single = (props: Props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src="./app.svg" alt="" />
            <h2>John Doe</h2>
            <button>Update</button>
          </div>
          <div className="details">
            <div className="item">
              <span className="itemTitle">Username:</span>
              <span className="itemValue">John doe</span>
            </div>
            <div className="item">
              <span className="itemTitle">Username:</span>
              <span className="itemValue">John doe</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                // strokeDasharray="5 5"
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
                // strokeDasharray="3 4 5 2"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="activities">
        <div className="h3">Activities</div>
        <ul>
          <li>
            <div>
              <p>John doe purchased playstation 5</p>
              <span className="time">3 days ago</span>
            </div>{" "}
          </li>
          <li>
            <div>
              <p>John doe purchased playstation 5</p>
              <span className="time">3 days ago</span>
            </div>{" "}
          </li>
          <li>
            <div>
              <p>John doe purchased playstation 5</p>
              <span className="time">3 days ago</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Single;
