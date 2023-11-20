import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "footer");

const Footer: React.FC = () => {
	return <footer className={classes("")}></footer>;
};

export default Footer;
