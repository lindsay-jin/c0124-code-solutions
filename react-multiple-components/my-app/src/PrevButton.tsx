type Prop = {
  onPrevClick: () => void;
};

export function PrevButton({ onPrevClick }: Prop) {
  return <button onClick={onPrevClick}>Prev</button>;
}
