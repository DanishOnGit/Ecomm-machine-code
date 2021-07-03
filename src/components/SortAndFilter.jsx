import { useProducts } from "../context/ProductContext";

export const SortAndFilter = () => {
  const {
    state: { sortBy, filterBy },
    dispatch,
  } = useProducts();

  const sizeArray = ["S", "M", "L", "XL"];
  const brandArray =["levis","mango","veromoda","nike","wrangler"]
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
          {sizeArray.map((size) => (
            <li>
              <label>
                <input
                  onChange={() =>
                    dispatch({ type: "FILTER_BY_SIZE", payload: size })
                  }
                  type="checkbox"
                  checked={filterBy.size.includes(size)}
                />
                {size}
              </label>
            </li>
          ))}
          
        </ul>
      </fieldset>
      <fieldset>
        <legend>Brands</legend>
        <ul className="list-non-bullet">
          {brandArray.map((brand) => (
            <li>
              <label>
                <input
                  onChange={() =>
                    dispatch({ type: "FILTER_BY_BRAND", payload: brand })
                  }
                  type="checkbox"
                  checked={filterBy.brand.includes(brand)}
                />
                {brand}
              </label>
            </li>
          ))}
          
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
