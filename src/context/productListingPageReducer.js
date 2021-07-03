export const productListingPageReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS": {
      return {
        ...state,
        productsList: action.payload,
      };
    }
    case "PRICE_LOW_TO_HIGH": {
      return {
        ...state,
        sortBy: "PRICE_LOW_TO_HIGH",
      };
    }
    case "PRICE_HIGH_TO_LOW": {
      return {
        ...state,
        sortBy: "PRICE_HIGH_TO_LOW",
      };
    }
    case "FILTER_BY_SIZE": {
      return {
        ...state,
        filter:true,
        filterBy: {...state.filterBy, size: [...state.filterBy.size, action.payload] },
      };
    }
    case "CLEAR_FILTERS": {
      return {
        ...state,
        showFullInventory: true,
        filter:false,
        filterBy: { size: [], brands: [] },
        sortBy: null,
      };
    }
    default:
      return state;
  }
};
