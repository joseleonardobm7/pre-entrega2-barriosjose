import _ from "lodash";
import { Link } from "react-router-dom";

const Categories = () => {
  const allCategories = [
    { en: "electronics", es: "Electrónicos" },
    { en: "jewelery", es: "Joyería" },
    { en: "men's clothing", es: "Ropa de Hombre" },
    { en: "women's clothing", es: "Ropa de Mujer" },
  ];
  return (
    <>
      <ul
        id="nav-bar-options-container"
        className="navbar-nav ms-auto mb-2 mb-lg-0"
      >
        <li className="nav-item">
          <Link
            className="nav-link navbar-options-selector"
            to={`/category/allProducts`}
          >
            Todos los Productos
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categorias
          </Link>
          <ul id="categories-container" className="dropdown-menu">
            {allCategories.map((category) => (
              <li>
                <Link
                  className="dropdown-item navbar-options-selector"
                  to={`/category/${_.camelCase(category.en)}`}
                >
                  <span className="p-3"> {category.es} </span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link navbar-options-selector"
            to={`/category/bestSellers`}
          >
            Más Vendidos
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link navbar-options-selector"
            to={`/category/topRated`}
          >
            Mejores Valorados
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Categories;
