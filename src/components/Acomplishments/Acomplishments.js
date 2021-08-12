import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 6, text: 'Open Source Projects'},
  { number: null, text: 'Graduated from IUT this year', },
  { number: null, text: 'An arctic code-vault contributor in GitHub', },
  { number: 300+'+', text: 'Solved problems in leetcode and codeforces' },
  { number: null, text: 'Completed The Complete Web Developer in 2019: Zero to Mastery'},
  { number: null, text: 'Completed The complete DataScience Bootcamp 2020'},
  { number: null, text: 'Completed Learning To Learn(For software developers) :Zero to mastery'},
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
         <Box key={index}>
           <BoxNum>{card.number}</BoxNum>
           <BoxText>{card.text}</BoxText>
         </Box>  
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
