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
				<Cardo title="George" text="Lorem blabla yusuf boaasgagsasia asdjas"/>
				<Cardo title="Takis" text="Lorem basd yusuf boasia asdjasaeraeraera aer"/>
				<Cardo title="Bill" text="Lorem blabla yusuf boasia asdasdadasdasdjas"/>
				<Cardo title="Kostas" text="Lorem blaasdadyusuf boasiasdasdasdaasda asdjas"/>
				<Cardo title="Caca" text="Lorem blabla yusugasgasgf boasia asdjas"/>
				<Cardo title="Pupou" text="Loremasdasdbla yusuf boasia asdjas"/>
				<Cardo title="vasvas" text="Loreasddbla yuasdadasdasuf boasia asdjas"/>
				<Cardo title="PKers" text="Loreasddbla yusuf boasia asdjasdasdasdasdaas"/>
				
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
