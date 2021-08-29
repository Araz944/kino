import Thumbnail from "./Thumbnail";
import { Flipper } from "react-flip-toolkit";

function Results({ results }) {
  return (
    <Flipper
      flipKey="square"
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"
    >
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </Flipper>
  );
}

export default Results;
