import Button from "../../components/Buttons/Button";
import { useCounter } from "../../hooks/useCounter";

type Props = {};

function CounterPage({}: Props) {
  const { count, increaseCount } = useCounter(initialState);

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
