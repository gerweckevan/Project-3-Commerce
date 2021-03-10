import React from "react";
import { isMobile } from "react-device-detect";
import ButtonLinkGenderPage from "./Button-link-gender-page";
import { Jumbotron, Container } from "reactstrap";

const styles = {
  bannerCoverPc: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
    backgroundSize: "cover",
  },
  bannerCoverMobile: {
    backgroundImage: 'url("/img/A3-P5.jpg")',
    backgroundSize: "cover",
  },
  textBanner: {
    textShadow: "3px 3px 3px grey",
    textAlign: "center",
    color: "white",
  },
  centerButtons: {
    textAlign: "center",
    padding: "30px",
  },
  titleH1Pc: {
    fontSize: "80px",
  },
  titleH1Mobile: {
    fontSize: "60px",
  },
};

const {
  bannerCoverPc,
  bannerCoverMobile,
  textBanner,
  centerButtons,
  titleH1Mobile,
  titleH1Pc,
} = styles;

const HeroBanner = () => (
  <Jumbotron fluid style={isMobile ? bannerCoverMobile : bannerCoverPc}>
    <Container fluid style={{ height: "300px" }}>
      <div style={textBanner}>
        <h1 className="display-3" style={isMobile ? titleH1Mobile : titleH1Pc}>
          Creative Artist Design
        </h1>
        <p>T.O.T.W.</p>
      </div>
      <div style={centerButtons}>
        <ButtonLinkGenderPage gender={"Artwork"} content="Artwork" />
        <ButtonLinkGenderPage gender={"Merchandise"} content="Merchandise" />
      </div>
    </Container>
  </Jumbotron>
);

export default HeroBanner;
