import React from "react";
import Form from "react-bootstrap/Form";

const SearchForm = () => {
	return (
		<Form>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Search a company</Form.Label>
				<Form.Control type="search" placeholder="Enter company" />
			</Form.Group>
		</Form>
	);
};

export default SearchForm;
