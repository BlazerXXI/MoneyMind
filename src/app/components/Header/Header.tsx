import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./header.module.scss";
import classNames from "classnames";

const Header = () => {
	return (
		<header className={classNames(styles.header)}>
			<div className={classNames(styles.container, "header__container")}>
				<Logo />
				<Navigation />
			</div>
		</header>
	);
};

export default Header;
