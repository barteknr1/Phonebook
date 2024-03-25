import css from "./FunFact.module.css";
import phone from "../../images/phone.jpg";

const FunFact = () => {
	return (
		<>
			<h2 className={css.funFact}>
				Did you know that the first phone greeting was actually “Ahoy”?
			</h2>
			<img src={phone} alt="Vintage telephone picture" className={css.phone} />
		</>
	);
};

export default FunFact;
