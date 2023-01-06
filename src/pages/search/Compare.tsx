import { useContext } from "react";
import { ComparisonContext } from "./AutoCompletionList";

export function Compare() {
  const compare = useContext(ComparisonContext);

  console.log(compare);
  return <div>compare</div>;
}
