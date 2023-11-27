import React from "react";
import { Filters, Hero, Services } from "@/components/Home";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/Home.module.scss";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => {
	return (
		<main className={classes("")}>
			<Hero />
			<Services />
			<Filters />
		</main>
	);
};

export default HomePage;
