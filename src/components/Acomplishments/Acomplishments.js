import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '6 years', text: 'Active Duty Navy'},
  { number: 228, text: 'Github contributions this year', },
  { number: 1, text: 'Hackathon 1st place'}
];

const Acomplishments = () => (
<Section>
  <SectionTitle>Accomplishments</SectionTitle>
  <Boxes>
  {data.map((card, idx) => (
    <Box key={idx}>
      <BoxNum>{card.number}</BoxNum>
      <BoxText>{card.text}</BoxText>
    </Box>
  ))}
  </Boxes>
</Section>
);

export default Acomplishments;
