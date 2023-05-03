import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowList from "../components/ShowList";
import { searchForShow } from "../helpers/showsHelper";

function Search() {
	const params = useParams();

	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const fetchResults = async () => {
			const shows = await searchForShow(params.searchText);
			setSearchResults(shows);
		};
		fetchResults();
	}, [params.searchText]);

	return (
		<>
			<h1>Search</h1>
			{searchResults.length > 0 ? (
				<ShowList shows={searchResults} />
			) : (
				<h2>No shows found</h2>
			)}
		</>
	);
}

export default Search;
