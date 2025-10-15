export type NavItem = {
	label: string;
	href: string;
};

// 2. Define the main navigation array (for the Header)
export const mainNav: NavItem[] = [
	{
		label: "Meetups",
		href: "/",
	},
	{
		label: "Blog",
		href: "/",
	},
	{
		label: "About",
		href: "/",
	},
	{
		label: "Contact",
		href: "/",
	},
];

// 3. Define the external social/community links (optional, for Footer)
// export const communityLinks: NavItem[] = [
// 	{
// 		label: "GitHub",
// 		href: "https://github.com/PyLanna-Community",
// 	},
// 	{
// 		label: "Discord",
// 		href: "https://discord.gg/PyLanna",
// 	},
// 	{
// 		label: "Contact",
// 		href: "mailto:contact@pylanna.org",
// 	},
// ];
