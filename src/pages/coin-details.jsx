import { useParams } from "react-router";

export const CoinDetailsPage = () => {
  const { id } = useParams();

  return <div>CoinDetailsPage {id}</div>;
};
