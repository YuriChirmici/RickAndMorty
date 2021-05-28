import Character from "./Character";
import {connect} from "react-redux";
import {requestNewCharacter, requestCharactersCount} from "../../redux/characters-reducer";
import {getCurrentCharacter, getCharacters, getCharactersCount, getIsFetching} from "../../redux/characters-selectors";

const mapStateToProps = (state) => {
	return {
		currentCharacterId: getCurrentCharacter(state),
		characters: getCharacters(state),
		count: getCharactersCount(state),
		isFetching: getIsFetching(state),
	}
}

const mapDispatchToProps = {
	requestNewCharacter,
	requestCharactersCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Character)