type Prop = {
  onNextClick: () => void;
};

export function NextButton({ onNextClick }: Prop) {
  return <button onClick={onNextClick}>Next</button>;
}
