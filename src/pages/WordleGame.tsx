import Wordle from '../components/Wordle'
import { useEffect, useState } from 'react'
import { SupabaseContext } from '../App.tsx'
import React from 'react'
import { IDay } from '../types/index.ts'
import { useParams } from "react-router-dom";
import  Wrapper  from '../containers/Wrapper'
import Letter  from '../components/Letter'

type Props = {}

export default function WordleGame({}: Props) {
  const { id: day_id } = useParams();
  const supabase: any = React.useContext(SupabaseContext);
  const [word, setWord] = useState<string>('')
  const [day, setDay] = useState<IDay | null>(null);

  useEffect(() => {
    const fetchWord = async () => {
      let { data: word, error } = await supabase
        .from('gifts')
        .select('password, id, letterDescription, status, name')
        .eq('id', day_id)
        .single()
      if (error) {
        console.log("Error fetching word:", error);
        return;
      }
      if (word) {
        const fetchedDay = {
          id: word.id,
          password: word.password,
          letterDescription: word.letterDescription,
          status: word.status,
          name: word.name,
         }
        setWord(word.password)
        setDay(fetchedDay)
    } 
  }
  fetchWord()
  }, [day_id]);


  return (
    <Wrapper>
      <div className='flex grid-flow-col'>
      { day && <Letter day={day} />}
      <Wordle targetWord={word}/>
      </div>
    
    </Wrapper>
  )
}
