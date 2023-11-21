import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import Image from "next/image";
import images from "@/assets/images";
import { Button, Typography } from "@/library";
import socials from "@/constants/socials";
import { TPaneComponent } from "@/types/header";
import HeaderDiscover from "../Header/Discover";
import HeaderHelpCenter from "../Header/Helpcenter";

interface ISideBar {
	setShowSidePane: (_: boolean) => void;
}

const classes = stylesConfig(styles, "sidebar");

const SideBar: React.FC<ISideBar> = ({ setShowSidePane }) => {
	const [showPaneComponent, setShowPaneComponent] =
		useState<TPaneComponent>(null);

	const setPaneComponent = (component: TPaneComponent) => {
		setShowPaneComponent(component);
	};

	return (
		<aside className={classes("")}>
			<GrClose
				className={classes("-closebtn")}
				onClick={() => setShowSidePane(false)}
			/>
			<div className={classes("-box")}>
				<Image src={images.logo} alt="logo" width={150} height={150} />
				<Typography as="p">
					Discover the most outstanding articles on all topices of NFT
					& write your own stories and share them
				</Typography>
				<div className={classes("-socials")}>
					{socials.map((social, index) => (
						<a
							href={social.link}
							key={`sidebar-social-${index}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							{social.icon}
						</a>
					))}
				</div>
			</div>
			<div className={classes("-menu")}>
				<div className={classes("-container-discover")}>
					<Typography onClick={() => setPaneComponent("discover")}>
						Discover
					</Typography>
					{showPaneComponent === "discover" ? (
						<HeaderDiscover />
					) : null}
				</div>
				<div className={classes("-container-helpcenter")}>
					<Typography onClick={() => setPaneComponent("help")}>
						Help Center
					</Typography>
					{showPaneComponent === "help" ? <HeaderHelpCenter /> : null}
				</div>
			</div>
			<div className={classes("-button")}>
				<Button>Create</Button>
				<Button>Connect Wallet</Button>
			</div>
		</aside>
	);
};

export default SideBar;
