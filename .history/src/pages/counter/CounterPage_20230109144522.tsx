import React, { useState, useEffect } from "react";
import Button from "../../components/Buttons/Button";

type Props = {
  initialState: number;
};

function CounterPage({ initialState }: Props) {
  const [count, setCount] = useState(initialState);

  const increaseCount = () => {
    setCount(count + 1);
    localStorage.setItem("count", JSON.stringify(count + 1));
  };

  const countFromLocalStorage = JSON.parse(
    localStorage.getItem("count") || "0"
  );

  useEffect(() => {
    console.log("count:", count);
  }, [count]);

  return (
    <div>
      <h1>Count : {countFromLocalStorage}</h1>
      <Button onClick={increaseCount} primary rounded>
        Increase
      </Button>
    </div>
  );
}

export default CounterPage;
