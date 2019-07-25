import React from "react";
import "../styles/index.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import TextSection from "../components/TextSection";
import GridList from "../components/GridList";
import Section from "../components/Section";
import { Helmet } from "react-helmet";
import GridCol from "../components/GridCol";
import AnimatedTitle from "../components/AnimatedTitle";

export default () => (
  <ParallaxProvider>
    <Helmet>
      <title>Lynx | Stockholm Software Agency</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      ></link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color="#222222"
      ></link>
      <meta name="msapplication-TileColor" content="#da532c"></meta>
      <meta name="theme-color" content="#ffffff"></meta>
    </Helmet>
    <Section className="full-height section--center-v">
      <GridCol className="sm12 lg6">
        <AnimatedTitle className="title--big">We make software that works.</AnimatedTitle>
      </GridCol>
    </Section>
    <Section>
      <GridCol className="sm12 md6">
        <AnimatedTitle>We are Lynx.</AnimatedTitle>
      </GridCol>
      <GridCol className="sm12 md6">
        <p>
          Founded by <a href="https://github.com/ThePicoNerd">@ThePicoNerd</a>{" "}
          in Stockholm in 2015, we help people and businesses with everything
          software. We mean it. Need a new, stunning website? No problem. Want
          to develop a mobile app, too? Well, we don't know how to do it{" "}
          <i>yet</i>, but we are always learning! Tell us about your idea and we
          promise to try our best to make it happen.
        </p>
      </GridCol>
    </Section>
    <Section>
      <GridCol className="sm12 md6">
        <AnimatedTitle>We specialize in scalability.</AnimatedTitle>
      </GridCol>
      <GridCol className="sm12 md6">
        <p>
          Our applications are always ready to handle huge spikes in traffic,
          without the end users even noticing. We achieve this with the help of
          tools like <a href="https://www.docker.com">Docker</a> and{" "}
          <a href="https://kubernetes.io">Kubernetes</a>. If your application
          suddenly becomes less popular, your application will scale down to
          keep costs as low as possible. Sure, the scaling is handled by
          Kubernetes, but the applications are made and <i>containerized</i> by
          us.
        </p>
      </GridCol>
    </Section>
    <Section>
      <TextSection className="sm12 md6" title="This is our toolbox.">
        <p>
          We work with tools we like, and we are always trying to improve. If
          you have a project on your mind involving a tool not listed above, we
          will of course <i>at least</i> attempt to learn it.
        </p>
      </TextSection>
      <div className="sm12 md6">
        <GridList
          cols="3"
          items={[
            ".NET Core",
            "C#",
            "CSS",
            "Docker",
            "DigitalOcean",
            "Firebase",
            "GitLab",
            "Google Cloud Platform",
            "gRPC",
            "GTFS",
            "HTML",
            "JavaScript",
            "Kubernetes",
            "Node.js",
            "PostgreSQL",
            "React",
            "Redis",
            "SQL",
            "TypeScript",
          ]}
        />
      </div>
    </Section>
    <Section>
      <TextSection
        className="sm12 md6"
        title="Ready to start your new project?"
      >
        <p>
          We are thrilled to help you with your new, groundbreaing idea. Send us
          an email or use the form to get in touch. We will reply as soon as
          possible!
        </p>
        <p>
          <u>hi@lynx.agency</u>
        </p>
      </TextSection>
      <div className="sm12 md6">
        <form action="https://formspree.io/hi@lynx.agency" method="POST">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="sm12 lg6"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="sm12 lg6"
            required
          />
          <textarea
            name="description"
            placeholder="Tell us about your idea!"
            className="sm12"
            required
          ></textarea>
          <GridCol className="sm12">
            <input type="submit" value="Send" />
          </GridCol>
        </form>
      </div>
    </Section>
    <div className="footer">
      <p>© 2019 Lynx</p>
    </div>
  </ParallaxProvider>
);
