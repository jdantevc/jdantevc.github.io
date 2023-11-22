import React, { useEffect } from "react";

import NavBar from "../components/common/navBar.jsx";
import Footer from "../components/common/footer.jsx";
import Logo from "../components/common/logo.jsx";
import AllProjects from "../components/projects/allProjects";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		document.title = "Projects";
	}, []);
	return (
		<>
			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
							<div className="projects-logo">
								<Logo width={46} />
							</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							From lines of code to digital worlds: My Web Dev Labours
						</div>
						<div className="subtitle projects-subtitle">
						I have been actively engaged in a variety of projects over the past few months and 
						I am pleased with the advancements I have made. 
						Many of these projects are publicly available for exploration and contribution. 
						If you are interested in any of my projects, please do not hesitate to examine the code 
						and propose any improvements or enhancements that come to mind. 
						Collaboration with others is an excellent way to learn and evolve, 
						and I am always receptive to new ideas and feedback!
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;