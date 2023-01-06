import { useContext } from "react";
import { ComparisonContext } from "./AutoCompletionList";
import { useComparedData } from "../../hooks/useComparedData";

export function Compare() {
  const symbols = useContext(ComparisonContext);
  const data = useComparedData(symbols);

  console.log(data, "data");
  return <div>compare</div>;
}
