function SearchBar({ setSearch }) {
  return (
    <div className="card">
      <input
        className="search"
        placeholder="Search Projects"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar