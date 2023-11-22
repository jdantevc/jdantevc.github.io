import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		document.title = "Contact";
	}, []);

	return (
		<>
			<div className="page-content">
				<NavBar />
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
            Thank you for your interest in reaching out to me. I value your feedback, inquiries, and ideas. Should you have any specific questions or comments, please don't hesitate to contact me directly via email at [insert email address here]. I make every effort to respond to all messages within 24 hours, although it may take longer during peak periods.

            Alternatively, you can utilize the contact form available on my website to connect with me. Simply complete the necessary fields, and I'll endeavor to respond promptly. Additionally, if you prefer connecting through social media, you can find me on [insert social media platform here] under the username [insert username here]. I regularly share updates and engage with followers, so feel free to get in touch.

            Once again, thank you for your interest, and I'm eager to hear from you!
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