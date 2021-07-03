import { useProducts } from "../context/ProductContext";

export const SortAndFilter = () => {
  const {
    state: {  sortBy,filterBy },
    dispatch,
  } = useProducts();
  return (
    <div className="sort-filter-wrapper">
      <fieldset>
        <legend>Sort BY:</legend>
        <ul className="list-non-bullet">
          <li>
            <label>
              <input
                onChange={() => dispatch({ type: "PRICE_LOW_TO_HIGH" })}
                type="radio"
                name="sort"
                checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
              />
              low to high
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={() => dispatch({ type: "PRICE_HIGH_TO_LOW" })}
                type="radio"
                name="sort"
                checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
              />
              high to low
            </label>
          </li>
        </ul>

        <br />
      </fieldset>

      <fieldset>
        <legend>Sizes</legend>
        <ul className="list-non-bullet">
          <li>
            <label>
              <input
              
                onChange={() => dispatch({ type: "FILTER_BY_SIZE",payload:"S" })}
                type="checkbox"
                checked={filterBy && filterBy.size.includes("S")}
              />
              S
            </label>
          </li>
          <li>
            <label>
              <input
              
                onChange={() => dispatch({ type: "FILTER_BY_SIZE",payload:"M" })}
                type="checkbox"
                checked={filterBy && filterBy.size.includes("M")}
              />
              M
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={() => dispatch({ type: "FILTER_BY_SIZE",payload:"L" })}
                type="checkbox"
                checked={filterBy && filterBy.size.includes("L")}
              />
              L
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={() => dispatch({ type: "FILTER_BY_SIZE",payload:"XL" })}
                type="checkbox"
                checked={filterBy && filterBy.size.includes("XL")}
              />
              XL
            </label>
          </li>
        </ul>
      </fieldset>
      <br />
      <button
        className="btn btn-link"
        onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
      >
        Clear all filters
      </button>
    </div>
  );
};
