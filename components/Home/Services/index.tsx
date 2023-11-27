import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Typography } from "@/library";

const classes = stylesConfig(styles, "home-services");

const HomeServices: React.FC = () => {
	return (
		<section className={classes("")}>
			<div className={classes("-box")}>
				{[
					{
						title: "Filter & Discover",
						description:
							"Connect with wallet, discover, buy NTFs, sell your NFTs and earn money",
					},
					{
						title: "Filter & Discover",
						description:
							"Connect with wallet, discover, buy NTFs, sell your NFTs and earn money",
					},
					{
						title: "Connect Wallet",
						description:
							"Connect with wallet, discover, buy NTFs, sell your NFTs and earn money",
					},
					{
						title: "Start trading",
						description:
							"Connect with wallet, discover, buy NTFs, sell your NFTs and earn money",
					},
				].map((item, index) => (
					<div
						className={classes("-box-item")}
						key={`home-services-${index}`}
					>
						<div className={classes("-box-item-icon")}>
							<Image
								src={`/images/service-${index + 1}.png`}
								alt={item.title}
								width={500}
								height={500}
							/>
						</div>
						<Typography className={classes("-box-item-step")}>
							Step {index + 1}
						</Typography>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default HomeServices;
