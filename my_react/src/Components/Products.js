import React from "react";
import { Button, Badge } from "react-bootstrap";

const Login = (props) => {
  const [products, setProducts] = React.useState(null);
  const getProducts = () => {
    fetch("http://localhost:8000/api/v1/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      });
  };
  return (
    <>
      {console.log(products)}
      {products ? (
        products.map((item) => (
          <Badge variant="primary" key={item}>
            {item}
          </Badge>
        ))
      ) : (
        <Button onClick={getProducts} size="sm" style={{ width: "100%" }}>
          Get Products
        </Button>
      )}
    </>
  );
};

export default Login;
