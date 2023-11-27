import React from "react";
import Image from "next/image";
import { Button, Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "home-hero");

const HomeHero: React.FC = () => {
	return (
		<section className={classes("")}>
			<div className={classes("-box")}>
				<div className={classes("-box-left")}>
					<Typography size="lg" weight="bold" as="h1">
						Discover, collect, and sell NFTs 🖼️
					</Typography>
					<Typography size="md" weight="regular" as="p">
						Discover the most outstanding NTFs in all topics of
						life. Creative your NTFs and sell them
					</Typography>
					<Button
						className={classes("-box-left-btn")}
						variant="filled"
					>
						Start your search
					</Button>
				</div>
				<div className={classes("-box-right")}>
					<Image
						src="/images/hero.png"
						alt="Hero section"
						width={500}
						height={500}
					/>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
