// Row.tsx
import React from 'react';
import Cell from './Cell';

interface RowProps {
  letters: string[];
  statuses: ('correct' | 'incorrect' | 'misplaced')[];
}

const Row: React.FC<RowProps> = ({ letters, statuses }: RowProps) => {
  return (
    <div className="row" style={{ display: 'flex' }}>
      {letters.map((letter, index) => (
        <Cell key={index} letter={letter} status={statuses[index]} />
      ))}
    </div>
  );
};

export default Row;
