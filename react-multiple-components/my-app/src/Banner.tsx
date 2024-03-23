type Prop = {
  item: string;
};

export function Banner({ item }: Prop) {
  return <p style={{ fontSize: '2rem' }}>{item}</p>;
}
