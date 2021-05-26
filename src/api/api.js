import * as axios from "axios";

let instance = axios.create({
	baseURL: "https://rickandmortyapi.com/api/",
})

export const charactersAPI = {
	requestCharacter(characterId) {
		return instance.get("character/" + characterId)
			.then(response => response.data);
	},
	requestCharactersCount() {
		return instance.get("character")
			.then(response => response.data.info.count);
	}
}