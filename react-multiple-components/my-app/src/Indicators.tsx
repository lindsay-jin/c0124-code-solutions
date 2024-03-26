import './Indicators.css';

type Prop = {
  count: number;
  index: number;
  onIndicatorClick: (clickedIndex: number) => void;
};

export function Indicators({ count, index, onIndicatorClick }: Prop) {
  const rowOfButtons: JSX.Element[] = [];

  for (let i = 0; i < count; i++) {
    rowOfButtons.push(
      <button
        key={i}
        onClick={() => onIndicatorClick(i)}
        style={{
          backgroundColor: i === index ? 'lightblue' : 'grey',
          fontStyle: 'bold',
        }}>
        {i}
      </button>
    );
  }

  return <div>{rowOfButtons}</div>;
}
