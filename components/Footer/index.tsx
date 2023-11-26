import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@/library";
import socials from "@/constants/socials";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "footer");

const Footer: React.FC = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: any) => {
		e?.preventDefault();
		alert("You have subscribed to our newsletter!");
	};

	return (
		<footer className={classes("")}>
			<div className={classes("-top")}>
				<div className={classes("-left")}>
					<Image
						src="/favicon.png"
						alt="NFT Marketplace"
						width={100}
						height={100}
					/>
				</div>
				<div className={classes("-right")}>
					<nav className={classes("-nav")}>
						<Typography as="h1" size="head-2">
							Contact Us
						</Typography>
						<div className={classes("-socials")}>
							{socials.map((social, index) => (
								<a
									key={`social-${index}`}
									href={social.link}
									target="_blank"
									rel="noreferrer"
								>
									{social.icon}
								</a>
							))}
						</div>
					</nav>
					<form className={classes("-form")} onSubmit={handleSubmit}>
						<input
							type="email"
							name="email"
							id="subscribe-email"
							value={email}
							placeholder="Enter your email address"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<button
							type="submit"
							className={classes("-form-button")}
						>
							Subscribe Now!
						</button>
					</form>
				</div>
			</div>
			<div className={classes("-bottom")}>
				<Typography size="xs">
					© 2023 - 2024 by The three musketeers.
				</Typography>
			</div>
		</footer>
	);
};

export default Footer;
