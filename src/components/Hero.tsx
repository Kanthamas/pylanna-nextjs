"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero: React.FC = () => {
	const container = useRef<HTMLDivElement | null>(null);
	const splitRef = useRef<SplitText | null>(null);
	const backgroundRef = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			if (splitRef.current) {
				splitRef.current.revert();
			}

			const split = SplitText.create(".text-animation", {
				type: "chars, words, lines",
			});
			splitRef.current = split;

			gsap.set(backgroundRef.current, {
				scaleX: 0,
				transformOrigin: "left center",
			});

			const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

			tl.from(split.chars, {
				y: 100,
				autoAlpha: 0,
				stagger: {
					amount: 1,
					from: "random",
					yoyo: true,
				},
				duration: 1.5,
			});

			tl.to(backgroundRef.current, {
				scaleX: 1,
				duration: 1,
			});
		},
		{ scope: container }
	);

	return (
		<div
			ref={container}
			className="flex flex-col max-w-8/10 mx-auto mt-8"
		>
			<div className="text-animation text-neutral-950 dark:text-neutral-100 font-bold text-6xl md:text-9xl lg:text-9 py-4">
				PyLanna
			</div>
			<div className="text-animation md:text-neutral-800 text-neutral-600 dark:text-neutral-300 md:font-semibold md:text-5xl text-3xl md:my-12 md:py-2 mb-8 mt-4">
				We are Python Community in{" "}
				<span className="block md:inline">Chiang Mai</span>
			</div>
			<div
				ref={backgroundRef}
				className="text-animation text-neutral-800 font-bold md:text-5xl text-3xl bg-cream-can-300 inline-block p-4"
			>
				Open House Meetup{" "}
				<span className="block my-2 md:inline md:my-0">
					on December 25, 2025
				</span>
				<Link
					href="https://maps.app.goo.gl/9Pw2XEFauEyFCUgi9"
					target="_blank"
					rel="noopener noreferrer"
					className="cursor-pointer hover:text-wine-berry-950 hover:italic text-4xl block md:inline md:text-5xl"
				>
					{" "}
					@ Builds CMU
				</Link>
			</div>
		</div>
	);
};

export default Hero;
