import React, { useState } from "react";
import Button from "../../components/Buttons/Button";

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
      <div className='flex flex-row space-x-4 mt-4'>
        <Button primary rounded>
          Increment
        </Button>
        <Button rounded danger>
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default CounterWithReducer;
