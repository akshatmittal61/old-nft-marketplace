import React, { useState } from "react";
import {
	FaFilter,
	FaAngleDown,
	FaAngleUp,
	FaWallet,
	FaMusic,
	FaVideo,
	FaImages,
	FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { Button } from "@/library";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";

const classes = stylesConfig(styles, "home-filters");

const Filter = () => {
	const [showFilter, setShowFilter] = useState(true);
	const [image, setImage] = useState(true);
	const [video, setVideo] = useState(true);
	const [music, setMusic] = useState(true);

	return (
		<div className={classes("")}>
			<div className={classes("-box")}>
				<div className={classes("-box-left")}>
					<Button>NFTs</Button>
					<Button>Arts</Button>
					<Button>Musics</Button>
					<Button>Sports</Button>
					<Button>Photography</Button>
				</div>
				<div className={classes("-box-right")}>
					<Button
						variant="filled"
						className={classes("-box-right-box")}
						onClick={() => setShowFilter((p) => !p)}
					>
						<FaFilter />
						<span>Filter</span>{" "}
						{showFilter ? <FaAngleDown /> : <FaAngleUp />}
					</Button>
				</div>
			</div>
			{showFilter ? (
				<div className={classes("-options")}>
					{/* <div className={classes("-option", "-option--active")}>
						<FaWallet /> <span>10 ETH</span>
					</div>
					<div
						className={classes("-option", {
							"-option--active": image,
						})}
						onClick={() => setImage((p) => !p)}
					>
						<FaImages /> <small>Images</small>
						{image ? <AiFillCloseCircle /> : null}
					</div>
					<div
						className={classes("-option", {
							"-option--active": video,
						})}
						onClick={() => setVideo((p) => !p)}
					>
						<FaVideo /> <small>Videos</small>
						{video ? <AiFillCloseCircle /> : null}
					</div>
					<div
						className={classes("-option", {
							"-option--active": music,
						})}
						onClick={() => setMusic((p) => !p)}
					>
						<FaMusic /> <small>Music</small>
						{music ? <AiFillCloseCircle /> : null}
					</div>
					<div className={classes("-option")}>
						<FaUserAlt /> <span>Verified</span>
						<MdVerified />
					</div> */}
					<Button
						icon={<FaWallet />}
						iconPosition="left"
						size="small"
						variant="filled"
					>
						10 ETH
					</Button>
					<Button
						icon={<FaImages />}
						iconPosition="left"
						size="small"
						variant={image ? "filled" : "outlined"}
						onClick={() => setImage((p) => !p)}
					>
						Images
						{image ? <AiFillCloseCircle /> : null}
					</Button>
					<Button
						icon={<FaVideo />}
						iconPosition="left"
						size="small"
						variant={video ? "filled" : "outlined"}
						onClick={() => setVideo((p) => !p)}
					>
						Videos
						{video ? <AiFillCloseCircle /> : null}
					</Button>
					<Button
						icon={<FaMusic />}
						iconPosition="left"
						size="small"
						variant={music ? "filled" : "outlined"}
						onClick={() => setMusic((p) => !p)}
					>
						Music
						{music ? <AiFillCloseCircle /> : null}
					</Button>
					<Button
						icon={<FaUserAlt />}
						iconPosition="left"
						size="small"
						variant="outlined"
					>
						Verified
						<MdVerified />
					</Button>
				</div>
			) : null}
		</div>
	);
};

export default Filter;
