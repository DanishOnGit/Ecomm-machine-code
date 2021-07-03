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
            sortBy: "PRICE_HIGH_TO_LOW" };
    };
    case "FILTER_BY_SIZE":{
        return {
            ...state,
           filterBySize:true
        }
    }
    case "CLEAR_FILTERS":{
        return {
            ...state,
            showFullInventory: true,
            showAllSizes:true,
            filterBy:false,
            sortBy: null,
           
        }
    }
    default:
        return state
  }
};
