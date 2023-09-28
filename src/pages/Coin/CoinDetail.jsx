import { useParams } from "react-router";
import { useCoin } from "../../context/CryptoContext";
import { Loader } from "../../components";
import {
  ResponsiveContainer,
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

  // Generate random price data
  const generateRandomPrices = (numEntries, minPrice, maxPrice) => {
    const prices = [];
    for (let i = 0; i < numEntries; i++) {
      const randomPrice =
        Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
      prices.push(randomPrice);
    }
    return prices;
  };

  const numEntries = 30;
  const minPrice = 90;
  const maxPrice = 130;

  const priceHistory = Array.from({ length: numEntries }, (_, index) => ({
    date: `2023-01-${index + 1 < 10 ? `0${index + 1}` : index + 1}`,
    price: generateRandomPrices(1, minPrice, maxPrice)[0],
  }));

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-mainBg">
      <div className="container px-5 py-8 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
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
            <div className="mb-4" style={{ width: "100%", height: "300px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceHistory}>
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
              </ResponsiveContainer>
            </div>
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
                  {/* Include more details */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinDetail;
