import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/Features.json";
import AboutContent from "../../content/AboutContent.json";
import Team from "../../content/Team.json";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <div id="home" />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="beehive.svg"
        id="homepage"
      />
      <div id="about" />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="about.svg"
      />
      <div id="features" />
      <MiddleBlock
        title={MiddleBlockContent.title}
        section={MiddleBlockContent.section}
      />
      <div id="team" />
      <MiddleBlock
        title={Team.title}
        section={Team.section}
      />
    </Container>
  );
};

export default Home;
