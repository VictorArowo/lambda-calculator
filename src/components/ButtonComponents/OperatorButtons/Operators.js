import React, { useState } from 'react';

import { operators } from '../../../data';
import OperatorButton from './OperatorButton';

const Operators = () => {
  const [signs] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {signs.map(sign => (
        <OperatorButton sign={sign} />
      ))}
    </div>
  );
};

export default Operators;
