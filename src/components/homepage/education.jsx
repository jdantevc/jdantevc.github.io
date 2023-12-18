import React from "react";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/education.css";

const Education = () => {
	return (
		<div className="education">
			<Card
				icon={faSchool}
				title="Education"
				body={
					<div className="education-body">
						<div className="education">
							<img
								src="./unmsm.png"
								alt="unmsm"
								className="education-image"
							/>
							<div className="education-title">UNMSM</div>
							<div className="education-subtitle">
								Lawyer
							</div>
							<div className="education-duration">2013 - 2018</div>
						</div>

						<div className="education">
							<img
								src="./codeable.png"
								alt="codeable"
								className="education-image"
							/>
							<div className="education-title">Codeable</div>
							<div className="education-subtitle">
								Full-stack web developer
							</div>
							<div className="education-duration">May - Oct 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Education;