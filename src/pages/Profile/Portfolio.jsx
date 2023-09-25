import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

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
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg  bg-mainBg">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-gray-100 mb-1 text-xs font-semibold">
              Portfolio Distribution
            </h6>
            <h2 className="text-gray-100 text-xl font-semibold">
              Asset Allocation
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        {/* Chart */}
        <div className="relative h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={60}
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
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Legend */}
        <div className="mt-4">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center mb-2">
              <span
                className="w-4 h-4 mr-2 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              <span className="text-gray-700">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
