import React from "react";

import "../styles/logo.css";

const Logo = (props) => {
	const { width } = props;

	return (
		<>
			<img src="logo.png" alt="logo" className="logo" width={width} />
		</>
	);
};

export default Logo;