import { useProducts } from "../context/ProductContext";

export const SortAndFilter = () => {
  const {
    state: { showFullInventory, sortBy, priceRangeControl,filterBy },
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
        <legend>Brand</legend>
        <ul className="list-non-bullet">
          <li>
            <label>
              <input
              
                onChange={() => dispatch({ type: "FILTER_BY_BRAND",payload:"S" })}
                type="checkbox"
                checked={filterBy && filterBy}
              />
              S
            </label>
          </li>
          <li>
            <label>
              <input
              
                onChange={() => dispatch({ type: "FILTER_BY_BRAND",payload:"M" })}
                type="checkbox"
                checked={filterBy}
              />
              M
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={() => dispatch({ type: "FILTER_BY_BRAND",payload:"L" })}
                type="checkbox"
                checked={filterBy}
              />
              L
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={() => dispatch({ type: "FILTER_BY_BRAND",payload:"XL" })}
                type="checkbox"
                checked={filterBy}
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
