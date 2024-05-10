"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./navigation.module.scss";
import classNames from "classnames";
import Menu from "./Menu";

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		if (!isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		if (isMenuOpen) {
			document.addEventListener("click", toggleMenu);
		} else {
			document.removeEventListener("click", toggleMenu);
		}

		return () => {
			document.removeEventListener("click", toggleMenu);
		};
	}, [isMenuOpen]);

	return (
		<div className={styles.navigation}>
			{/* desktop menu */}
			<nav className={styles.desktop}>
				<Menu />
			</nav>

			{/* mobile menu burger */}
			<div onClick={toggleMenu} className={styles.burger}>
				<span
					className={classNames(styles.span, { [styles.active]: isMenuOpen })}
				></span>
			</div>

			{/* mobile menu */}
			<nav
				ref={menuRef}
				className={classNames(styles.mobile, {
					[styles.active]: isMenuOpen,
				})}
			>
				<Menu />
			</nav>
		</div>
	);
};

export default Navigation;
