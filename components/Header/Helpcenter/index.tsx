import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "header-helpcenter");

const HeaderHelpCenter: React.FC = () => {
	return <div className={classes("")}></div>;
};

export default HeaderHelpCenter;
