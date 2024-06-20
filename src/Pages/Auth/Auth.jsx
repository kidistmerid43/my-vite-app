import React, { useState, useContext } from "react";
import classes from "./signUP.module.css";
import { auth } from "../../Utility/firebase";
import {
	Link,
	useNavigate  
	, useLocation
} from "react-router-dom";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/actionType";
import { ClipLoader } from "react-spinners";



function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState({
		signIn: false,
		signUp: false,
	});

	const [{ user }, dispatch] = useContext(DataContext);
	const navigate = useNavigate();
	const navStateData = useLocation();
	console.log(navStateData);

	const authHandler = async (e) => {
		e.preventDefault();
		console.log(e.target.name);
		if (e.target.name == "signIn") {
			setLoading({ ...loading, signIn: true });
			signInWithEmailAndPassword(auth, email, password)
				.then((userInfo) => {
					dispatch({
						type: Type.SET_USER,
						user: userInfo.user,
					});
					setLoading({ ...loading, signIn: false });
					navigate(
						navStateData?.state?.redirect ||
						"/"
					);
				})
				.catch((err) => {
					setError(err.message);
					setLoading({ ...loading, signIn: false });
				});
		} else {
			setLoading({ ...loading, signUp: true });
			createUserWithEmailAndPassword(auth, email, password)
				.then((userInfo) => {
					dispatch({
						type: Type.SET_USER,
						user: userInfo.user,
					});
					setLoading({ ...loading, signUp: false });
					navigate(
						navStateData?.state?.redirect ||
						"/"
					);
				})
				.catch((err) => {
					setError(err.message);
					setLoading({ ...loading, signUp: false });
				});
		}
	};

	return (
		<section className={classes.login}>
			<Link to="/">
				<img
					src="https://th.bing.com/th/id/OIP.8t_KUtP9sJbR6ZTkrwj5agHaCL?w=505&h=149&rs=1&pid=ImgDetMain"
					alt="Amazon Logo"
				/>
			</Link>
			<div className={classes.login_container}>
				<h1>Sign In</h1>
				{/* <form action=""> */}
				{navStateData.state?.msg && (
					<small
						style={{
							padding: "5px",
							textAlign: "center",
							color: "red",
							fontWeight: "bold",
						}}
					>
						{navStateData.state.msg}
					</small>
				)} 
				 {/* <form onSubmit={handleSignInClick}/>  */}
				<form action="">
					<div>
						<label htmlFor="email">Email</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							id="email"
							required
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="password"
							required
						/>
					</div>
					<button
						type="submit"
						onClick={authHandler}
						name="signIn"
						className={classes.login_signInButton}
					>
						{loading.signIn ? (
							<ClipLoader color="#000" size={15}></ClipLoader>
						) : (
							"Sign In"
						)}
					</button>
				</form>
				<p>
					By signing in to FAKE Amazon, you agree to FAKE Amazon's Terms and
					Conditions.
				</p>
				<button
					type="button"
					onClick={authHandler}
					name="signup"
					className={classes.login_registerButton}
				>
					{loading.signUp ? (
						<ClipLoader color="#000" size={15} />
					) : (
						"Create your Amazon Account"
					)}
				</button>
				{error && (
					<p
						style={{ paddingTop: "5px", color: "red" }}
						className={classes.error}
					>
						{error}
					</p>
				)}
			</div>
		</section>
	);
}

export default Auth;
