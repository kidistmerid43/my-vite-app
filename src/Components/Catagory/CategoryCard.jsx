import React from "react";
import PropTypes from "prop-types";
import classes from "./Catagory.module.css";
import {Link} from 'react-router-dom'

function CategoryCard({ data })
 { 
	return (
		<div className={classes.category}>

			<Link to={`/category/${data.name}`}
				href={data?.link}
				target="_blank"
				rel="noopener noreferrer"
			>
				<span>
					<h2>{data?.title}</h2>
				</span>
				<img src={data?.imgLink} alt={data.title} />
				<p className={classes.shopNow}>Shop now</p>
			</Link>
		</div>
	);
}



export default CategoryCard;
