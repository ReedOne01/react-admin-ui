import {
  BarChart,
  Bar,
  //   Cell,
  //   XAxis,
  //   YAxis,
  //   CartesianGrid,
  Tooltip,
  //   Legend,
  ResponsiveContainer,
} from "recharts";
import "./barChartBox.scss";
// import { barChartBoxVisit } from "./../../data";

type VisitProps = {
  title: string;
  color: string;
  datakey: string;
  chartData: object[];
};

const BarChartBox = (props: VisitProps) => {
  return (
    <div className="barChat">
      <h2> {props.title}</h2>
      <div className="bar">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={props.chartData}>
            <Bar dataKey={props.datakey} fill={props.color} />
            <Tooltip
              labelStyle={{ display: "none" }}
              contentStyle={{
                background: "@2a3447",
                borderRadius: "5px",
              }}
              cursor={{ fill: "none" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
