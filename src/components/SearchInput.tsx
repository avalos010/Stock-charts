import { ChangeEvent } from "react";

function SearchInput({ onChange }: SearchInpuProps) {
  return (
    <div className="input-group mb-3">
      <input
        onChange={(e) => onChange(e)}
        type="text"
        className="form-control"
        placeholder="Search for symbols"
        aria-label="Search for symbols"
      />
      {/* <span className="input-group-text" id="basic-addon1">
        Search
      </span> */}
    </div>
  );
}

interface SearchInpuProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export { SearchInput };
