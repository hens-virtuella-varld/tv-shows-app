import showsData from "../shows-data";

const defaultImg = { medium: "https://via.placeholder.com/210x295?text=:(" };

function transformShow(show) {
	const transformedShow = { ...show, image: show.image || defaultImg };
	return transformedShow;
}

export async function getShowByID(id) {
	const response = await fetch("https://api.tvmaze.com/shows/" + id);
	const showData = await response.json();
	return showData;
}

export function getHomeShows() {
	return showsData;
}

export async function searchForShow(text) {
	const response = await fetch(`http://api.tvmaze.com/search/shows?q=${text}`);
	const jsonData = await response.json();
	const showResults = jsonData.map((el) => transformShow(el.show));
	return showResults;
}
