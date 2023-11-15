import React, { useState, useEffect } from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Education from "../components/homepage/education";
import Footer from "../components/common/footer";

import "./styles/homepage.css";


const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
			window.addEventListener("scroll", handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize]);

	const handleScroll = () => {
		let scroll = Math.round(window.scrollY, 2);

		let newLogoSize = 80 - (scroll * 4) / 10;

		if (newLogoSize < oldLogoSize) {
			if (newLogoSize > 40) {
				setLogoSize(newLogoSize);
				setOldLogoSize(newLogoSize);
				setStayLogo(false);
			} else {
				setStayLogo(true);
			}
		} else {
			setLogoSize(newLogoSize);
			setStayLogo(false);
		}
	};

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<>
			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-title">
							Full-stack web and mobile app developer, and e-sports enthusiast.
						</div>
					</div>
					<div className="homepage-subtitle">
							I'm a full-stack web developer fueled by a lifelong passion for technology and with a background in law. Problem solver with great
communication skills and stakeholder management. Committed to sustained growth, I seek opportunities to evolve as a software
developer, working on creative solutions and projects that impact the day to day life of users.
						</div>

						<div className="homepage-socials">
							<FontAwesomeIcon
								icon={faGithub}
								className="homepage-social-icon"
							/>
							<FontAwesomeIcon
								icon={faLinkedin}
								className="homepage-social-icon"
							/>
							<FontAwesomeIcon
								icon={faMailBulk}
								className="homepage-social-icon"
							/>
						</div>

						<div className="homepage-after-title">
							<div className="homepage-articles">
								<div className="homepage-article">
									<Article
										date="September 1, 2020"
										title="How to build a REST API with Node.js and Express"
										description="Learn how to build a REST API with Node.js and Express"
										link="https://www.google.com"
									/>
								</div>
								<div className="homepage-article">
									<Article
										date="September 1, 2020"
										title="How to build a REST API with Node.js and Express"
										description="Learn how to build a REST API with Node.js and Express"
										link="https://www.google.com"
										className="homepage-article"
									/>
								</div>
							</div>
						

							<div className="homepage-education">
								<Education />
							</div>
						</div>
						<div className="homepage-footer">
							<Footer />
						</div>
						
				</div>
			</div>
		</>
	);
};


export default Homepage;