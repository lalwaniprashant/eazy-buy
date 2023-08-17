import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to <b>EazyBuy</b> - your ultimate destination for college
            student essentials. We understand the demands of college life, which
            is why we've curated a convenient online platform offering a wide
            array of daily necessities, from textbooks and stationery to snacks
            and dorm room must-haves. Simplify your college journey with
            StudentMart's affordable prices, doorstep delivery, and a community
            that understands and supports your needs. Shop now and experience
            the ease of getting your daily essentials taken care of, so you can
            focus on what truly matters.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
