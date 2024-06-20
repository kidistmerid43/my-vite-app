import React, { useContext } from "react";
import LayOut from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import classes from "./Cart.module.css";
import { Type } from "../../Utility/actionType";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
	const [{ basket, user }, dispatch] = useContext(DataContext);

	const total = basket.reduce(
		(amount, item) => item.price * item.amount + amount,
		0
	);
	console.log(basket)

	const increment = (item) => {
		dispatch({
			type: Type.ADD_TO_BASKET,
			item,
		});
	};

	const decrement = (id) => {

		// if (amount > 1) 
			{
			dispatch({
				type: Type.REMOVE_FROM_BASKET,
				id,
			});
		} 
		// else {
		// 	dispatch({
		// 		type: Type.REMOVE_ITEM_FROM_BASKET,
		// 		id,
		// 	});
		// }
	};

	return (
		<LayOut>
			<section className={classes.container}>
				<div className={classes.cart_container}>
					<h2>Hello</h2>
					<h3>Your shopping basket</h3>
					<hr />
					{basket?.length == 0 ? (
						<p>Oops! No item in your cart</p>
					) : (
						basket?.map((item, i) => {
							return (
								<section className={classes.cart_product}>
									<ProductCard
										key={i}
										product={item}
										renderDesc={true}
										renderAdd={false}
										flex={true}
									/>
									<div className={classes.btn_container}>
										<button
											className={classes.btn}
											onClick={() => increment(item)}
										>
											<IoIosArrowUp size={20} />
										</button>
										<span>{item.amount}</span>
										<button
											className={classes.btn}
											onClick={() => decrement(item.id)}
										>
											<IoIosArrowDown size={20} />
										</button>
									</div>
								</section>
							);
							
						})
					)}
				</div>

				{basket?.length !== 0 && (
					<div className={classes.subtotal} >
						<div>
							<p>Subtotal ({basket?.length} items)</p>
							<CurrencyFormat amount={total} />
						</div>
						<span>
							<input type="checkbox" />
							<small>This order contains a gift</small>
						</span>
						<Link to="/payments">Continue to checkout</Link>
					</div>
				)}
			</section>

			{/* <section className={classes.main_cart}>
				<div className={classes.cart_container}>
					<h2>Shopping Cart</h2>
					<div className={classes.cart_info}>
						<div className={classes.cart_item}>
							{basket.map((item) => (
								<div key={item.id}>
									<ProductCard {...item} />


									<div className={classes.amount_container}>
										<div>
											<button onClick={() => decrement(item.id, item.amount)}>
												<IoIosArrowDown />
											</button>
											<span>{item.amount}</span>
											<button onClick={() => increment(item.id)}>
												<IoIosArrowUp />
											</button>
										</div>
										<div className={classes.remove}>
											<button
												onClick={() =>
													dispatch({
														type: Type.REMOVE_ITEM_FROM_BASKET,
														id: item.id,
													})
												}
											>
												Remove
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className={classes.subtotal}>
							<h3>Subtotal</h3>
							<CurrencyFormat value={total} />
							<button className={classes.checkout} disabled={!user}>
								Proceed to Checkout
							</button>
						</div>
					</div>
				</div>
			</section> */}
		</LayOut>
	);
}

export default Cart;
