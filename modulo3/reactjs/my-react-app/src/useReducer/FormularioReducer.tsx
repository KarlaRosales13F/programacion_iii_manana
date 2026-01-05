import { useReducer, type ChangeEvent } from "react";

interface FormState {
  nombre: string;
  email: string;
}

type FormAction = {
  name: keyof FormState; 
  value: string;
};

const initialState: FormState = { nombre: "", email: "" };

function reducer(state: FormState, action: FormAction): FormState {
  return { ...state, [action.name]: action.value };
}

export default function FormularioReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ name: e.target.name as keyof FormState, value: e.target.value });
  }

  return (
    <form>
      <input
        name="nombre"
        value={state.nombre}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </form>
  );
}
