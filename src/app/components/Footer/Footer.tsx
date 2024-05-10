import { IFooter } from "@/types/types";
import React from "react";

import styles from "./footer.module.scss";
import Logo from "../Logo/Logo";
import classNames from "classnames";

const Footer = (props: IFooter) => {
	const { title } = props;

	return (
		<footer className={styles.footer}>
			<div className={classNames(styles.container ,'footer__container')}>
			<Logo />
			<p>{title.description}</p>
			</div>
		</footer>
	);
};

export default Footer;
