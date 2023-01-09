import React, { useEffect, useState } from 'react'

function useCounter(initialState) {

  const [count, setCount] = useState(initialState);

  const increaseCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("count:", count);
  }, [count]);

  return (
    {
      count,
      increaseCount
    }
  )
}

export default useCounter