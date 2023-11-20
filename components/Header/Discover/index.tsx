import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { discoverMenu } from "@/constants/header";
import Link from "next/link";

const classes = stylesConfig(styles, "header-discover");

const HeaderDiscover: React.FC = () => {
	return (
		<div className={classes("")}>
			{discoverMenu.map((item, index) => (
				<div
					key={`header-discover-menu-${index}`}
					className={classes("item")}
				>
					<Link href={item.path}>{item.name}</Link>
				</div>
			))}
		</div>
	);
};

export default HeaderDiscover;
