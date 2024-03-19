export function ImageCaption({ caption }: Props) {
  return (
    <div>
      <h3>{caption}</h3>
    </div>
  );
}

type Props = {
  caption: string;
};
