import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "header-discover");

const HeaderDiscover: React.FC = () => {
	return <div className={classes("")}></div>;
};

export default HeaderDiscover;