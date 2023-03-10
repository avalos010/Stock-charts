import { useState } from "react";
import { SearchInput } from "../../components/SearchInput";
import { AutoCompletionList } from "./AutoCompletionList";

export function Search() {
  const [query, setQuery] = useState("");
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <SearchInput onChange={(e) => setQuery(e.target.value)} />
      <AutoCompletionList query={query} />
    </div>
  );
}
