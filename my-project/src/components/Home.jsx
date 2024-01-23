import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
    const [product, setProduct] = useState([]);
    console.log(product);

    useEffect(() => {
        const fetchProduct = () => {
            try {
                fetch("https://fakestoreapi.com/products")
                    .then((data) => data.json())
                    .then((data) => setProduct(data))
                    .catch((err) => {
                        console.log(err);
                    });
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
    }, []); // Also, added dependency array here


    console.log(product);
    return (
        <div className="px-4 py-2">
            <h1 className="text-3xl font-semibold text-center mb-6">Home</h1>
            <div className="flex justify-center gap-5 mb-6">
                <button className="py-2 px-4 rounded-xl bg-cyan-500 text-white font-medium">
                    <Link to="/">Home</Link>
                </button>
                <button className="py-2 px-4 rounded-xl bg-cyan-500 text-white font-medium">
                    <Link to="/cart">Cart</Link>
                </button>
                <button className="py-2 px-4 rounded-xl bg-cyan-500 text-white font-medium">
                    <Link to="/contact">Contact</Link>
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {product.map((item) => (
                    <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                        <img className="w-full h-64 object-cover object-center" src={item.image} alt={item.title} />
                        <div className="p-5">
                            <h5 className="text-lg font-bold mb-2">{item.title}</h5>
                            <p className="text-sm text-gray-700 mb-3">{item.description.substring(0, 100)}...</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold">${item.price}</span>
                                <button className="px-3 py-1 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring focus:outline-none">

                                    <Link to={`/product/${item.id}`}>Buy Product</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
