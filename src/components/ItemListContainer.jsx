import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import allProducts from "./json/allProducts.json";
import ProductList from "./ProductList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            categoryId
              ? allProducts.filter((item) => item.category === id)
              : allProducts
          );
        }, 1000);
      });
      setProducts(response);
    };

    fetchData();
  }, [categoryId]);

  return (
    <>
      <div className="row my-5 mx-5">
        <ProductList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
