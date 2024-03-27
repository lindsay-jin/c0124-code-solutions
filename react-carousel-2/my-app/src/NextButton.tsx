import { GrNext } from 'react-icons/gr';

type Prop = {
  onNextClick: () => void;
};

export function NextButton({ onNextClick }: Prop) {
  return (
    <div className="nextButtonContainer">
      <GrNext onClick={onNextClick} style={{ cursor: 'pointer' }} />
    </div>
  );
}
