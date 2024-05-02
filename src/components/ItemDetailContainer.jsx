import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import allProducts from "./json/allProducts.json";
import ProductDetail from "./ProductDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          const productData = allProducts.find(
            (product) => product.id === parseInt(productId)
          );
          resolve(productData);
        }, 100);
      });
      setProduct(response);
    };

    fetchData();
  }, [productId]);

  return (
    <div className="container">
      <div className="row my-5">
        <ProductDetail product={product} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
