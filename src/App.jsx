import { useState } from "react";
const API_URL =
  "https://api.coingecko.com/api/v3/conins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div>
      <h1>Crypto Dash</h1>
    </div>
  );
};

export default App;
