import React, { useState, useEffect } from "react";
import Button from "../../components/Buttons/Button";

type Props = {};

function CounterPage({}: Props) {
  return (
    <div>
      <h1>Count : {count}</h1>
      <Button onClick={increaseCount} primary rounded>
        Increase
      </Button>
    </div>
  );
}

export default CounterPage;
