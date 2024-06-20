import React from 'react'
import Landing from './Pages/Landing/Landing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Payment from './Pages/payment/Payment';
import Auth from './Pages/Auth/Auth';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
	"pk_test_51PMdVtGLbGC3OtcHJjp026OOyaDc7z6CGWGc8Uy0ovhfHSwuM54iMDcFNaKilQTc3DHPT8XyKEYN9NXOZt3sSBZR00QQBgq5Rc"
);
import ProtectedRoute from "./Components/protectedRoute/ProtectedRoute";

function Routing() {
  return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/auth" element={<Auth />} />
				<Route
					path="/payments"
					element={
						<ProtectedRoute
							msg={"You must log in to pay"}
							redirect={"/payments"}
							
						>
							<Elements stripe={stripePromise}>
								<Payment />
							</Elements>
						</ProtectedRoute>
					}
				/>
				<Route
					path="/orders"
					element={
						<ProtectedRoute
							msg={"You must log in to access your orders"}
							redirect={"/orders"}
						
						>
							<Elements stripe={stripePromise}>
								<Orders />
							</Elements>
						</ProtectedRoute>
					}
				/>
				<Route path="/category/:categoryName" element={<Results />} />
				<Route path="/products/:productId" element={<ProductDetail />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Router>
	);
}

export default Routing
