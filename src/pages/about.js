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
									design digital experiences for us all.
								</div>

								<div className="subtitle about-subtitle">
                Greetings! I'm Dante Vasquez Cruz—a seasoned lawyer turned passionate web developer. Despite my successful 5-year career in law after 6 years of study, my true passion for programming led me to make a dynamic career shift.
                From an early age, I was captivated by computers, a fascination that continued throughout my legal journey. Engaging with IT professionals within the legal field illuminated my path, propelling me to embrace coding wholeheartedly.
                Driven by my love for learning, I dedicated a year to self-study, followed by a transformative 6-month "Codeable" bootcamp. Now, I'm on the hunt for a role that nurtures my growth in web development, particularly in Ruby, JavaScript, and related frameworks. My goal is to swiftly transition from junior to senior developer by immersing myself in valuable experiences.

                Passionate about gaining hands-on experience, I believe it's the catalyst for effective progression. If you're seeking a dedicated, adaptable professional who thrives on excellence, I'm eager to explore opportunities where I can contribute and continue evolving in the world of web development!
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