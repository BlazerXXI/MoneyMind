import Link from "next/link";
import React from "react";
import styles from "./navigation.module.scss";

const Menu = () => {
	return (
		<ul className={styles.menu}>
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/About">About</Link>
			</li>
			<li>
				<Link href="/Contact">Contact</Link>
			</li>
		</ul>
	);
};

export default Menu;
