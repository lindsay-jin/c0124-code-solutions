export function ImageDescription({ text }: Props) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

type Props = {
  text: string;
};
