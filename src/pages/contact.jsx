import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		document.title = `Contact | ${INFO.main.title}`;
	}, []);

	return (
		<>
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch!
						</div>

						<div className="subtitle contact-subtitle">
            Thank you for your interest in reaching out to me. I value your feedback, inquiries, and ideas. If you have any specific questions or comments, please don't hesitate to contact me directly via email at 
						&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods.
							Additionally, if you prefer connecting through social media, you can find me on{" "}
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.linkedin}
							</a> 
							. I regularly share updates and engage with followers, so feel free to get in touch.
            Once again, thank you for your interest, and I'm eager to hear from you!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;