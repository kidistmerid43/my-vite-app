import React, {useContext} from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader"
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

const Header=()=> {

	const [{user,basket}, dispatch] = useContext(DataContext);
	const totalItem = basket?.reduce((amount, item) =>{return item.amount + amount}, 0);


	return (
		<section className={classes.fixed}>
			<section>
				<div className={classes.fixed}>
					<div className={classes.header_container}>
						{/* logo */}
						<div className={classes.logo_container}>
							<Link to="/">
								<img
									src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
									alt="amazon logo"
								/>
							</Link>

							<div className={classes.delivery}>
								{/* delivery */}
								<span>
									<SlLocationPin />
								</span>

								<div>
									<p>Delivered to</p>
									<span>Ethiopia</span>
								</div>
							</div>
						</div>
						{/* search bar */}
						<div className={classes.search}>
							<select name="" id="">
								<option value="">All</option>
							</select>
							<input type="text" name="" id="" placeholder="search product" />
							<BsSearch size={38} />
						</div>

						{/* right side link */}
						<div className={classes.order_container}>
							<Link to="" className={classes.language}>
								<img
									src="https://th.bing.com/th/id/R.a8854ee552e020fd9c957bb6842274f1?rik=CYBNsHDsVB%2bFnA&pid=ImgRaw&r=0"
									alt="Flag"
								/>
								<select name="language" id="language">
									<option value="EN">EN</option>
								</select>
							</Link>
							<Link to={!user && "/Auth"}>
								<div>
									{user ? (
										<>
											<p>Hello {user?.email?.split("@")[0]}</p>
											<span onClick={() => auth.signOut()}>Sign Out</span>
										</>
									) : (
										<>
											<p>Hello, Sign In</p>
											<span>Account and Lists</span>
										</>
									)}
								</div>
							</Link>
							{/* orders */}
							<Link to="/orders">
								<p>Returns</p>
								<span>& Orders</span>
							</Link>
							{/* cart */}
							<Link to="/cart" className={classes.cart}>
								<BiCart size={35} />
								<span>{totalItem}</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<LowerHeader />
		</section>
	);
}

export default Header;
