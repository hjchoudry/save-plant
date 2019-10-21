import styled from "styled-components";
import BannerImg from "./image/logos/tree.jpg";

export const Banner = styled.header`
  background: url(${BannerImg}) no-repeat;
  background-position: center;
  min-height: 450px;
  overflow: hidden;
  margin-top: 0.5em;
  margin-bottom: 1em;
  text-align: left;
  h1 {
    padding-left: 50px;
    padding-top: 270px;
    font-size: 2em;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
  }
  h2 {
    padding-left: 40px;
    font-style: italic;
    font-weight: normal;
    font-size: 1.4em;
    text-transform: lowercase;
    letter-spacing: 0.1em;
    color: #fff;
  }
`;

export const Heading = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 1.4em;
`;
export const Videos = styled.div`
  margin-left: 10%;
  video {
    max-width: 80%;
    margin-left: 20px;
  }
`;

export const GridStyle = styled.article`
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const AddPhotos = styled.div`
  padding-left: 50px;
  padding-right: 20px;
`;
export const Image = styled.a`
  margin: 0;
`;
