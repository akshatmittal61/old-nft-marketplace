import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "header");

const Header: React.FC = () => {
	return <header className={classes("")}></header>;
};

export default Header;
