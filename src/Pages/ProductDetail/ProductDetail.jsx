import React, { useEffect, useState } from "react";
import LayOut from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../Api/endPoints";
// import classes from "./Results.module.css";


import Loader from "../../Components/Loader/Loader";

// const productUrl = "https://fakestoreapi.com"; Ensure this is correctly defined

function ProductDetail() {
	const { productId } = useParams();
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`${productUrl}/products/${productId}`)
			.then((res) => {
				setProduct(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	}, [productId]);

	return (
		<LayOut>
			{isLoading ? (
				<Loader />
			) : (
			<ProductCard
				product={product}

			
				flex={true}
				renderDesc={true}
				renderAdd={true}
			/>)}
			
		</LayOut>
	);
}

export default ProductDetail;
