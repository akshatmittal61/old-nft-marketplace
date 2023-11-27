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
import { TiTick } from "react-icons/ti";
import { Button } from "@/library";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";

const classes = stylesConfig(styles, "home-filters");

const Filter = () => {
	const [showFilter, setShowFilter] = useState(true);
	const [image, setImage] = useState(true);
	const [video, setVideo] = useState(true);
	const [music, setMusic] = useState(true);

	/* return (
		<div className={Style.filter}>
			<div className={Style.filter_box}>
				<div className={Style.filter_box_left}>
					<Button>NFTs</Button>
					<Button>Arts</Button>
					<Button>Musics</Button>
					<Button>Sports</Button>
					<Button>Photography</Button>
				</div>

				<div className={Style.filter_box_right}>
					<div
						className={Style.filter_box_right_box}
						onClick={() => setFilter((p) => !p)}
					>
						<FaFilter />
						<span>Filter</span>{" "}
						{filter ? <FaAngleDown /> : <FaAngleUp />}
					</div>
				</div>
			</div>

			{filter && (
				<div className={Style.filter_box_items}>
					<div className={Style.filter_box_items_box}>
						<div className={Style.filter_box_items_box_item}>
							<FaWallet /> <span>10 ETH</span>
							<AiFillCloseCircle />
						</div>
					</div>

					<div className={Style.filter_box_items_box}>
						<div
							className={Style.filter_box_items_box_item_trans}
							onClick={() => setImage((p) => !p)}
						>
							<FaImages /> <small>Images</small>
							{image ? <AiFillCloseCircle /> : <TiTick />}
						</div>
					</div>

					<div className={Style.filter_box_items_box}>
						<div
							className={Style.filter_box_items_box_item_trans}
							onClick={() => setVideo((p) => !p)}
						>
							<FaVideo /> <small>Videos</small>
							{video ? <AiFillCloseCircle /> : <TiTick />}
						</div>
					</div>

					<div className={Style.filter_box_items_box}>
						<div
							className={Style.filter_box_items_box_item_trans}
							onClick={() => setMusic((p) => !p)}
						>
							<FaMusic /> <small>Musics</small>
							{music ? <AiFillCloseCircle /> : <TiTick />}
						</div>
					</div>

					<div className={Style.filter_box_items_box}>
						<div className={Style.filter_box_items_box_item}>
							<FaUserAlt /> <span>Verified</span>
							<MdVerified />
						</div>
					</div>
				</div>
			)}
		</div>
	); */

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
					<div
						className={classes("-box-right-box")}
						onClick={() => setShowFilter((p) => !p)}
					>
						<FaFilter />
						<span>Filter</span>{" "}
						{showFilter ? <FaAngleDown /> : <FaAngleUp />}
					</div>
				</div>
			</div>
			{showFilter ? (
				<div className={classes("-options")}>
					<div className={classes("-option")}>
						<FaWallet /> <span>10 ETH</span>
						<AiFillCloseCircle />
					</div>
					<div className={classes("-option")}>
						<FaImages /> <small>Images</small>
						{image ? <AiFillCloseCircle /> : <TiTick />}
					</div>
					<div className={classes("-option")}>
						<FaVideo /> <small>Videos</small>
						{video ? <AiFillCloseCircle /> : <TiTick />}
					</div>
					<div className={classes("-option")}>
						<FaMusic /> <small>Musics</small>
						{music ? <AiFillCloseCircle /> : <TiTick />}
					</div>
					<div className={classes("-option")}>
						<FaUserAlt /> <span>Verified</span>
						<MdVerified />
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Filter;
