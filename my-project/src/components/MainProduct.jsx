import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MainProduct = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${_id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
      })
      .catch(err => {
        console.error("Error fetching product:", err);
        // Handle the error as per your requirement
      });
  }, [_id]);

if (!product) {
    return <div>Loading or product not found...</div>;
}

const { title, price, description, category } = product;

  return(
    <div>
      <img src={product.image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default MainProduct;
