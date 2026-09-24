import { useEffect, useState } from "react";
import { useParams } from "react-router";
// const API_URL =

export const CoinDetailsPage = () => {
  const { id } = useParams();

  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {};

    fetchCoin();
  }, [id]);

  return <div>CoinDetailsPage {id}</div>;
};
