import { useState } from "react";
import { SearchInput } from "../../components/SearchInput";
import { AutoCompletionList } from "./AutoCompletionList";

export function Search() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <SearchInput onChange={(e) => setQuery(e.target.value)} />
      <AutoCompletionList query={query} />
    </div>
  );
}
