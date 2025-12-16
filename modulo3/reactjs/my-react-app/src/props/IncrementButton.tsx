type Props = {
  onIncrement: () => void;
};

export default function IncrementButton(props: Props) {
  return (
    <button onClick={props.onIncrement}>
      Sumar 1
    </button>
  );
}
