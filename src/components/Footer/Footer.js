import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import styles from './footer.module.css';

const footer = (props) => (
	<Navbar bg="primary" variant="dark" className={styles.backg}>
		<Navbar.Brand href="#home">Footer</Navbar.Brand>
		<Nav className="mr-auto">
		<Nav.Link href="#home">Home</Nav.Link>
		</Nav>
	</Navbar>
);

export default footer;