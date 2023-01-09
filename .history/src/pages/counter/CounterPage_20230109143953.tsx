import React, { useState } from "react";

type Props = {
  initialState: number;
};

function CounterPage({ initialState }: Props) {
  const [count, setCount] = useState(initialState);

  return (
    <div>
      <h1>Count : {count}</h1>
    </div>
  );
}

export default CounterPage;
