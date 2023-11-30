// Wordle.tsx
import React, { useState, ChangeEvent } from 'react';
import Row from '../components/Row';
import Grid from '../components/Grid';
import { IAttempt } from '../types/index';
import { SupabaseContext } from '../App.tsx'
import { IDay } from '../types/index.ts'
interface WordleProps {
  targetWord: string;
  oldAttempts: IAttempt[];
  isWon?: boolean;
  day?: IDay;
}

const Wordle: React.FC<WordleProps> = ({ targetWord, oldAttempts, isWon, day}: WordleProps) => {
  const [inputWord, setInputWord] = useState<string>('');
  const [attempts, setAttempts] = useState<string[][]>([]);
  const [remainingAttempts, setRemainingAttempts] = useState<number>(6);
  const [previousStatus, setPreviousStatus] = useState<('correct' | 'incorrect' | 'misplaced')[][]>([]);
  const [isWonState, setIsWonState] = useState<boolean>(isWon || false);
  const supabase: any = React.useContext(SupabaseContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputWord(e.target.value);
  };

  const saveGame = async () => {
    if (day?.id) {
    const { error } = await supabase
      .from('gifts')
      .upsert(
        [
          {
            id: day.id,
            guess1: attempts[0] ? attempts[0].join('') : 'raclette',
            status1: previousStatus[0] ? previousStatus[0] : '{}',
            guess2: attempts[1] ? attempts[1].join('') : '',
            status2: previousStatus[1] ? previousStatus[1] : '{}',
            guess3: attempts[2] ? attempts[2].join('') : '',
            status3: previousStatus[2] ? previousStatus[2] : '{}',
            guess4: attempts[3] ? attempts[3].join('') : '',
            status4: previousStatus[3] ? previousStatus[3] : '{}',
            guess5: attempts[4] ? attempts[4].join('') : '',
            status5: previousStatus[4] ? previousStatus[4] : '{}',
            guess6: attempts[5] ? attempts[5].join('') : '',
            status6: previousStatus[5] ? previousStatus[5] : '{}',
            status: 'Claimed',
          },
        ],
        { onConflict: ['id'] }
      );
  
    if (error) {
      console.error(error);
    }
    setIsWonState(true)
    }
    
  };

  const handleGuess = () => {
    if (inputWord.length !== targetWord.length) {
      alert(`You must enter a ${targetWord.length} letter word.`);
      return;
    }
    if (remainingAttempts <= 0) {
      alert('You have reached the maximum number of attempts.');
      saveGame();
      return;
    }

    if (inputWord.toLowerCase() === targetWord.toLowerCase()) {
      setPreviousStatus([...previousStatus, Array(targetWord.length).fill('correct')]);
      setAttempts([...attempts, inputWord.split('')]);
      setRemainingAttempts(remainingAttempts - 1);
      alert('Congratulations, you won!');
      console.log(previousStatus)
      saveGame();
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
    <div className="flex flex-col items-center justify-center p-10">
    { oldAttempts.length > 0 ? (<div>
      {oldAttempts.map((attempt, index) => (
        <>
        <Row key={index} letters={attempt.letters} statuses={attempt.statuses} />
        </>
      ))}
    </div>) :(   <>   <Grid attempts={attempts} statusFeedback={previousStatus} />
      
      {[...Array(remainingAttempts)].map((_, index) => (
        <Row key={`empty-${index}`} letters={Array(targetWord.length).fill(' ')} statuses={Array(targetWord.length).fill('incorrect')} />
      ))}</>)}
      
      {!isWonState && (<><input
        type="text"
        maxLength={targetWord.length}
        value={inputWord}
        onChange={handleInputChange}
        className="mt-4 p-2 border border-gray-300 rounded"
      /><button onClick={handleGuess} className="mt-2 p-2 bg-red-600 text-white rounded hover:bg-red-700">
        Adivina
      </button></>)}
    </div>
  );
};

export default Wordle;

