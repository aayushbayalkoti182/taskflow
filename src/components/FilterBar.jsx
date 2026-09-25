function FilterBar({ filter, onFilterChange }) {
  return (
    <div className="filter-section">
      <h2>Filter Tasks</h2>

      <div className="filter-bar">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>

        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => onFilterChange("active")}
        >
          Active
        </button>

        <button
          className={
            filter === "completed" ? "active" : ""
          }
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default FilterBar;