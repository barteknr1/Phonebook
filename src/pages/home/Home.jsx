import { Helmet, HelmetProvider } from "react-helmet-async";
import css from "./Home.module.css";
import FunFact from "../../components/FunFact/FunFact";

const Home = () => {
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>Welcome to Phonebook</title>
				</Helmet>
			</HelmetProvider>
			<div className={css.welcome}>
				<h1>Welcome to Phonebook</h1>
				<FunFact />
			</div>
		</>
	);
};

export default Home;
