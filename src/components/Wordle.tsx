// Wordle.tsx
import React, { useState, ChangeEvent } from 'react';
import Row from '../components/Row';
import Grid from '../components/Grid';

interface WordleProps {
  targetWord: string;
}

const Wordle: React.FC<WordleProps> = ({ targetWord }: WordleProps) => {
  const [inputWord, setInputWord] = useState<string>('');
  const [attempts, setAttempts] = useState<string[][]>([]);
  const [remainingAttempts, setRemainingAttempts] = useState<number>(6);
  const [previousStatus, setPreviousStatus] = useState<('correct' | 'incorrect' | 'misplaced')[][]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputWord(e.target.value);
  };

  const handleGuess = () => {
    if (inputWord.length !== targetWord.length) {
      alert(`You must enter a ${targetWord.length} letter word.`);
      return;
    }
    if (remainingAttempts <= 0) {
      alert('You have reached the maximum number of attempts.');
      return;
    }

    if (inputWord.toLowerCase() === targetWord.toLowerCase()) {
      setPreviousStatus([...previousStatus, Array(targetWord.length).fill('correct')]);
      setAttempts([...attempts, inputWord.split('')]);
      setRemainingAttempts(remainingAttempts - 1);
    } else {
      const newStatusFeedback = targetWord.split('').map((letter, index) => {
        const guessedLetter = inputWord[index]?.toLowerCase();
        if (letter.toLowerCase() === guessedLetter) {
          return 'correct';
        } else if (targetWord.toLowerCase().includes(guessedLetter || '')) {
          return 'misplaced';
        } else {
          return 'incorrect';
        }
      });

      setAttempts([...attempts, inputWord.split('')]);
      setPreviousStatus([...previousStatus, newStatusFeedback]);
      setRemainingAttempts(remainingAttempts - 1);
    }

    setInputWord('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Grid attempts={attempts} statusFeedback={previousStatus} />
      {[...Array(remainingAttempts)].map((_, index) => (
        <Row key={`empty-${index}`} letters={Array(targetWord.length).fill(' ')} statuses={Array(targetWord.length).fill('incorrect')} />
      ))}
      <input
        type="text"
        maxLength={targetWord.length}
        value={inputWord}
        onChange={handleInputChange}
        className="mt-4 p-2 border border-gray-300 rounded"
      />
      <button onClick={handleGuess} className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Guess
      </button>
    </div>
  );
};

export default Wordle;

