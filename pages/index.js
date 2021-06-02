import React from "react";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CompanyCard from "../components/CompanyCard";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Pagination from "react-bootstrap/Pagination";
import { getPHP } from "./api";

export default function Home() {
	const [data, setData] = React.useState([]);
	const [state, setState] = React.useState("");
	const [pageData, setpageData] = React.useState([]);
	const [pageCount, setpageCount] = React.useState(0);

	React.useEffect(() => {
		async function getData() {
			if (data !== "") {
				// get data
				const tmpData = await getPHP(state);
				setData([...tmpData]);
			}
		}
		getData();
	}, [state]);

	React.useEffect(() => {
		setpageCount(Math.ceil(data.length / 10));

		const tmpPageData = data.filter((company, index) => {
			if (Math.ceil((index + 1) / 10) === Number(1)) {
				return company;
			}
		});
		setpageData(tmpPageData);
	}, [data]);

	const handleChange = (e) => {
		console.log(e.target.value);
		setState(e.target.value);
	};

	const handlePageChange = (e) => {
		const tmpPageData = data.filter((company, index) => {
			if (Math.ceil((index + 1) / 10) === Number(e.target.innerText)) {
				return company;
			}
		});

		setpageData(tmpPageData);
	};

	return (
		<div className={styles.container}>
			<Navbar bg="dark" variant="dark" style={{ width: "100%" }}>
				<div className={styles.navbarContent}>
					<Navbar.Brand href="#">Stokkur</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="#">Search Companies</Nav.Link>
					</Nav>
				</div>
			</Navbar>

			{/* Content */}
			<div className={styles.main}>
				{/* Search Feature */}
				<div className={styles.searchForm}>
					<Form style={{ maxWidth: "55rem" }}>
						<Form.Group>
							<Form.Label>Search a company</Form.Label>
							<Form.Control
								type="search"
								placeholder="Enter company"
								onChange={handleChange}
							/>
						</Form.Group>
					</Form>
				</div>
				<div className={styles.cards}>
					{/* List the companies */}
					{pageData.map((comp, index) => {
						return <CompanyCard key={comp.sn} comp={comp} />;
					})}
				</div>

				<div className={styles.pagination}>
					<Pagination onClick={handlePageChange}>
						{
							// Make array of 1 to n
							[...Array(pageCount).keys()]
								.map((e) => e + 1)
								.map((pageNr) => {
									return <Pagination.Item>{pageNr}</Pagination.Item>;
								})
						}
					</Pagination>
				</div>
			</div>
		</div>
	);
}
