import React from "react";
import Card from "react-bootstrap/Card";
import styles from "../../styles/CompanyCard.module.css";

const CompanyCard = ({ comp }) => {
	return (
		<Card className={styles.card}>
			<Card.Body>
				<Card.Title>{comp.name}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">sn: {comp.sn}</Card.Subtitle>
				<Card.Text>{comp.address}</Card.Text>

				<Card.Subtitle className="mb-2 text-muted">
					Active: {comp.active === 1 ? "True" : "False"}
				</Card.Subtitle>
			</Card.Body>
		</Card>
	);
};

export default CompanyCard;
