import React, { useEffect, useState } from "react";
import "./App.css";
import FilmRow from "./Component/FilmRow";
import useQuery from "./Hooks/useQuery";

import { StyleWrapper, StyleLoading } from "./style";

const App = () => {
  const { request, data, loading } = useQuery();

  const [allCount, setAllCount] = useState(0);

  useEffect(() => {
    request("http://swapi.dev/api/films/");
  }, []);

  const handleAllCount = () => {
    setAllCount((allCount) => allCount + 1);
  };

  if (loading) {
    return <StyleLoading>Loading ...</StyleLoading>;
  }

  return (
    <StyleWrapper>
      <div className="App">
        <h1 className="title">List of Star Wars Movies</h1>
        <table className="table">
          <thead>
            <th>Title</th>
            <th>Release Date</th>
            <th>Vote</th>
          </thead>
          <tbody>
            {(data.results.sort() || []).map((item) => (
              <FilmRow
                key={item.episode_id}
                details={item}
                handleAllCount={handleAllCount}
              />
            ))}
          </tbody>
        </table>
        <p className="allCountWrapper">
          All Count: <span className="allCount">{allCount}</span>
        </p>
      </div>
    </StyleWrapper>
  );
};

export default App;
