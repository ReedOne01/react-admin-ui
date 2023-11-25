import { Link } from "react-router-dom";
import "./charts.scss";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

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

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number | string;
  chartData: object[];
};
const Charts = (props: Props) => {
  return (
    <div className="charts">
      <div className="chartInfo">
        <span className="userChart">
          <img src={props.icon} className="logo" alt="" />
          <span className="total">{props.title}</span>
        </span>
        <span className="figure">{props.number}</span>
        <Link to="/" style={{ color: props.color }}>
          <span className="view">View all</span>
        </Link>
      </div>
      <div className="chartDetails">
        <div className="chartPic">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart width={300} height={100} data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                position={{ x: 5, y: 55 }}
                labelStyle={{ display: "none" }}
              />

              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="details">
          <span
            className="digit"
            style={{ color: props.percentage > 0 ? "limegreen" : "tomato" }}
          >
            {props.percentage}%
          </span>
          <span className="text">this month</span>
        </div>
      </div>
    </div>
  );
};

export default Charts;
