// Define the interface for strong typing the schema object
export interface OrganizationSchema {
	"@context": "https://schema.org";
	"@type": "Organization";
	name: string;
	url: string;
	logo: string;
	description: string;
	location: {
		"@type": "Place";
		address: {
			"@type": "PostalAddress";
			addressLocality: string;
			addressRegion: string;
			addressCountry: string;
		};
	};
}

// The actual schema data object
export const organizationSchema: OrganizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "PyLanna",
	url: "https://www.pylanna.org",
	logo: "https://www.pylanna.org/logo.png",
	description:
		"Chiang Mai's open and diverse Python community for Thai and international developers.",
	location: {
		"@type": "Place",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Chiang Mai",
			addressRegion: "Chiang Mai",
			addressCountry: "TH",
		},
	},
};
