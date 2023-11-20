interface IHeaderMenu {
	name: string;
	path: string;
}

export const discoverMenu: IHeaderMenu[] = [
	{
		name: "Collection",
		path: "collection",
	},
	{
		name: "Search",
		path: "search",
	},
	{
		name: "Author Profile",
		path: "author-profile",
	},
	{
		name: "NFT Details",
		path: "NFT-details",
	},
	{
		name: "Account Setting",
		path: "account-setting",
	},
	{
		name: "Connect Wallet",
		path: "connect-wallet",
	},
	{
		name: "Blog",
		path: "blog",
	},
];

export const helpCenterMenu: IHeaderMenu[] = [
	{
		name: "About",
		path: "about",
	},
	{
		name: "Contact Us",
		path: "contact-us",
	},
	{
		name: "Sign Up",
		path: "sign-up",
	},
	{
		name: "Sign In",
		path: "sign-in",
	},
	{
		name: "Subscription",
		path: "subscription",
	},
];
