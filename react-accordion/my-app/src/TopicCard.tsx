type Prop = {
  topic: { id: number; title: string; content: string };
  onTitleClick: () => void;
  isOpen: boolean;
};

export function TopicCard({ topic, onTitleClick, isOpen }: Prop) {
  return (
    <div>
      <div className="title" onClick={onTitleClick}>
        {topic.title}
      </div>
      {isOpen ? <div className="content">{topic.content}</div> : ''}
    </div>
  );
}
