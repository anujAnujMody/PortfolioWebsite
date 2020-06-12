import React from "react";
import Contact from "../components/contact";
import Education from "../components/education";
import Experience from "../components/experience";
import Expertise from "../components/expertise";
import Home from "../components/home";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Portfolio from "../components/portfolio";
import SEO from "../components/seo";
import Skills from "../components/skills";
import Testimonials from "../components/testimonials";

function IndexPage() {


  return (
    <Layout>
      <SEO
        keywords={[
          `Mobile Developer`,
          `Web Developer`,
          `Front-End Developer`,
          `Portfolio`,
        ]}
        title="Home"
      />
      <section>
        <Home></Home>
        <Intro></Intro>
        <Expertise></Expertise>
        <Experience></Experience>
        <Skills></Skills>
        <Education></Education>
        <Portfolio></Portfolio>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </section>
    </Layout>
  );
}

export default IndexPage;
