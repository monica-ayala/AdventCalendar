import React from 'react';

interface CellProps {
  letter: string;
  status: 'correct' | 'incorrect' | 'misplaced';
}

const Cell: React.FC<CellProps> = ({ letter, status }: CellProps) => {
  let cellStyle: React.CSSProperties;

  switch (status) {
    case 'correct':
      cellStyle = {
        backgroundColor: 'green',
        color: 'white',
      };
      break;
    case 'incorrect':
      cellStyle = {
        backgroundColor: 'grey',
        color: 'white',
      };
      break;
    case 'misplaced':
      cellStyle = {
        backgroundColor: 'orange',
        color: 'black',
      };
      break;
    default:
      cellStyle = {
        backgroundColor: '#f0f0f0',
        color: 'black',
      };
  }

  // Common cell styles
  cellStyle = {
    ...cellStyle,
    width: '80px',
    height: '80px',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2px',
    fontSize: '40px',
    fontWeight: 'bold',
  };

  return <div style={cellStyle}>{letter}</div>;
};

export default Cell;
