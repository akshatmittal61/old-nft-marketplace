import React from "react";
import Image from "next/image";
import images from "@/assets/images";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "header-notifications");

const HeaderNotifications: React.FC = () => {
	return (
		<div className={classes("")}>
			<Typography>Notifications</Typography>
			<div className={classes("-box")}>
				<div className={classes("-box-img")}>
					<Image
						src={images.user1}
						alt="user1"
						width={50}
						height={50}
					/>
				</div>
				<div className={classes("-box-content")}>
					<Typography as="h4">Akshat Mittal</Typography>
					<Typography as="address">Gibberish</Typography>
					<Typography as="small">7 minutes ago</Typography>
				</div>
				<div className={classes("-box-new")}></div>
			</div>
		</div>
	);
};

export default HeaderNotifications;
