type Prop = {
  lists: string[]; //the filtered list, pass it as a prop
};

export function List({ lists }: Prop) {
  if (lists.length === 0) {
    return (
      <div>
        <p>No items match the filter.</p>
      </div>
    );
  }

  const result = lists.map((list) => <li>{list}</li>);
  //mapping over the filtered list

  return (
    <div>
      <ul>{result}</ul>
    </div>
  );
}
