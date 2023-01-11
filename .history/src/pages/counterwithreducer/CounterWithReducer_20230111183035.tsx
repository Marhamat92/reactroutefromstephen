import React, { useReducer } from "react";
import Button from "../../components/Buttons/Button";

type Props = {
  initialState: number;
};

const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_ALOT = "addAlot";
const ADD = "add";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }; // ...state is a spread operator
    case DECREMENT:
      return { ...state, count: state.count - 1 }; // ...state is a spread operator
    case ADD_ALOT:
      return { ...state, valueToAdd: Number(action.payload) || 0 }; // ...state is a spread operator
    case ADD:
      return {
        ...state, // ...state is a spread operator
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
};

function CounterWithReducer({ initialState }: Props) {
  // const [count, setCount] = useState(initialState);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialState,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: INCREMENT }); // dispatch is a function that takes an action object
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: DECREMENT }); // dispatch is a function that takes an action object
  };

  const addAlot = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setValueToAdd(Number(e.target.value) || 0);
    dispatch({ type: ADD_ALOT, payload: e.target.value }); // dispatch is a function that takes an action object
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({ type: ADD });
  };

  return (
    <div>
      <h1 className='text-3xl font-bold text-green-500'>
        Count: <span className='text-red-500'>{state.count}</span>
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
        <form onSubmit={handleSubmit}>
          <label>Add a lot</label>
          <input
            value={state.valueToAdd || ""}
            className='border border-gray-300 rounded p-2'
            type='number'
            onChange={addAlot}
          />
          <Button>Add</Button>
        </form>
      </div>
    </div>
  );
}

export default CounterWithReducer;
