import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from './loader.module.scss'

const Loader = () => {
	return (
		<div className={styles.backdrop}>
			<AiOutlineLoading3Quarters
				className={styles.loader}
				color='#fff'
				size='3rem'
			/>
		</div>
	);
};

export default Loader;
