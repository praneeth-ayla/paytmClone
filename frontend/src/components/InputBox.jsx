import React from "react";

function InputBox({ label, placeholder, type }) {
	return (
		<div>
			<div className="py-2 text-sm font-medium text-left">{label}</div>
			<input
				type={type}
				id={label}
				placeholder={placeholder}
				className="w-full px-2 py-1 border rounded border-slate-200"
			/>
		</div>
	);
}

export default InputBox;
