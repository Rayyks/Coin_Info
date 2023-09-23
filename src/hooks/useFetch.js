import axios from "axios";

const useFetch = (setData, setIsLoading) => {
  const apiUrl =
    "https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=INR";

  axios
    .get(apiUrl)
    .then((res) => {
      setData(res.data.coins);

      setIsLoading(false);
    })
    .catch((err) => {
      console.log("Error fetching data", err);
      setIsLoading(true);
    });
};

export default useFetch;
