"use client";

import React from "react";
import TeamCard from "@/components/team/TeamCard";
import { teamMembers } from "@/data/teamMember";

const TeamPage: React.FC = () => {
	return (
		<div className="max-w-6xl mx-auto px-4 ">
			<h1 className="text-4xl font-extrabold text-neutral-900 dark:text-cream-can-300 mb-4 text-center">
				Our Core Team
			</h1>
			<p className="text-center text-neutral-700 dark:text-neutral-300 mb-8">
				Meet the passionate people behind PyLanna Python Community.
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
				{teamMembers.map((member) => (
					<TeamCard
						key={member.name}
						member={member}
					/>
				))}
			</div>
		</div>
	);
};

export default TeamPage;
