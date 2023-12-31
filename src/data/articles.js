import React from "react";

function article_1() {
	return {
		date: "22 November 2023",
		title: "Article 1",
		description: "This is the description of article 1",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</>
		),
	};
}

function article_2() {
	return {
		date: "22 November 2023",
		title: "Article 2",
		description: "This is the description of article 2",
		style: ``,
		body: (
			<>
				<h1>Content of article 2</h1>
			</>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;