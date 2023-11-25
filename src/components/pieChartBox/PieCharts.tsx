import React from "react";
import "./pieCharts.scss";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00c49f" },
  { name: "Laptop", value: 300, color: "#ffbb28" },
  { name: "Tablet", value: 200, color: "#ff8042" },
];

const PieCharts = () => {
  return (
    <div className=" pieChartBox">
      <h2 className="title">Leeds By Source</h2>
      <span className="chart">
        <ResponsiveContainer width="99%" height={200}>
          <PieChart style={{ border: "" }}>
            <Tooltip
              contentStyle={{ background: "transparent", borderRadius: "10px" }}
              itemStyle={{ color: "white" }}
            />
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </span>
      <div className="secPart">
        {data.map((item) => (
          <div className="items">
            <span className="title">
              <span
                className="dot"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="name">{item.name}</span>
            </span>
            <span className="value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieCharts;
