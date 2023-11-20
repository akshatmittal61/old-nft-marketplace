import React from "react";
import { GrClose } from "react-icons/gr";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import Image from "next/image";
import images from "@/assets/images";

const classes = stylesConfig(styles, "sidebar");

const SideBar: React.FC = () => {
	return (
		<aside className={classes("")}>
			<GrClose className={classes("-closebtn")} />
			<div className={classes("-box")}>
				<Image src={images.logo} alt="logo" width={150} height={150} />
			</div>
		</aside>
	);
};

export default SideBar;
