import { useContext } from "react";
import { useParams } from "react-router";
import { useCoin } from "../../context/CryptoContext";
import { Loader } from "../../components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CoinDetail = () => {
  const { data } = useCoin();
  const { id } = useParams();
  const coinId = id;
  const coin = data.find((coin) => coin.id === coinId);

  if (!coin) {
    return <Loader full={true} />;
  }

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Sample data for price history (replace with actual data)
  const priceHistory = [
    { date: "2023-01-01", price: 100 },
    { date: "2023-01-02", price: 120 },
    { date: "2023-01-03", price: 110 },
    // Add more data points
  ];

  return (
    <section className="text-gray-700 body-font overflow-hidden  bg-mainBg">
      <div className="container px-5 py-8 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
          <img
            alt="coin"
            className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded-lg border border-gray-200"
            src={coin.icon}
          />
          <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-100 tracking-widest">
              {coin.name}
            </h2>
            <h1 className="text-gray-100 text-3xl title-font font-medium mb-1">
              {coin.symbol}
            </h1>
            {/* Line chart for price history */}
            <div className="mb-4">
              <LineChart width={400} height={300} data={priceHistory}>
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </div>
            {/* Cryptocurrency information */}
            <div className="mb-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">
                  Currency Information
                </h3>
                <ul>
                  <li>
                    <strong>Market Cap:</strong>
                    {currencyFormatter.format(coin.marketCap)}
                  </li>
                  <li>
                    <strong>24h Trading Volume:</strong>
                    {currencyFormatter.format(coin.priceChange1d)}
                  </li>
                  <li>
                    <strong>Circulating Supply:</strong>{" "}
                    {currencyFormatter.format(coin.totalSupply)}
                  </li>
                  <li>
                    <strong>Price:</strong>{" "}
                    {currencyFormatter.format(coin.price)}
                  </li>
                  <li>
                    <strong>Price Change (24h):</strong>{" "}
                    {currencyFormatter.format(coin.priceChange1d)}
                  </li>
                  <li>
                    <strong>All-Time High:</strong>{" "}
                    {currencyFormatter.format(coin.volume)}
                  </li>
                  {/* Include more details as needed */}
                </ul>
              </div>
            </div>
            {/* Other details */}
            <p className="leading-relaxed text-white">
              AMBATUKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              {/* Color and size options */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinDetail;
