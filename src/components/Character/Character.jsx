import styles from "./Character.module.css";
import {useEffect} from "react";

const Character = (props) => {
	const currentCharacter = props.characters[props.currentCharacterId];
	const getCharacter = (count) => {
		let newId = Math.floor(Math.random() * (count - 1)) + 1;
		props.requestNewCharacter(newId, props.characters)
	}

	useEffect( () => {
		if(props.count === 0) {
			props.requestCharactersCount();
		}
		else {
			getCharacter(props.count);
		}
	}, [props.count])

	const getStatusColor = (status) => {
		switch(status) {
			case "Alive": return styles.green;
			case "Dead": return styles.red;
			default : return styles.gray;
		}
	}

	const getGenderColor = (status) => {
		switch(status) {
			case "Male": return styles.blue;
			case "Female": return styles.pink;
			default : return styles.gray;
		}
	}
	return (
		<div className={styles.characters}>
			{props.isFetching ? 
				<div className={styles.loading}>...loading</div>
			:
			<div className="container">
				<div className={styles.characters__inner}>
					<div className={styles.character}>
						<div className={styles.image}>
							<img src={currentCharacter.image} alt="" />
						</div>
						<div className={styles.info}>
							<div className={styles.name}>
								{currentCharacter.name} 
							</div>
							<div className={styles.status + " " + 
								getStatusColor(currentCharacter.status)}>
								{currentCharacter.status}
								<pre> - </pre>
								<span className={styles.gender + " " +
									getGenderColor(currentCharacter.gender)}> 
									{currentCharacter.species} 
								</span>
							</div>
							<div className={styles.origin}>
								<div className={styles.gray}>
									First seen in:
								</div>
								{currentCharacter.origin}
							</div>
							<div className={styles.location}>
								<div className={styles.gray}>
									Last known location:
								</div>
								{currentCharacter.location}
							</div>
						</div>
					</div>
					<div className={styles.button}>
						<button onClick={() => getCharacter(props.count)}>
							Get random character
						</button>
					</div>
				</div>
			</div>
			}
		</div>
	)
}

export default Character;