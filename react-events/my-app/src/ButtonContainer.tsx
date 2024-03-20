type Props = {
  buttonText: string;
  onImageClick: () => void;
};

export function ButtonContainer({ buttonText, onImageClick }: Props) {
  return (
    <div>
      <button onClick={onImageClick}>{buttonText}</button>
    </div>
  );
}
