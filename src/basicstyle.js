import styled from "styled-components";
import LinkLogo from "./image/logos/icon_sprites_25.png";
import Contactlogo from "./image/logos/icon_sprites_50.png";
import Logo from "./image/logos/icons8-plant-48.png";
import Linkedlogo from "./image/logos/linked_icon.png";
import Youtubelogo from "./image/logos/youtube_icon.png";
import Facebooklogo from "./image/logos/facebook_icon.png";

export const Container = styled.div`
	font: 100% Cantarell, Arial, sans-serif;
	line-height: 1.5;
	position: relative;
	background: #fff;
	color: rgb(26, 23, 23);
	font-weight: normal;
	font-style: normal;
	max-width: 100%;
	margin: 0 auto;
`;

//page title
export const Pagetitle = styled.h1`
	line-height: 2.1em;
	font-size: 1em;
	font-weight: bold;
	text-transform: uppercase;
	background: url(${Logo}) no-repeat left center;
	padding-left: 50px;
`;

//navigation ioons
export const IconNav = styled.nav`
	overflow: hidden;
	margin-bottom: 1.5em;
	padding-left: 70px;
	ul {
		list-style: none;
	}
	li {
		float: left;
		margin-right: 0em;
	}
	a {
		display: block;
		color: rgb(76, 67, 65);
		border: none;
		font-size: 1.4em;
		text-align: center;
	}
	a:hover {
		color: rgb(219, 126, 164);
	}
`;

//navigation link
export const StyledLink = styled.li`
	a {
		background: url(${LinkLogo}) no-repeat ${props => props.position};
		padding-left: ${props => props.padding};
		color: ${props => props.active && "blue"};
	}
`;

//contaxt page style
export const Contact = styled.article`
	width: 70%;
	float: left;
	padding-left: 40px;
	background-color: #ffff;
	h1 {
		background: url(${Contactlogo}) right no-repeat;
		border-bottom: 2px solid rgb(76, 67, 65);
		margin-bottom: 1.5em;
	}
	h2 {
		border-bottom: 2px solid rgb(76, 67, 65);
		margin-bottom: 1.5em;
		font-size: 1.4em;
		float: none;
		margin-bottom: 1em;
	}
	ul {
		list-style: none;
	}
	li {
		display: inline-block;
		width: 5px;
		margin-bottom: 1em;
		width: 250px;
		a {
			color: rgb(76, 67, 65);
			border: none;
			padding-left: 40px;
			line-height: 50px;
			font-size: 1.2em;
			display: block;
			:hover {
				color: rgb(12, 12, 143);
			}
		}
	}
`;
export const Linked = styled.a`
	background: url(${Linkedlogo}) no-repeat left center;
`;
export const Youtube = styled.a`
	background: url(${Youtubelogo}) no-repeat left center;
`;
export const Facebook = styled.a`
	background: url(${Facebooklogo}) no-repeat left center;
`;
//contact user input
export const Fieldset = styled.fieldset`
	border: none;
	background: rgba(12, 48, 143, 0.19);
	float: left;
	padding: 1em;
	margin: 1em 0;
	max-width: 270px;
	min-width: 250px;
	:before {
		content: attr(title);
		display: block;
		font: 1.2em Cantarell, Arial, Helvetica, sans-serif;
		font-weight: bold;
		border-bottom: 1px solid rgb(76, 67, 65);
		width: 150px;
	}
	legend {
		position: absolute;
		top: 0;
		left: -2000em;
	}
	fieldset p {
		font: 0.8em Cantarell, Arial, Helvetica, sans-serif;
		margin: 1em 0 0;
		font-style: italic;
	}
	label {
		display: inline;
		font-size: 1em;
		margin: 0.8em 0 0;
	}
`;

//about page style
export const Image = styled.a`
	margin: 0 auto;
	padding-top: 5px;
	float: right;
`;
export const About = styled.article`
	width: 70%;
	float: left;
	padding-left: 10%;
	min-width: 290px;
	h2 {
		border-bottom: 2px solid rgb(76, 67, 65);
		font-size: 1.3em;
		float: none;
	}
	section {
		padding: 15px;
		margin-top: 30px;
		background: rgb(337, 228, 194);
		border: none;
		border-radius: 15px 15px 15px 15px;
		font-size: 1em;
		margin-bottom: 1em;
	}
`;

//page footer
export const PageFooter = styled.footer`
	clear: both;
	overflow: hidden;
	max-height: 80px;
	background: rgba(12, 48, 143, 0.66);
	padding-top: 1.5em;
	input[type="search"] {
		width: 35%;
	}
	label {
		display: block;
		font-size: 0.8em;
		text-transform: uppercase;
	}
	form {
		float: left;
		margin-left: 30px;
		display: inline;
		padding-bottom: 20px;
	}
	p {
		clear: right;
		margin-right: 20px;
		text-align: right;
	}
`;
