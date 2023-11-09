import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";
import { useEffect } from "react";
import { auth } from "./Firebase";
import Payment from "./Components/Payment";
import Orders from "./Components/Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
	"pk_test_51NyKq3GJRyoEfX18ICWnv36PK0aHfiklFnDBUHv6mlhUWPnhWuGAXeIC0vl0dHuUPSQiPgjUx0m8oD6MweZ33VcR00KmHix3tw"
);

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/Login" element={<Login />} />
					<Route
						path="/"
						element={
							<>
								<Header /> <Home />
							</>
						}
					/>
					<Route
						path="/orders"
						element={
							<>
								<Header /> <Orders />
							</>
						}
					/>
					<Route
						path="/payment"
						element={
							<Elements stripe={promise}>
								<>
									<Header />

									<Payment />
								</>
							</Elements>
						}
					/>
					<Route
						path="/Checkout"
						element={
							<>
								<Header /> <Checkout />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}
export default App;
