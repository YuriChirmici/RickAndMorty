import Character from "./Character";
import {connect} from "react-redux";
import {requestNewCharacter, requestCharactersCount} from "../../redux/characters-reducer";
import {getCharacter, getCharactersCount, getIsFetching} from "../../redux/characters-selectors";

const mapStateToProps = (state) => {
	return {
		character: getCharacter(state),
		count: getCharactersCount(state),
		isFetching: getIsFetching(state),
	}
}

const mapDispatchToProps = {
	requestNewCharacter,
	requestCharactersCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Character)