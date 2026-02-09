import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../services/ProductService";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProductById(productId);
      console.log("API DATA 👉", res.data);
      setProduct(res.data);
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: 40 }}>
      <h2>{product.productName || product.name}</h2>

      <img
        src={product.imageUrl || product.image}
        alt=""
        width="300"
      />

      <p>{product.description}</p>
      <h3>₹ {product.price}</h3>
    </div>
  );
};

export default ProductDetails;
