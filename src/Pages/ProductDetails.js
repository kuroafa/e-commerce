import React, { useContext } from "react";
// import useParams
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductC";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the ingle product base
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  /// destructure product
  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto text-center p-4">
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt="productimage"
            />
          </div>
          {/* text */}
          <div className="flex flex-col items-start text-left">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[24px]  font-medium mb-2 max-w-[450px] mx-auto ">
                {title}
              </h1>
            </div>
            <div className="text-xl text-red-800 font-medium mb-6">${price}</div>
            <p className="mb-8   max-w-[450px]">{description}</p>
            <button className="bg-black py-4 px-8 text-white" onClick={()=> addToCart(product, product.id)}>Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
