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

	return (
		<div className={styles.characters}>
			{props.isFetching ? 
				<div>...loading</div>
			:
			<>
				<img src={currentCharacter.image} alt="" />
				<div>name: {currentCharacter.name}</div>
				<div>status: {currentCharacter.status}</div>
				<div>species: {currentCharacter.species}</div>
				<div>gender: {currentCharacter.gender}</div>
				<div>origin: {currentCharacter.origin}</div>
				<div>location: {currentCharacter.location}</div>
				<button onClick={() => getCharacter(props.count)}>
					Get new character
				</button>
			</>
			}
		</div>
	)
}

export default Character;