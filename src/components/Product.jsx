import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="col-md-3 text-center">
      <Link
        to={"/product-detail/" + product.id}
        className="text-decoration-none"
      >
        <div className="card border-0">
          <img src={product.image} className="img-fluid" alt={product.title} />
          <div className="card-body">
            <p className="card-text small text-uppercase">
              {product.title}
              <br />
              <span className="card-text fs-5">
                <b>${product.price}</b>
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
