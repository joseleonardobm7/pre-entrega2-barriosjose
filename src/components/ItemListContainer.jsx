import _ from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import allProducts from "./json/allProducts.json";
import ProductList from "./ProductList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const allCategories = [
    { en: "electronics", es: "Electrónicos" },
    { en: "jewelery", es: "Joyería" },
    { en: "men's clothing", es: "Ropa de Hombre" },
    { en: "women's clothing", es: "Ropa de Mujer" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          const category = allCategories.find(
            (c) => _.camelCase(c.en) === categoryId
          );
          resolve(
            !categoryId || categoryId === "allProducts"
              ? allProducts
              : allProducts.filter(
                  (item) => item.category === (category?.en || categoryId)
                )
          );
        }, 100);
      });
      setProducts(response);
    };

    fetchData();
  }, [categoryId]);

  return (
    <>
      <div className="row my-5 mx-5">
        {["bestSellers", "topRated"].includes(categoryId) ? (
          <div className="text-center my-5">
            <p> Esta sección se habilitará próximamente</p>
          </div>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
