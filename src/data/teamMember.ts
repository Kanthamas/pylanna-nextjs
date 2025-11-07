import { FaUserAstronaut } from "react-icons/fa6";
import { TeamMember } from "@/components/team/TeamCard";

export const teamMembers: TeamMember[] = [
	{
		avatar: "/photos/piti.jpeg",
		name: "Piti Champeethong (Fyi)",
		role: "Senior Consulting Engineer",
		company: "MongoDB",
		skills: ["#MongoDB", "#Azure", "#Python", "#DevOps"],
		bio: "I love to learn and share tech knowledge to help tech and non-tech people.",
	},
	{
		avatarIcon: FaUserAstronaut,
		name: "Patchara (Jin)",
		role: "Chief Information Officer",
		company: "I GEAR GEEK Co.,Ltd.",
		skills: [],
		bio: "",
	},
	{
		avatar: "/photos/tananut.JPG",
		name: "Tananut Panyagosa (Tong)",
		role: "Chief Technology Officer",
		company: "Paiduaykanmai Co., Ltd. (PDKM)",
		skills: [
			"#CloudArchitecture",
			"#GCP",
			"#Microservices",
			"#Golang",
			"#Blockchain",
			"#Web3",
			"#DeFi",
			"#SaaS",
			"#Startups",
		],
		bio: "I love scaling tech ideas into real-world solutions. Passionate about building great engineering teams and architecting platforms that connect business goals with clean, efficient code.",
	},
	{
		avatar: "/photos/kanthamas.jpg",
		name: "Kanthamas Iamrhod (Mean)",
		role: "Journey Instructor",
		company: "Generation Thailand",
		skills: ["#Education", "#FullStack", "#WebDev", "#DataAnalyst"],
		bio: "Curious about how people learn — and how curiosity itself sparks community. Always excited to share, teach, and learn together.",
	},
];
