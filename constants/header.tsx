import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff } from "react-icons/tb";

interface IHeaderMenu {
	icon?: any;
	name: string;
	path: string;
}

export const discoverMenu: IHeaderMenu[] = [
	{
		name: "Collection",
		path: "/collection",
	},
	{
		name: "Search",
		path: "/search",
	},
	{
		name: "Author Profile",
		path: "/author-profile",
	},
	{
		name: "NFT Details",
		path: "/NFT-details",
	},
	{
		name: "Account Setting",
		path: "/account-setting",
	},
	{
		name: "Connect Wallet",
		path: "/connect-wallet",
	},
	{
		name: "Blog",
		path: "/blog",
	},
];

export const helpCenterMenu: IHeaderMenu[] = [
	{
		name: "About",
		path: "/about",
	},
	{
		name: "Contact Us",
		path: "/contact-us",
	},
	{
		name: "Sign Up",
		path: "/sign-up",
	},
	{
		name: "Sign In",
		path: "/sign-in",
	},
	{
		name: "Subscription",
		path: "/subscription",
	},
];

export const profileMenu: IHeaderMenu[] = [
	{
		icon: <FaUserAlt />,
		name: "My Profile",
		path: "/my-profile",
	},
	{
		icon: <FaRegImage />,
		name: "My Items",
		path: "/my-items",
	},
	{
		icon: <FaUserEdit />,
		name: "Edit Profile",
		path: "/edit-profile",
	},
	{
		icon: <MdHelpCenter />,
		name: "Help",
		path: "/help",
	},
	{
		icon: <TbDownloadOff />,
		name: "Disconnect Wallet",
		path: "/disconnect-wallet",
	},
];
