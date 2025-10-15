import React from "react";

// Define a general interface for any JSON-LD schema object
interface SchemaScriptProps {
	schema: object;
}

const SchemaScript: React.FC<SchemaScriptProps> = ({ schema }) => {
	const jsonLd = JSON.stringify(schema);

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: jsonLd }}
		/>
	);
};

export default SchemaScript;
