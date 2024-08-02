import React, { Suspense } from 'react'
import QuestionsContent from '../components/QuestionsContent';

export default function Questions() {
  return (
    <Suspense fallback={<div className='p-3'>Loading...</div>}>
    <QuestionsContent/>
  </Suspense>
);
}
