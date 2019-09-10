import React, { useState } from 'react';
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

const Numbers = () => {
  const [digits] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {digits.map(digit => (
        <NumberButton number={digit} />
      ))}
    </div>
  );
};

export default Numbers;
