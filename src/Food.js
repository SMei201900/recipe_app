import React, { useState } from "react";
import axios from "axios";
import "./Food.css";

export default function Food() {
	let [word, setWord] = useState("");

	function handleResponse(response) {
		console.log(response);
	}

	function search(event) {
		event.preventDefault();
		apiID = `6a2ac39a`;
		let apiKey = `6ab8046c942dd274ff215bc782a736fc`;
		let apiURL = `https://api.edamam.com/search?q=${word}&app_id=${apiID}&app_key=${apiKey}&" `;
		axios.get(apiURL).then(handleResponse);
	}

	function handleWordChange(event) {
		setWord(event.target.value);
	}

	return (
		<div className="Food">
			<div className="searchEngine">
				<form onSubmit={search}>
					<input
						type="search"
						autoFocus={true}
						onChange={handleWordChange}
						placeholder="Search recipe..."
					/>
				</form>
			</div>
			<div className="hint">Suggested words: chicken, egg</div>
		</div>
	);
}
