import { useAnswersActions } from "@yext/answers-headless-react";
import { ChangeEvent, KeyboardEvent, useCallback } from "react";

function SearchBar() {
  const answers = useAnswersActions();

  const handleTyping = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      //console.log("Key");
      answers.setQuery(e.target.value);
    },
    [answers]
  );

  const handleKeyDown = useCallback(
    (evt: KeyboardEvent<HTMLInputElement>) => {
      if (evt.key === "Enter") {
        answers.executeVerticalQuery();
      }
    },
    [answers]
  );

  return <input onChange={handleTyping} onKeyDown={handleKeyDown} />;
}

export default SearchBar;
