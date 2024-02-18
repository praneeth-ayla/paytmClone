import React from "react";

function Button({ label }) {
	return (
		<div className="pt-5">
			<a
				href="#_"
				className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none">
				{label}
			</a>
		</div>
	);
}

export default Button;
