import React from "react";

import NavBar from "../components/common/navBar.jsx";
import Footer from "../components/common/footer.jsx";
import Logo from "../components/common/logo.jsx";
import Project from "../components/projects/projects.jsx";

import "./styles/projects.css";

const Projects = () => {
	return (
		<>
			<div className="page-content">
				<NavBar />
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

							<div className="projects-project">
								<Project
									logo={
										"https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/ruby/ruby.png"
									}
									title="Tweetable"
									description="An app rooted in Twitter's model that allows users to create accounts, log in/out, create “tweets”, reply to other
									user’s tweets and check their profiles."
									linkText="View Project"
									link="https://github.com"
								/>
							</div>

							<div className="projects-project">
								<Project
									logo={
										"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
									}
									title="Eatable"
									description="An app that allows users to access a menu of dishes, authenticate and
									perform CRUD operations in direct communication with an external API."
									linkText="View Project"
									link="https://github.com"
								/>
							</div>
	
							<div className="projects-project">
								<Project
									logo={
										"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
									}
									title="Get-That-Home"
									description="A real estate platform connecting landlords and home-seekers. Landlords can list
									properties, and home-seekers can browse and filter listings."
									linkText="View Project"
									link="https://github.com"
								/>
							</div>

						</div>
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;