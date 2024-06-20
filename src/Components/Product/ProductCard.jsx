import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/actionType";

function ProductCard({ product, flex, renderDesc,renderAdd 
}) {
	
	const { image, title, id, rating, price
		, description
	} = product;

	const [state, dispatch] = useContext(DataContext);
	

	const addToCart = () => {
		dispatch({
			type: Type.ADD_TO_BASKET,
			item: { image, title, id, rating, price, description },
		});
	};

	if (!product) {
		return null; 
	}

	

	return (
		<div
			className={`${classes.card_container} ${
				flex ? classes.product_flexed : ""
			}`}
		>
			<Link to={`/products/${id}`}>
				<img src={image} alt="" className={classes.img_container} />
			</Link>
			<div>
				<h3>{title}</h3>
				{renderDesc && <div style={{ Width: "750px" }}>{description}</div>}

				<div className={classes.rating}>
					<Rating value={rating?.rate} precision={0.1} readOnly />
					<small>{rating?.count}</small>
				</div>
				<div>
					<CurrencyFormat amount={price} />
				</div>

				{
					renderAdd &&
					<button className={classes.button} onClick={addToCart}>
						add to cart
					</button>
				}
			</div>
		</div>
	);
}

export default ProductCard;
