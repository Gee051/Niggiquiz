"use client"
import React, { Suspense, useState } from 'react'
import QuestionsContent from '../components/QuestionsContent';

export default function Questions() {
  const [key, setKey] = useState(0);

  const handleRestart = () => {
    setKey(prevKey => prevKey + 1);
  };

  return (
    <Suspense fallback={<div className='p-3'>Loading...</div>}>
      <QuestionsContent key={key} onRestart={handleRestart} />
    </Suspense>
  );
}
