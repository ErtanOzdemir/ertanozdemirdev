import React, { useState } from "react";
import styled from "styled-components";
import PageWithNavBar from "../../components/Template/PageWithNavBar";
import ProfilePicture from "../../assests/images/ertan.png";
import WorkExperience from "../../components/About/WorkExperience/WorkExperience";
import cantTouchThis from "../../assests/sounds/you_cant_touch_this.mp3";
import useSound from "use-sound";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 90vh;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    min-height: initial;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  flex: 1;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Title = styled.div`
  color: rgb(170, 170, 170);
  font-size: 80px;
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;
    font-size: 60px;
  }
`;

const WorkExperienceTitle = styled.div`
  color: rgb(170, 170, 170);
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;
    font-size: 30px;
  }
`;

const Description = styled.div`
  color: rgb(119, 119, 119);
  font-size: 18px;
  display: block;
  @media (max-width: 768px) {
    text-align: center;
  }
  line-height: 1.4;
`;

const Highlight = styled.b`
  font-size: 20px;
`;

export default function AboutPage() {
  const [play, { stop }] = useSound(cantTouchThis);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);

  const handleSoundEvents = () => {
    if (isSoundPlaying) {
      setIsSoundPlaying(false);
      return stop();
    }
    setIsSoundPlaying(true);
    return play();
  };

  return (
    <PageWithNavBar>
      <Container>
        <div>
          <Title>About me</Title>
          <Description>
            As a web developer, I develop both backend and frontend
            applications. The technologies I generally use are{" "}
            <Highlight>Node.js</Highlight>,<Highlight>React.js</Highlight>,{" "}
            <Highlight>GraphQL</Highlight>. Besides these, I have also worked on
            different technologies such as <Highlight>web scraping</Highlight>,{" "}
            <Highlight>websocket</Highlight>,{" "}
            <Highlight>Chrome Extension</Highlight>
            applications, <Highlight>RabbitMQ</Highlight>,{" "}
            <Highlight>REST APIs</Highlight>. As you can understand, I am trying
            to specialize in mostly <Highlight>JavaScript</Highlight>.
          </Description>
        </div>
        <Image onClick={handleSoundEvents} src={ProfilePicture} />
      </Container>
      <WorkExperienceTitle>Work Experience</WorkExperienceTitle>
      <WorkExperience />
    </PageWithNavBar>
  );
}
