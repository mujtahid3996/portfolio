import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
const visit='mailto:syedmujtahid@iut-dhaka.edu'
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        welcome to<br />
        Mujtahids personal portfolio
      </SectionTitle>
      <SectionText>
        This purpose of this portfolio site is to 
        indroduce viewrs about myself and my personal works
      </SectionText>
    </LeftSection>

  </Section>
);

export default Hero;