// Grid.tsx
import React from 'react';
import Row from './Row';

interface GridProps {
  attempts: string[][];
  statusFeedback: Array<('correct' | 'incorrect' | 'misplaced')[]>;
}

const Grid: React.FC<GridProps> = ({ attempts, statusFeedback }: GridProps) => {
  return (
    <div>
      {attempts.map((attempt, index) => (
        <Row key={index} letters={attempt} statuses={statusFeedback[index]} />
      ))}
    </div>
  );
};

export default Grid;
