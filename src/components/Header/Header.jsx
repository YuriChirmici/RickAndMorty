import styles from "./Header.module.css";

const Header = (props) => {
	return (
		<header className={styles.header}>
			<div className="container">
				<h1>Rick and Morty</h1>
			</div>
		</header>
	)
}

export default Header;