import React from "react";
import { Helmet } from "react-helmet";
import HeroBanner from "../components/Hero-banner";
import CarouselHomepage from "../components/Carousel-homepage";
import ChatBot from "react-simple-chatbot";
const styles = { marginTop: "-33px" };

const Homepage = () => (
  <div>
    <Helmet>
      <title>Creative Artist Design</title>
      <meta name="description" content="Homepage" />
    </Helmet>
    <HeroBanner />
    <ChatBot
      steps={[
        {
          id: "1",
          message:
            "Welcome to Creative Artist Design. I am Chatbot 3000, together we will Take Over the World! What is your name?",
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
          trigger: "4",
          // end: true,
        },
        {
          id: "4",
          user: true,
          trigger: "5",
        },
        {
          id: "5",
          message: "What may I assist you with today?",
          trigger: "6",
        },
        {
          id: "6",
          user: true,
          trigger: "7",
        },
        {
          id: "7",
          message:
            "I see you've requested help with {previousValue}, unfortunately, this feature is currently in the testing phase. Please check back soon for updates!",
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
