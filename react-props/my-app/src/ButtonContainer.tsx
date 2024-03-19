export function ButtonContainer({ button }: Props) {
  return (
    <div>
      <button>{button}</button>
    </div>
  );
}

type Props = {
  button: string;
};
