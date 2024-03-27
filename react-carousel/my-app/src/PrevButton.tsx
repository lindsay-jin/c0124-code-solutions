import { GrPrevious } from 'react-icons/gr';

type Prop = {
  onPrevClick: () => void;
};

export function PrevButton({ onPrevClick }: Prop) {
  return (
    <div className="prevButtonContainer">
      <GrPrevious style={{ cursor: 'pointer' }} onClick={onPrevClick} />
    </div>
  );
}
