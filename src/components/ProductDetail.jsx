import ProductCounter from "./ProductCounter";

const ProductDetail = ({ product }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-2">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-4">
          <h1 className="fs-3 text-uppercase fw-semibold">{product.title}</h1>
          <p className="fs-4 fw-bold">${product.price}</p>
          <p className="small">{product.description}</p>
          <ProductCounter stock={product.stock} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
