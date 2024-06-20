import React, { useContext, useEffect } from "react";
import Routing from "./Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/actionType";
import { auth } from "./Utility/firebase";
// import "./App.css";

function App() {
	const [{ user }, dispatch] = useContext(DataContext);

	useEffect(() => {
		// console.log("Dispatch function:", dispatch);

		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: Type.SET_USER,
					user: authUser,
				});
			} else {
				dispatch({
					type: Type.SET_USER,
					user: null,
				});
			}
		});
	}, [dispatch]);

	return (
		<>
			<Routing />
		</>
	);
}

export default App;
