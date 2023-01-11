import React, { useState } from "react";
import Button from "../../components/Buttons/Button";

type Props = {
  initialState: number;
};

function CounterWithReducer({ initialState }: Props) {
  const [count, setCount] = useState(initialState);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 className='text-3xl font-bold text-green-500'>
        Count: <span className='text-red-500'>{count}</span>
      </h1>
      <div className='flex flex-row space-x-4 mt-4'>
        <Button onClick={increment} primary rounded>
          Increment
        </Button>
        <Button onClick={decrement} rounded danger>
          Decrement
        </Button>
      </div>
      <div className='flex flex-col w-60'>
        <label>Add a lot</label>
        <input
          value={valueToAdd}
          className='border border-gray-300 rounded p-2'
          type='number'
        />
      </div>
    </div>
  );
}

export default CounterWithReducer;
