import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../context/ProductContext";

export const ProductListingPage = () => {
  const [loading, setLoading] = useState(false);

  const {
    state: { productsList, sortBy, filterBy },
    dispatch,
  } = useProducts();
  console.log(productsList);

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

  const getFilteredData = (priceSortedData) => {
      let filteredData = [...priceSortedData]

    if (filterBy.size.length !== 0) {
      filteredData = filteredData.filter((product) => {
        let flag = false;
        filterBy.size.forEach((size) => {
          if (product.size.includes(size)) {
            flag = true;
          }
        });
        return flag;
      });
    }

    if (filterBy.brand.length !== 0) {
        filteredData = filteredData.filter((product) => {
          return filterBy.brand.includes(product.brand)
        });
      }

    return filteredData;
  };
  const filteredData = getFilteredData(priceSortedData);
//   console.log({ filteredData });

  useEffect(() => {
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
    fetchProducts();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>Fetching products...</h1>
      ) : (
        <div className="product-listing-page">
          {/* {priceSortedData.map((product) => (
            <ProductCard product={product} />
          ))} */}
          {filteredData.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      )}
    </>
  );
};
