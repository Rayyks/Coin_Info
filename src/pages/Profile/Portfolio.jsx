import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const Portfolio = () => {
  // Sample data for the pie chart
  const data = [
    { name: "Bitcoin", value: 40 },
    { name: "Ethereum", value: 30 },
    { name: "Binance Coin", value: 20 },
    { name: "NFT", value: 10 },
  ];

  // Define custom colors for the pie chart segments
  const COLORS = ["#F0B90B", "#2FC3E0", "#F0A70B", "#A5B1C2"];

  return (
    <div className="bg-mainBg  p-48 shadow-lg">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-200">
          Asset Allocation
        </h1>
        <p className="text-gray-400 text-sm">Portfolio Distribution</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-2/3">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend
                verticalAlign="bottom"
                height={40}
                iconSize={12}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center mb-2">
              <span
                className="w-4 h-4 mr-2 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              <span className="text-gray-100">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
