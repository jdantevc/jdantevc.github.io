import React from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import "./styles/about.css";

const About = () => {
	return (
		<>
			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									I’m Dante Vasquez. I live in Peru, where I
									create digital worlds.
								</div>

								<div className="subtitle about-subtitle">
								A former lawyer with a passion for programming shifted careers after a 5-year legal journey. Fascinated by computers since childhood, I've dedicated time to self-study and completed a 6-month coding bootcamp recently. Seeking roles in web development—particularly in Ruby, JavaScript, and related frameworks—to swiftly progress from junior to a properly specialized developer. I truly value hands-on experience and seek opportunities for growth and contribution in the tech field.	
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
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

export default About;