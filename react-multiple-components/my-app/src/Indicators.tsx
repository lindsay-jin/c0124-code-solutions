import './Indicators.css';

type Prop = {
  count: number;
  index: number;
  onIndicatorClick: (clickedIndex: number) => void;
};

export function Indicators({ count, index, onIndicatorClick }: Prop) {
  const rowOfButtons: JSX.Element[] = [];

  for (let i = 0; i < count; i++) {
    let color = 'grey';
    if (i === index) {
      color = 'blue';
    }
    rowOfButtons.push(
      <button key={i} onClick={() => onIndicatorClick(i)} className={color}>
        {i}
      </button>
    );
  }

  return <div>{rowOfButtons}</div>;
}
