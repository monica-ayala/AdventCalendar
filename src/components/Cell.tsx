import React from 'react';

interface CellProps {
  letter: string;
  status: 'correct' | 'incorrect' | 'misplaced';
}

const Cell: React.FC<CellProps> = ({ letter, status }: CellProps) => {
  let cellStyle: React.CSSProperties = {
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2px',
    fontSize: '40px',
    fontWeight: 'bold',
  };

  switch (status) {
    case 'correct':
      cellStyle.backgroundColor = 'green';
      cellStyle.color = 'white';
      break;
    case 'incorrect':
      cellStyle.backgroundColor = 'grey';
      cellStyle.color = 'white';
      break;
    case 'misplaced':
      cellStyle.backgroundColor = 'orange';
      cellStyle.color = 'black';
      break;
    default:
      cellStyle.backgroundColor = '#f0f0f0';
      cellStyle.color = 'black';
  }

  return (
    <div
      style={{
        ...cellStyle,
        width: window.innerWidth >= 1024 ? '80px' : '30px',
        height: window.innerWidth >= 1024 ? '80px' : '30px',
      }}
    >
      {letter}
    </div>
  );
};

export default Cell;
