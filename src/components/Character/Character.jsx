import styles from "./Character.module.css";
import {useEffect} from "react";

const Character = (props) => {
	const getNewCharacter = (count) => {
		let newId = Math.floor(Math.random() * count - 1);
		props.requestNewCharacter(newId)
	}

	useEffect( () => {
		if(props.count === 0) {
			props.requestCharactersCount();
		}
		else {
			getNewCharacter(props.count);
		}
	}, [props.count])

	return (
		<div className={styles.characters}>
			{props.isFetching ? 
				<div>...loading</div>
			:
			<>
				<img src={props.character.image} alt="" />
				<div>name: {props.character.name}</div>
				<div>status: {props.character.status}</div>
				<div>species: {props.character.species}</div>
				<div>gender: {props.character.gender}</div>
				<div>origin: {props.character.origin}</div>
				<div>location: {props.character.location}</div>
				<button onClick={() => getNewCharacter(props.count)}>
					New character
				</button>
			</>
			}
		</div>
	)
}

export default Character;