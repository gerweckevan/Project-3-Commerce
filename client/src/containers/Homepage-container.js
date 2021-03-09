import React from "react";
import { Helmet } from "react-helmet";
import HeroBanner from "../components/Hero-banner";
import CarouselHomepage from "../components/Carousel-homepage";
import ChatBot from "react-simple-chatbot";
const styles = { marginTop: "-33px" };

const Homepage = () => (
  <div>
    <Helmet>
      <title>Demo Ecommerce template</title>
      <meta name="description" content="Demo Ecommerce template" />
    </Helmet>
    <HeroBanner />
    <ChatBot
      steps={[
        {
          id: "1",
          message:
            "Welcome to Creative Artist Design. I am Chatbot 3000, what is your name?",
          trigger: "2",
        },
        {
          id: "2",
          user: true,
          trigger: "3",
        },
        {
          id: "3",
          message: "Hello {previousValue}, nice to meet you!",
          end: true,
        },
      ]}
    />
    <div style={styles}>
      <CarouselHomepage />
    </div>
  </div>
);

export default Homepage;
