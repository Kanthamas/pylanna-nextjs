import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mainNav } from "@/config/navigation";
import { FaFacebook } from "react-icons/fa6";

const Header: React.FC = () => {
	const linkClasses =
		"p-2 border-b-2 border-transparent hover:border-cream-can-400 transition cursor-pointer hover:font-semibold";

	const navLinkClasses =
		"text-wine-berry-700 hover:text-wine-berry-950 transition-colors";

	return (
		<header className="sticky top-0 z-10 w-full bg-wine-berry-50 dark:bg-neutral-950 shadow-lg py-4  px-8 flex justify-between items-center border-b border-wine-berry-100 dark:border-neutral-600">
			<Link
				href="/"
				className="flex items-center space-x-3"
			>
				<Image
					src="/logo.png"
					alt="PyLanna Logo"
					width={40}
					height={40}
					className="rounded-full"
				/>

				<h1 className="text-2xl font-extrabold text-wine-berry-950 dark:text-cream-can-300">
					PyLanna
				</h1>
			</Link>

			{/* <nav className="text-lg font-medium text-wine-berry-700 hidden md:block">
				<span className={`${linkClasses} ml-6`}>Meetups</span>
				<span className={`${linkClasses} ml-6`}>Blog</span>
				<span className={`${linkClasses} ml-6`}>About</span>
				<span className={`${linkClasses} ml-6`}>Contact</span>
			</nav> */}
			<div className="flex items-center gap-4 text-lg font-medium">
				<nav className=" text-wine-berry-950 hidden md:flex items-center gap-4 ">
					{mainNav.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className={`${linkClasses} ${navLinkClasses} dark:text-neutral-300 dark:hover:text-cream-can-400`}
						>
							{item.label}
						</Link>
					))}
				</nav>

				{/* Action Button Placeholder */}
				<Link
					href="https://www.facebook.com/groups/1181951933835645"
					target="_blank"
					rel="noopener noreferrer"
					className={`${linkClasses} ${navLinkClasses} text-xl dark:text-neutral-300 dark:hover:text-cream-can-400`}
				>
					<FaFacebook />
				</Link>
			</div>
		</header>
	);
};

export default Header;
