import { useState } from 'react';
import { TopicCard } from './TopicCard';

type Prop = {
  topics: { id: number; title: string; content: string }[];
};

export function Accordion({ topics }: Prop) {
  const [clickedTab, setClickedTab] = useState<number | null>(null);

  function handleClick(id: number): void {
    if (clickedTab === id) {
      setClickedTab(null);
    } else {
      setClickedTab(id);
    }
  }

  const title = topics.map((topic) => (
    <TopicCard
      key={topic.id}
      topic={topic}
      onTitleClick={() => handleClick(topic.id)}
      isOpen={clickedTab === topic.id}
    />
  ));

  return <div>{title}</div>;
}
