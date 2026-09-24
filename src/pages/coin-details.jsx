import { useEffect, useState } from "react";
import { useParams } from "react-router";
const API_URL = import.meta.env.VITE_COIN_API_URL;

export const CoinDetailsPage = () => {
  const { id } = useParams();

  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch coin");
        }

        const data = await res.json();

        setCoin(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoin();
  }, [id]);

  return <div>CoinDetailsPage {id}</div>;
};
