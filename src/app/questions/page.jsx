import React, { Suspense } from 'react'
import QuestionsContent from '../components/QuestionsContent';

export default function Questions() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <QuestionsContent/>
  </Suspense>
);
}
