import React from "react";
import Cardo from "./Cardo/Cardo";
import Jumbotron from "./Jumbotron/Jumbotron";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		
	<div id="body">
			<header class="container-fluid">
				<Navigation />
			</header>
			
		<div className="page">
			<div className="container-fluid">
				<div className="row p-3">
					<div className="col"><Jumbotron /></div>
				</div>
				<div className="row p-2 d-flex text-center justify-content-lg-between justify-content-center ">
				<Cardo/>
				<Cardo/>
				<Cardo/>
				<Cardo/>
				</div>
				
			</div>
		</div>	

		<footer class="container-fluid">
			<Footer/>
		</footer>
	</div>
	);
};

export default Home;
