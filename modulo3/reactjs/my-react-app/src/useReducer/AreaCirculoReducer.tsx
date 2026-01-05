import { useReducer, type ChangeEvent } from "react";

interface CircleState {
  radio: number;
  area: number;
}

type CircleAction = {
  name: "radio";
  value: string;
};

const initialState: CircleState = { radio: 0, area: 0 };

function reducer(state: CircleState, action: CircleAction): CircleState {
  const radio = Number(action.value) || 0;
  return {
    radio,
    area: radio > 0 ? Math.PI * radio * radio : 0,
  };
}

export default function AreaCirculoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ name: "radio", value: e.target.value });
  }

  return (
    <form>
      <input
        name="radio"
        type="number"
        value={state.radio}
        onChange={handleChange}
        placeholder="Radio del círculo"
      />
      <p>Área: {state.area.toFixed(2)}</p>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </form>
  );
}
