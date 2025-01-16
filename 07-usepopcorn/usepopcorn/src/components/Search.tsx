import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  function handleSearch(searchEvent: React.ChangeEvent<HTMLInputElement>) {
    setQuery(searchEvent.target.value);
  }

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={handleSearch}
    />
  );
}
