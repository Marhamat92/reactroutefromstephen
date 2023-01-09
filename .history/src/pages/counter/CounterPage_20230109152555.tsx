import Button from "../../components/Buttons/Button";
import useCounter from "../../hooks/useCounter";

type Props = {
  initialCount: number;
};

function CounterPage({ initialCount }: Props) {
  const { count, increaseCount } = useCounter(initialCount);

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
