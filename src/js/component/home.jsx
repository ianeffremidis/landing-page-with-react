import React from "react";
import Cardo from "./Cardo/Cardo";
import Navigation from "./Navigation/Navigation";
import Jumbotron from "./Jumbotron/Jumbotron";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		
		<div className="text-center">
			<div>
				<Navigation />
			</div>
			<div>
				<Jumbotron />
			</div>
			<div className="d-flex">
				<Cardo />
				<Cardo />
				<Cardo />
				<Cardo />
			</div>
		
		</div>
	);
};

export default Home;
