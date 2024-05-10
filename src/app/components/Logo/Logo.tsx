import Link from "next/link";
import React from "react";
import styles from "./logo.module.scss";
import Image from "next/image";

const Logo = (props: { classList?: string }) => {
	const { classList } = props;
	return (
		<Link href="/" className={`${styles.logoLink} ${classList}`}>
			<Image
				src={"/_f7b17f0f-89cb-4a9d-9ab2-543079a8dec1.jpeg"}
				width={30}
				height={30}
				alt={"MoneyMind logo"}
			/>
			<Image
				src={"/logo.svg"}
				width={100}
				height={30}
				alt={"MoneyMind logo"}
			/>
		</Link>
	);
};

export default Logo;
