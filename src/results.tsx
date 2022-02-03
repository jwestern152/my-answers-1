import { useAnswersState } from "@yext/answers-headless-react";

export default function Results() {
  const ResultCard = (props) => {
    return (
      <div>
        {console.log("props")}

        <div>{props.rawData.color}</div>
        <div>{props.rawData.name}</div>
      </div>
    );
  };

  const results = useAnswersState((state) => state.vertical.results);

  return (
    <div>
      {console.log(results)}
      {results &&
        results.map((result) => (
          <div key={result.id}>{ResultCard(result)}</div>
        ))}
    </div>
  );
}
