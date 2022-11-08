import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 1,
    label: '₹1L',
  },
  {
    value: 2,
    label: '₹2L',
  },
  {
    value: 3,
    label: '₹3L',
  },
  {
    value: 5,
    label: '₹5L',
  },
];

function valuetext(value) {
  return `₹${value}L`;
}

function AmountSlider() {
    return (
          <div>
          <h4></h4>
          <Slider
            aria-label="Deductable amount"
            defaultValue={10}
            getAriaValueText={valuetext}
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
            max = {5}
            min = {1}
          />
        </div>  
      );
  }

  export default AmountSlider; 