type Prop = {
  onType: (text: string) => void;
};

export function SearchBar({ onType }: Prop) {
  return (
    <div>
      <img src="../search-solid.svg" alt="" />
      <input
        type="text"
        placeholder="search"
        onChange={(e) => onType(e.target.value)}
      />
    </div>
  );
}
