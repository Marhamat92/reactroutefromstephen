import React, { useState } from "react";

type Props = {
  initialState: number;
};

function CounterWithReducer({ initialState }: Props) {
  const [count, setCount] = useState(initialState);
  const [valueToAdd, setValueToAdd] = useState(0);

  return (
    <div>
      <h1 className='text-3xl font-bold text-green-500'>
        Count: <span className='text-red-500'>{count}</span>
      </h1>
    </div>
  );
}

export default CounterWithReducer;
