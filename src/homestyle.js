import styled from "styled-components";
import BannerImg from "./image/logos/tree.jpg";

export const Pagebody = styled.div`
	padding-left: 2%;
	max-width: 95%;
	section {
		border-bottom: 2px solid rgb(65, 95, 115);
		margin-top: 10px;
		margin-bottom: 20px;
		margin-left: 50px;
		margin-right: 50px;
	}
	h2 {
		font-size: 2em;
		text-align: center;
	}
`;
export const Banner = styled.header`
	min-height: 400px;
	background: url(${BannerImg}) no-repeat;
	background-position: center;
	overflow: hidden;
	margin-top: 0.5em;
	margin-bottom: 1em;
	text-align: center;
	h1 {
		padding-top: 240px;
		font-size: 2em;
		font-weight: bold;
		text-transform: uppercase;
		color: #fff;
	}
	h2 {
		font-style: italic;
		font-weight: normal;
		font-size: 1.4em;
		text-transform: lowercase;
		letter-spacing: 0.1em;
		color: #fff;
	}
`;

export const Heading = styled.div`
	padding-left: 15%;
	padding-right: 15%;
	max-width: 1000px;
	h1 {
		font-family: Raleway, Cardo, Georgia, Times, serif;
		font-size: 1.6em;
		color: black;
		text-align: center;
	}
	p {
		float: center;
		font-size: 1em;
		text-align: center;
		margin: 1.2em 0;
	}
	h3 {
		font-family: Raleway, Cardo, Georgia, Times, serif;
		font-size: 1.1em;
		color: black;
		text-align: center;
	}
	section {
		border-bottom: 2px solid rgb(75, 75, 215);
		margin-bottom: 20px;
	}
`;

// home page style
export const Article = styled.article`
	padding-left: 5px;
	padding-right: 10px;
	h1 {
		/*text-align: center;*/
		font-family: Cardo, Georgia, Times, serif;
		font-size: 1.8em;
		border-bottom: 2px solid rgb(76, 67, 65);
		margin-bottom: 0.5em;
	}
	p {
		font-size: 1em;
		margin: 1.2em 0;
	}
`;
export const Images = styled.div`
	margin-top: 20px;
	margin-right: 5px;
	margin-left: 10px;
`;
