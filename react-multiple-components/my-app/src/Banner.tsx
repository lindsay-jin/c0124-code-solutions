type Prop = {
  item: string;
};

export function Banner({ item }: Prop) {
  return <p>{item}</p>;
}

//Pass the state to each component that needs to use it.
//Declare a prop in the child component to receive the state
//Pass the state to that prop in the parent component
