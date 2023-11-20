import React, { useState } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import Discover from "./Discover";
import HelpCenter from "./Helpcenter";
import Notifications from "./Notifications";
import Profile from "./Profile";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { TPaneComponent } from "@/types/header";

const classes = stylesConfig(styles, "header");

const Header: React.FC = () => {
	const [showSidePane, setShowSidePane] = useState(false);
	const [showPaneComponent, setShowPaneComponent] =
		useState<TPaneComponent>(null);

	const setPaneComponent = (component: TPaneComponent) => {
		setShowPaneComponent(component);
	};

	return (
		<header className={classes("")}>
			<div className={classes("-container")}>
				<div className={classes("-container-left")}>
					<div className={classes("-container-left__logo")}>
						<Image
							src="/favicon.png"
							alt="NFT Marketplace"
							width={100}
							height={100}
						/>
					</div>
					<div className={classes("-container-left__input")}></div>
				</div>
				<div className={classes("-container-right")}>
					<div className={classes("-container-discover")}>
						<Typography
							onClick={() => setPaneComponent("discover")}
						>
							Discover
						</Typography>
						{showPaneComponent === "discover" ? <Discover /> : null}
					</div>
					<div className={classes("-container-helpcenter")}>
						<Typography onClick={() => setPaneComponent("help")}>
							Help Center
						</Typography>
						{showPaneComponent === "help" ? <HelpCenter /> : null}
					</div>
					<div className={classes("-container-notifications")}>
						<Typography
							onClick={() => setPaneComponent("notifications")}
						>
							Notifications
						</Typography>
						{showPaneComponent === "notifications" ? (
							<Notifications />
						) : null}
					</div>
					<div className={classes("-container-profile")}>
						<Typography onClick={() => setPaneComponent("profile")}>
							Profile
						</Typography>
						{showPaneComponent === "profile" ? <Profile /> : null}
					</div>
					<div className={classes("-container-right__menu")}>
						<FiMenu onClick={() => setShowSidePane((p) => !p)} />
						{showSidePane ? (
							<div
								className={classes(
									"-container-right__menu-sidepane"
								)}
							>
								Side Pane
							</div>
						) : null}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
