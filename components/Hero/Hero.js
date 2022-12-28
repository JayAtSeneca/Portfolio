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
          The purpose of my portfolio website is to showcase my work and demonstrate my skills and abilities to potential clients and employers. It serves as a centralized location for people to learn more about my professional background and experience, and provides a platform for me to share my creative ideas and projects with a wider audience. Through this website, I hope to establish a professional online presence and establish myself as an expert in my field, while also building and growing my personal brand. My ultimate goal is to use this website to help me land the types of jobs and clients that align with my professional goals and passions.
        </SectionText>
        <Link href="https://github.com/JayAtSeneca" target="_blank" ><Button>Learn more</Button></Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;