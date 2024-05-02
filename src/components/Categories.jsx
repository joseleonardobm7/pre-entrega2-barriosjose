const Categories = () => {
  const allCategories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const dictionary = {
    electronics: "Electrónicos",
    jewelery: "Joyería",
    "men's clothing": "Ropa de Hombre",
    "women's clothing": "Ropa de Mujer",
  };
  let content = "";
  for (const category of allCategories) {
    content += `
      <li>
        <a 
          className="dropdown-item navbar-options-selector"
          href="#"
          data-value="${category}"
        >
          ${dictionary[category]}
        </a>
      </li>
    `;
  }
  return (
    <>
      <ul
        id="nav-bar-options-container"
        className="navbar-nav ms-auto mb-2 mb-lg-0"
      >
        <li className="nav-item">
          <a
            className="nav-link navbar-options-selector"
            aria-current="page"
            href="#"
            id="navbar-options-allProducts"
            data-value="allProducts"
          >
            Todos los Productos
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categorias
          </a>
          <ul
            id="categories-container"
            className="dropdown-menu"
            dangerouslySetInnerHTML={{ __html: content }}
          ></ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link navbar-options-selector"
            href="#"
            id="navbar-options-bestSellers"
            data-value="bestSellers"
          >
            Más Vendidos
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link navbar-options-selector"
            href="#"
            id="navbar-options-mostValued"
            data-value="mostValued"
          >
            Mejores Valorados
          </a>
        </li>
      </ul>
    </>
  );
};

export default Categories;
