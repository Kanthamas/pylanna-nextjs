"use client";

import React from "react";

export type TeamMember = {
	avatar?: string; 
	avatarIcon?: string | React.ComponentType; 
	name: string;
	role?: string;
	company?: string;
	skills?: string[];
	bio?: string;
};

interface TeamCardProps {
	member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
	return (
		<div className="bg-white dark:bg-neutral-800 shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-transform transform hover:-translate-y-1 ring-3 ring-neutral-900">
			{member.avatar ? (
				<img
					src={member.avatar}
					alt={member.name}
					className="w-24 h-24 rounded-full object-cover mb-4 ring-2 ring-cream-can-300"
				/>
			) : member.avatarIcon ? (
				<div className="w-24 h-24 flex items-center justify-center text-5xl text-neutral-400 dark:text-neutral-500 mb-4 rounded-full bg-neutral-100 dark:bg-neutral-700  ring-2 ring-cream-can-300">
					{member.avatarIcon ? React.createElement(member.avatarIcon) : "?"}
				</div>
			) : (
				<div className="w-24 h-24 flex items-center justify-center text-5xl text-neutral-400 dark:text-neutral-500 mb-4 rounded-full bg-neutral-100 dark:bg-neutral-700">
					?
				</div>
			)}

			<h3 className="text-xl font-bold text-neutral-900 dark:text-cream-can-300">
				{member.name}
			</h3>
			<p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
				{member.role} @ {member.company}
			</p>

			<div className="flex flex-wrap justify-center gap-2 mb-2">
				{member.skills?.map((skill) => (
					<span
						key={skill}
						className="text-xs font-semibold px-2 py-1 bg-cream-can-300 text-wine-berry-950 rounded-full"
					>
						{skill}
					</span>
				))}
			</div>

			<p className="text-sm text-neutral-700 dark:text-neutral-200">
				{member.bio}
			</p>
		</div>
	);
};

export default TeamCard;
