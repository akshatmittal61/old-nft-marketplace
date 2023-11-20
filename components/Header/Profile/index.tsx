import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "@/assets/images";
import { profileMenu } from "@/constants/header";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "header-profile");

const HeaderProfile: React.FC = () => {
	return (
		<div className={classes("")}>
			<div className={classes("-account")}>
				<Image src={images.user1} alt="user1" width={50} height={50} />
				<div className={classes("-account-info")}>
					<Typography as="h4">Akshat Mittal</Typography>
					<Typography as="small">Gibberish</Typography>
				</div>
			</div>
			<div className={classes("-menu")}>
				{profileMenu.map((item, index) => (
					<Link
						href={item.path}
						key={`header-profile-menu-${index}`}
						className={classes("item")}
					>
						{item.icon}
						<Typography>{item.name}</Typography>
					</Link>
				))}
			</div>
		</div>
	);
};

export default HeaderProfile;
