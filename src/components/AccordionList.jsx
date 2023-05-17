import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { CaretDown } from 'phosphor-react';

function AccordionList({ i, name, releaseYear, children }) {
  return (
    <Accordion>
      <AccordionSummary id={`option${i}-header`} aria-controls={`option${i}-content`} expandIcon={<CaretDown />}>
        <div className="text-lg text-left text-secondaryColors-400 font-bold">{name} - {releaseYear}</div>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionList