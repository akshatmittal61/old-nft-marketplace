import React from "react";
import Link from "next/link";
import { helpCenterMenu } from "@/constants/header";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "header-helpcenter");

const HeaderHelpCenter: React.FC = () => {
	return (
		<div className={classes("")}>
			{helpCenterMenu.map((item, index) => (
				<div
					key={`header-helpcenter-menu-${index}`}
					className={classes("item")}
				>
					<Link href={item.path}>{item.name}</Link>
				</div>
			))}
		</div>
	);
};

export default HeaderHelpCenter;
