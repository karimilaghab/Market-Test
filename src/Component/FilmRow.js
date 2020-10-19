import React, { useState } from "react";

const FilmRow = ({ details, handleAllCount }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    handleAllCount();
  };

  return (
    <tr>
      <td>{details.title}</td>
      <td>{details.release_date}</td>
      <td>
        <button className="voteBTN" onClick={handleClick}>
          Vote
        </button>
        <span className="voteCount">
          Count: <span className="countItem"> {count}</span>{" "}
        </span>
      </td>
    </tr>
  );
};

export default FilmRow;
