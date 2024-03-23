type Prop = {
  item: string;
};

export function Banner({ item }: Prop) {
  return <p>{item}</p>;
}
