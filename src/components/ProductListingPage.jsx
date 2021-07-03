import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../context/ProductContext";

export const ProductListingPage = () => {
  const [loading, setLoading] = useState(false);

  const {
    state: { productsList, sortBy },
    dispatch,
  } = useProducts();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const {
        data: { products },
      } = await axios.get("data.json");
      setTimeout(() => {
        dispatch({ type: "GET_PRODUCTS", payload: products });
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const priceSort = (productsList) => {
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      return [...productsList].sort(
        (product1, product2) =>
          Math.floor(Number(product1.price)) -
          Math.floor(Number(product2.price))
      );
    }
    if (sortBy === "PRICE_HIGH_TO_LOW") {
      return [...productsList].sort(
        (product1, product2) =>
          Math.floor(Number(product2.price)) -
          Math.floor(Number(product1.price))
      );
    }
    return productsList;
  };
  const priceSortedData = priceSort(productsList, sortBy);

  //   const getFilteredData=(priceSortedData)=>{
  //       return priceSortedData.filter()
  //   }
  //   const filteredData= getFilteredData(priceSortedData)

  useEffect(() => {
    fetchProducts();
  },[]);

  return (
    <>
      {loading ? (
        <h1>Fetching products...</h1>
      ) : (
        <div className="product-listing-page">
          {priceSortedData.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      )}
    </>
  );
};

// .filter((item) => (showFullInventory ? true : item.inStock))
//       .filter((item) => (showFastDeliveryOnly ? item.fastDelivery : true))
//       .filter((item) => item.price <= Number(priceRangeControl))
//       .filter((item) => (searchText ? item.brand.includes(searchText.charAt(0).toUpperCase()) : item));
