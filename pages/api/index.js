// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fetch from "node-fetch";

export const getPHP = async (name) => {
	let h = new Headers([["Content-Type", "application/json"]]);
	return await fetch(`https://stark-bayou-20321.herokuapp.com/?name=${name}`, {
		method: "GET",
		headers: h,
	})
		.then((response) => {
			console.log("RES", response);
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(`BAD HTTP stuff`);
			}
		})
		.then((json) => {
			return json.results;
		});
};
