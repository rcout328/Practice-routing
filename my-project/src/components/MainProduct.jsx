import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainProduct = () => {
  const { _id } = useParams();
  alert(_id)
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
    <>
    <div className="py-3 pl-5">
        <Link to={"/"}>Back</Link>
    </div>
    <div className="container mx-auto my-10 p-5 max-w-3xl shadow-lg border border-gray-200">
  <div className="flex flex-col md:flex-row">
    <div className="md:w-1/2">
      <img src={product.image} alt={title} className="rounded-lg w-full h-auto object-cover object-center" />
    </div>
    <div className="md:w-1/2 md:pl-10">
      <h1 className="font-bold text-3xl my-2">{title}</h1>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-indigo-600 font-semibold">Category: {category}</p>
      <p className="text-2xl font-bold mt-3">Price: ${price}</p>
      <button className="mt-5 py-2 px-4 bg-blue-500 text-white text-lg rounded hover:bg-blue-600 transition-colors duration-200">Add to Cart</button>
    </div>
  </div>
</div>
</>

  );
};

export default MainProduct;
