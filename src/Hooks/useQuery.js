import { useState } from "react";
import Axios from "axios";

const useQuery = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const request = async (url) => {
    setLoading(true);
    const response = await Axios(url);
    setData(response.data);
    setLoading(false);
  };

  return {
    request: (url) => request(url),
    loading,
    data,
  };
};

export default useQuery;
