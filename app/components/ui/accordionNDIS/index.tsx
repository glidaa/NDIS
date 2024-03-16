import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { BottomArrowIcon } from 'app/components/icons/bottom-arrow-icon';

interface IAccordionNDIS {
  title: string,
  text: string,
  size: 'full' | 'xl' | 'sm'
}

const AccordionNDIS = ({ title, text, size }: IAccordionNDIS) => {
  const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(false)
  return (
    <Accordion
      sx={{
        width: size === 'full' ? '100%' : size === 'sm' ? '343px' : '768px',
        border: 'none',
        boxShadow: 'none'
      }}
      onChange={(event, expanded) => setAccordionIsOpen(expanded)}

    >
      <AccordionSummary
        expandIcon={<BottomArrowIcon fill={accordionIsOpen ? '#FFFFFF' : '#056FD9'} />}
        sx={{
          height: '100%',
          fontSizeG: '20px',
          fontWeight: 600,
          backgroundColor: accordionIsOpen ? '#056FD9' : '#F2F2F2',
          color: accordionIsOpen ? '#FFFFFF' : '#22272B',
          paddingX: '16px',
          boxShadow: 'none'
        }}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails
        sx={{ padding: '16px' }}
      >
        {text}
      </AccordionDetails>
    </Accordion>
  )
}

export { AccordionNDIS, IAccordionNDIS }