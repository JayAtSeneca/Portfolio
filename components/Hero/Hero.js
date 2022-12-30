import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi there! my name is Jay Chaudhari. I am a recent graduate with a diploma in computer programming, I am excited to begin my career as a software developer. I have a strong foundation in software design and development, with experience in languages such as Java and Python. I am a quick learner and highly motivated to continue learning and growing in this field. In my free time, I enjoy staying up to date with the latest technologies and participating in hackathons and coding competitions. I am looking for opportunities to join a team of skilled developers where I can contribute and learn from my colleagues.
        </SectionText>
        <Link href="https://github.com/JayAtSeneca" target="_blank" ><Button>Learn more</Button></Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;