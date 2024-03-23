type Prop = {
  count: number;
  index: number;
};

export function Indicators({ count }: Prop) {
  const rowOfButtons: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    rowOfButtons.push(<button key={i}>{i}</button>);
  }

  return <div>{rowOfButtons}</div>;
}
